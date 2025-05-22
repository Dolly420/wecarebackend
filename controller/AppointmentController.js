const Appointment = require("../models/Appointment");
exports.create = async (req, res) => {
  const appointment = await Appointment.create({ ...req.body, userId: req.user.id });
  res.json(appointment);
};
exports.getAll = async (req, res) => {
  const filter = req.user.role === "admin" ? {} : { userId: req.user.id };
  const appointments = await Appointment.find(filter);
  res.json(appointments);
};