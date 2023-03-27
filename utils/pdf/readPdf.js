import fs from "fs";
import { ObjectId } from "mongodb";

const readPdfFiles = async (fileName) => {
  try {
    const pdfFiles = await fs.promises.readdir("./others/pdf");
    const files = pdfFiles.map((file) => file.toString().split(".")[0]);
    return files.some(
      (file) => ObjectId(file).toString() === ObjectId(fileName).toString()
    );
  } catch (err) {
    return err;
  }
};
export default readPdfFiles;
