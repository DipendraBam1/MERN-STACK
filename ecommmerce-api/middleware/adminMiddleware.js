function authorizeAdmin(req, res, next) {
  if (req.user.role !== "admin") {
    return res.status(403).json({
      message: "Only Admin can create category",
    });
  }
  next();
}
module.exports = authorizeAdmin;
