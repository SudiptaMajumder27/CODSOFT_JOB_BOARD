
import User from "../model/user.model.js";
import JobPost from "../model/jobpost.model.js"; 
import JobApplication from "../model/JobApplication.model.js";
import Contact from "../model/contact.model.js"
import bcryptjs from "bcryptjs";
import transporter from "../mailer.js";
export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }
        const hashPassword = await bcryptjs.hash(password, 10);
        const createdUser = new User({
            fullname: fullname,
            email: email,
            password: hashPassword,
        });
        await createdUser.save();
        res.status(200).json({
            message: "User created successfully",
            user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid username or password" });
        }
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        } else {
            res.status(201).json({
                message: "Login successful",
                user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email,
                },
            });
        }
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};



export const jobpost = async (req, res) => {
    try {
        const { email, company_name, title, skils,category, location, duration, stypend, description, imageUrl } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email" });
        }

        const createdJob = new JobPost({
            email: email,
            fullname: user.fullname,
            company_name: company_name,
            title: title,
            skils: skils,
            category: category,
            location: location,
            duration: duration,
            stypend: stypend,
            description: description,
            imageUrl: imageUrl,
            user: user._id,  // Associate the job post with the user
        });

        await createdJob.save();
        const mailOptions = {
            from: process.env.SMPT_MAIL, // Your Gmail address
            to: email, // User's email address
            subject: 'Job posted Successfully! Check your email!',
            text: `Hello ${company_name},\n\nYour post for ${title} has been submitted successfully.\n\nBest regards,\nJob Board Team`,
          };

          transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
            } else{
                console.log("Email sent successfully!");
            }
          });
       

        res.status(201).json({
            message: "Job post created successfully",
            job: {
                _id: createdJob._id,
                email: createdJob.email,
                fullname: createdJob.fullname,
                company_name: createdJob.company_name,
                title: createdJob.title,
                skils: createdJob.skils,
                category: createdJob.category,
                location: createdJob.location,
                duration: createdJob.duration,
                stypend: createdJob.stypend,
                description: createdJob.description,
                imageUrl: createdJob.imageUrl,
            },
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
    

};




export const apply = async (req, res) => {
    try {
        const { company_title, fullname, email, coverLetter } = req.body;

        // Check if the file was uploaded
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        const resumeFile = req.file.filename; // Get the uploaded file's name
        console.log("File received:", req.file);
        // Find the user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email" });
        }

        // Create a new job application
        const newApplication = new JobApplication({
            company_title,
            fullname,
            email,
            resumeFile,
            coverLetter,
            user: user._id, // Associate the application with the user
        });

        await newApplication.save(); 
        // Save the application to the database
        const mailOptions = {
            from: process.env.SMPT_MAIL, // Your Gmail address
            to: email, // User's email address
            subject: 'Application Submitted Successfully! Check your email!',
            text: `Hello ${fullname},\n\nYour application for ${company_title} has been submitted successfully.\n\nBest regards,\nJob Portal Team`,
          };

          transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
            } else{
                console.log("Email sent successfully!");
            }
          });

        res.status(201).json({
            message: "Job applied successfully",
            job: {
                _id: newApplication._id,
                company_title: newApplication.company_title,
                fullname: newApplication.fullname,
                email: newApplication.email,
                resumeFile: newApplication.resumeFile,
                coverLetter: newApplication.coverLetter,
            }
        });
    } catch (error) {
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });
    }
};


export const contact = async (req, res) =>{
    try{
        const {name, email , description} = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email" });
        }
        const createdContact = new Contact({
            name: name,
            email: email,
            description: description,
            user: user._id,
        });

        await createdContact.save();

        const mailOptions = {
            from: process.env.SMPT_MAIL, // Your Gmail address
            to: email, // User's email address
            subject: 'Your message was submitted successfully! Check your email!',
            text: `Hello ${name},\n\nYour message  "${description}" has been submitted successfully.\n\nBest regards,\nJob Board Team`,
          };

          transporter.sendMail(mailOptions, function(error, info){
            if(error){
                console.log(error);
            } else{
                console.log("Email sent successfully!");
            }
          });

          res.status(201).json({
            message: "Your query submited successfully",
            contact: {
                _id:createdContact._id,
                name:createdContact.name,
                email:createdContact.email,
                description:createdContact.description
            },
          });

    }catch(error){
        console.log("Error: " + error.message);
        res.status(500).json({ message: "Internal server error" });

    }

};















