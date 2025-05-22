const appointmentSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  doctorName: String,
  date: String,
  time: String,
});
module.exports = mongoose.model("Appointment", appointmentSchema);