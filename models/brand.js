var  mongoose=require('mongoose');//to declare that uyse of mongoose will take place

var brandSchema=mongoose.Schema({
name:{
    type:String,
    required:true
},
desc:{
    type:String,
    required:true
},
create_date:{
    type:Date,
    default:Date.now
}
})

var Brand=module.exports=mongoose.model('Brand',brandSchema);

module.exports.getBrands=function(callback){
    Brand.find(callback);
}
module.exports.getBrandById=function(id,callback){
    Brand.findById(id,callback);
}