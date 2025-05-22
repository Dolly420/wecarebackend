const reportSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  name: String,
  url: String,
});
module.exports = mongoose.model("Report", reportSchema);