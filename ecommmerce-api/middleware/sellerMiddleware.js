function authorizeSeller(req, res, next) {
  if (req.user.role !== "seller") {
    return res.status(403).json({
      message: "Only sellers can create products",
    });
  }
  next();
}
module.exports = authorizeSeller;