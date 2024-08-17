import express from "express";
import { getCodsoft} from "../controller/codsoft.controller.js";

const router = express.Router();

router.get("/", getCodsoft);
export default router;