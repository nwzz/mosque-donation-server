import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/user.js";
import Supplier from "../models/supplier.js";
import Guest from "../models/guest.js";

const loggedMiddleware = asyncHandler(async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user =
        (await User.findById(decoded.id)) ||
        (await Supplier.findById(decoded.id)) ||
        (await Guest.findById(decoded.id));
      const userInfo = { _id: user._id, role: user.role };
      req.user = userInfo;
      next();
    } catch (error) {
      res
        .status(403)
        .send({ statusCode: 403, message: "Not authorized, token failed." });
    }
  } else {
    res
      .status(401)
      .send({ statusCode: 401, message: "You are not authenticated." });
  }
});

const userMiddleware = asyncHandler(async (req, res, next) => {
  const role =
    req.user.role === process.env.SUPPLIER_ROLE ||
    req.user.role === process.env.ADMIN_ROLE;
  if (!role) {
    next();
  } else {
    res.status(403).send({ statusCode: 403, message: "Access denied." });
  }
});

const supplierMiddleware = asyncHandler(async (req, res, next) => {
  const role = req.user.role === process.env.SUPPLIER_ROLE;
  if (role) {
    next();
  } else {
    res.status(403).send({ statusCode: 403, message: "Access denied." });
  }
});

const adminMiddleware = asyncHandler(async (req, res, next) => {
  const role = req.user.role === process.env.ADMIN_ROLE;
  if (role) {
    next();
  } else {
    res.status(403).send({ statusCode: 403, message: "Access denied." });
  }
});

export {
  loggedMiddleware,
  userMiddleware,
  supplierMiddleware,
  adminMiddleware,
};
