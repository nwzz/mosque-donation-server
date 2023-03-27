import express from "express";
import {
  addPoster,
  deletePoster,
  editPoster,
  getPoster,
  getPosterById,
} from "../controllers/sliderPoster.js";
import { upload } from "../middleware/fileUpload.js";

const router = express.Router();

router.post("/poster/add", upload.single("image"), addPoster);
router.put("/poster/edit/:posterId", upload.single("image"), editPoster);
router.delete("/poster/delete/:posterId", deletePoster);
router.get("/posters/:posterName", getPoster);
router.get("/poster/get/:posterId", getPosterById);

export default router;
