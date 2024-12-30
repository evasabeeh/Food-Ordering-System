import express from "express";
import { addFood, listFood, removeFood } from "../controllers/foodController.js";
import multer from "multer"; 

const foodRouter = express.Router();

const storage = multer.diskStorage({                            //Image upload
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`)     // rename the file so that it is unique
    }
})

const upload = multer({storage: storage})

foodRouter.post("/add", upload.single("image"), addFood)         // add data to server
foodRouter.get("/list", listFood)
foodRouter.post("/remove", removeFood)

export default foodRouter;