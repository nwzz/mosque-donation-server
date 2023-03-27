import multer from "multer";
import path from "path";
import imgbbUploader from "imgbb-uploader";

const imgBBKey = process.env.IMG_BB_KEY;

const __dirname = path.resolve();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "./others/uploads"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.mimetype === "application/pdf"
    ) {
      cb(null, true);
    } else {
      cb(new Error("Only png, jpg, jpeg and pdf files are supported."), false);
    }
  },
});

const singleImageUpload = async (file) => {
  try {
    const options = {
      apiKey: imgBBKey,
      imagePath: file.path,
      name: file.originalname,
    };
    const result = await imgbbUploader(options);
    return result.url;
  } catch (error) {
    return error?.message;
  }
};

const multipleImageUpload = async (files) => {
  const resPromises = files.map((file) => {
    const options = {
      apiKey: imgBBKey,
      imagePath: file.path,
      name: file.originalname,
    };
    return new Promise((resolve, reject) => {
      imgbbUploader(options)
        .then((response) => resolve(response.url))
        .catch((error) => reject(error?.message));
    });
  });
  return Promise.all(resPromises);
};

export { upload, singleImageUpload, multipleImageUpload };
