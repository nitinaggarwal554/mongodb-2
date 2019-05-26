var express=require('express');
var mongoose=require('mongoose');
var bodyparser=require('body-parser');

var app=express();

var Brand=require('./models/brand');

app.use(bodyparser.json())

var options={
    user:'myTester',
    pass:'xyz123'
}
mongoose.connect('mongodb://localhost:27017/ecommercedb',options);
var db=mongoose.connection;

app.get('/',function(req,res){
res.send('welcome to admin portal');
});

app.get('/api/brands',function(req,res){
    Brand.getBrands(function(err,data){
        if(err){
            throw err;
        }
        else{
            res.json(data);
        }
    })
});

app.get('/api/brands/:id',function(req,res){
    Brand.getBrandById(req.param.id,function(err,data){
        if(err){
            throw err;
        }else{
            res.json(data);
        }
    })
});

app.get('/api/brands1/:id',function(req,res){
    Brand.findById(req.param.id,function(err,data){
        if(err){
            throw err;
        }else{
            res.json(data);
        }
    })
})

app.post('/api/brands',function(req,res){
    Brand.create(req.body,function(err,data){
        if(err){
            throw err;
        }else{
            console.log('document posted successfully.');
            res.json(data);
        }
    })
})

app.put('/api/brands/:id',function(req,res){
    Brand.findByIdAndUpdate(req.params.id,req.body,function(err,data){
        if(err){
            throw err;
        }else{
           
            res.json(data);
        }
    })
})

app.delete('/api/brands/:id',function(req,res){
    var query={
        _id:req.params.id
    }
    Brand.remove(query,function(err,data){
        if(err){
            throw err;
        }else{
           console.log('document has been deleted.');
            res.json(data);
        }
    })
})
app.listen(3000,function(){
    console.log('this server is running at port 3000!!');
})