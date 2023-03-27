import asyncHandler from "express-async-handler";
import { singleImageUpload } from "../middleware/fileUpload.js";
import SliderPoster from "../models/sliderPoster.js";

const addPoster = asyncHandler(async (req, res) => {
  try {
    const { name, time } = req.body;
    const image = await singleImageUpload(req.file);
    const createObj = { name, time: time * 1000, image };
    await SliderPoster.create(createObj);

    res.status(201).send({
      message: "Poster successfully created",
    });
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

const editPoster = asyncHandler(async (req, res) => {
  try {
    const poster = await SliderPoster.findById(req.params.posterId);
    if (!poster) {
      res.status(404).send({
        message: "Poster not found",
      });
    } else {
      const image = req.file ? await singleImageUpload(req.file) : poster.image;
      poster.image = image;
      poster.time = req.body.time * 1000 || poster.time;
      poster.save();
      res.status(202).send({
        message: "Poster successfully updated",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

const deletePoster = asyncHandler(async (req, res) => {
  try {
    const poster = await SliderPoster.findById(req.params.posterId);
    if (!poster) {
      res.status(404).send({
        message: "Poster not found",
      });
    } else {
      poster.remove();
      res.status(204).send({
        message: "Poster successfully deleted",
      });
    }
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

const getPoster = asyncHandler(async (req, res) => {
  try {
    const posters = await SliderPoster.find({
      name: req.params.posterName,
    }).select({ __v: 0, createdAt: 0, updatedAt: 0 });
    res.status(200).send(posters);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

const getPosterById = asyncHandler(async (req, res) => {
  try {
    const poster = await SliderPoster.findById(req.params.posterId).select({
      __v: 0,
      createdAt: 0,
      updatedAt: 0,
    });
    res.status(200).send(poster);
  } catch (error) {
    res.status(500).send({
      message: error.message,
    });
  }
});

export { addPoster, editPoster, deletePoster, getPoster, getPosterById };
