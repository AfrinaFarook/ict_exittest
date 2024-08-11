//Write missing code here
const mongoose=require('mongoose')
const schema = mongoose.Schema({
  EmpName: String,
  designation: String,
  empId: String,
  img_url: String,
});
const Data=mongoose.model('employees',schema);
module.exports=Data
