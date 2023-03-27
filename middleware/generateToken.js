import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

const generateActiveToken = (payload) => {
  return jwt.sign(
    {
      payload,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};

export { generateToken, generateActiveToken };
