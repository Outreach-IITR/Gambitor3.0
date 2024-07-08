import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader === null || authHeader === undefined) {
    return res.status(401).json({ status: 401, message: "UnAuthorized access 1" });
  }

  //removing the Bearer string
  const token = authHeader.split(" ")[1];
  console.log("The token is", token);

  //   * Verify the JWT token
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.status(401).json({ status: 401, message: "UnAuthorized access 2" });
    req.user = user;
    next();
  });
};

export default authMiddleware;
