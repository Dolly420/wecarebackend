const Report = require("../models/Report");
exports.upload = async (req, res) => {
  const { name, url } = req.body; // assuming URL from Firebase/AWS
  const report = await Report.create({ name, url, userId: req.body.userId });
  res.json(report);
};
exports.getAll = async (req, res) => {
  const filter = req.user.role === "admin" ? {} : { userId: req.user.id };
  const reports = await Report.find(filter);
  res.json(reports);
};