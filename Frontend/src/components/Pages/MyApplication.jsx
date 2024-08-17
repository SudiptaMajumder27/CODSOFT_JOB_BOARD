/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */

// // /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function MyApplication() {
//   const [applications, setApplications] = useState([]);
//   const [email, setEmail] = useState(''); // Input for user email

//   useEffect(() => {
//     if (email) {
//       axios.get(`http://localhost:5001/myapplications?email=${email}`)
//         .then(response => {
//           setApplications(response.data);
//         })
//         .catch(error => {
//           console.error('Error fetching applications:', error);
//         });
//     }
//   }, [email]);

//   const handleEmailSubmit = (e) => {
//     e.preventDefault();
//     setEmail(e.target.email.value);
//   };

//   return (
//     <div className="max-w-screen-lg mx-auto mt-28">
//       <h1 className="text-2xl font-semibold md:text-4xl text-center">
//         Your Applied Jobs
//       </h1>

//       <form className="text-center mt-8" onSubmit={handleEmailSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your email to view applications"
//           className="input input-bordered input-primary w-full max-w-xs"
//           required
//         />
//         <button className="btn btn-accent btn-outline ml-4" type="submit">
//           View Applications
//         </button>
//       </form>

//       <div className="mt-12">
//         {applications.length === 0 && email && (
//           <p className="text-center text-gray-500">No applications found for this email.</p>
//         )}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {applications.map((application) => (
//             <div key={application._id} className="card shadow-lg p-6">

              
//               <p className="text-xl font-bold">
//               <strong>Job Title:</strong> {application.company_title}
//               </p>
              
//               <p className="text-gray-600 mt-4">
//                 <strong>Applicant Name:</strong> {application.fullname}
//               </p>
//               <p className="text-gray-600">
//                 <strong>Email:</strong> {application.email}
//               </p>
//               <p className="text-gray-600 mt-2">
//                 <strong>Resume Link:</strong> <a href={application.resumeLink} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Resume</a>
//               </p>
              
//                 <p className="mt-4 text-gray-600">
//                   <strong>Cover Letter:</strong>{application.coverLetter}
//                 </p>
              
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MyApplication;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function MyApplication() {
//   const [applications, setApplications] = useState([]);
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     if (email) {
//       axios.get(`http://localhost:5001/myapplications?email=${email}`)
//         .then(response => setApplications(response.data))
//         .catch(error => console.error('Error fetching applications:', error));
//     }
//   }, [email]);

//   const handleEmailSubmit = (e) => {
//     e.preventDefault();
//     setEmail(e.target.email.value);
//   };

//   const handleResumeDownload = (resumeFile) => {
//     axios.get(`http://localhost:5001/resumes/${resumeFile}`, {
//       responseType: 'blob',
//     }).then((response) => {
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', resumeFile);
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);
//     }).catch(error => console.error('Error downloading resume:', error));
//   };

//   return (
//     <div className="max-w-screen-lg mx-auto mt-28">
//       <h1 className="text-2xl font-semibold md:text-4xl text-center">
//         Your Applied Jobs
//       </h1>

//       <form className="text-center mt-8" onSubmit={handleEmailSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter your email to view applications"
//           className="input input-bordered input-primary w-full max-w-xs"
//           required
//         />
//         <button className="btn btn-accent btn-outline ml-4" type="submit">
//           View Applications
//         </button>
//       </form>

//       <div className="mt-12">
//         {applications.length === 0 && email && (
//           <p className="text-center text-gray-500">No applications found for this email.</p>
//         )}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {applications.map((application) => (
//             <div key={application._id} className="card shadow-lg p-6">
//               <p className="text-xl font-bold">
//                 <strong>Job Title:</strong> {application.company_title}
//               </p>
//               <p className="text-gray-600 mt-4">
//                 <strong>Applicant Name:</strong> {application.fullname}
//               </p>
//               <p className="text-gray-600">
//                 <strong>Email:</strong> {application.email}
//               </p>
//               <p className="text-gray-600 mt-2">
//                 <strong>Resume:</strong>
//                 <button 
//                   onClick={() => handleResumeDownload(application.resumeFile)} 
//                   className="ml-2 text-blue-500 underline"
//                 >
//                   Download Resume
//                 </button>
//               </p>
//               <p className="mt-4 text-gray-600">
//                 <strong>Cover Letter:</strong> {application.coverLetter}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MyApplication;


import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyApplication() {
  const [applications, setApplications] = useState([]);
  const [email, setEmail] = useState(''); // Input for user email

  useEffect(() => {
    if (email) {
      axios.get(`http://localhost:5001/myapplications?email=${email}`)
        .then(response => {
          setApplications(response.data);
        })
        .catch(error => {
          console.error('Error fetching applications:', error);
        });
    }
  }, [email]);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setEmail(e.target.email.value);
  };

  return (
    <div className="max-w-screen-lg mx-auto mt-28">
      <h1 className="text-2xl font-semibold md:text-4xl text-center">
        Your Applied Jobs
      </h1>

      <form className="text-center mt-8" onSubmit={handleEmailSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email to view applications"
          className="input input-bordered input-primary w-full max-w-xs"
          required
        />
        <button className="btn btn-accent btn-outline ml-4" type="submit">
          View Applications
        </button>
      </form>

      <div className="mt-12">
        {applications.length === 0 && email && (
          <p className="text-center text-gray-500">No applications found for this email.</p>
        )}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {applications.map((application) => (
            <div key={application._id} className="card shadow-lg p-6">
              <p className="text-xl font-bold">
                <strong>Job Title:</strong> {application.company_title}
              </p>
              <p className="text-gray-600 mt-4">
                <strong>Applicant Name:</strong> {application.fullname}
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong> {application.email}
              </p>
              <p className="text-gray-600 mt-2">
                <strong>Resume Link:</strong> 
                <a 
                  href={`http://localhost:5001/user/resumes/${application.resumeFile}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-500"
                >
                  View Resume
                </a>
              </p>
              <p className="mt-4 text-gray-600">
                <strong>Cover Letter:</strong> {application.coverLetter}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MyApplication;
