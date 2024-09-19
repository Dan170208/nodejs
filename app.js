var express = require("express")

var app = express()

// url: localhost 3000
app.get('/', function(req,res){
    res.send('<h1>Trang chu</h1>')
})

// url: localhost 3000/user
app.get('/nguoidung', function(req,res){
    res.send('<h1>user</h1>')
})
// khai bao su dung userROuters.js 
var userROuters=require('./routers/userRouters')
var productRouters=require('./routers/productRouters')
var category=require('./routers/category')
var oderheaderrouters=require('./routers/oder-headerRouters')
var deveksRoutes=require('./routers/devkesrouters')
app.use('/user',userROuters)
app.use('/product',productRouters)
app.use('/category',category)
app.use('/oder',oderheaderrouters)
app.use('/dev',deveksRoutes)

app.listen(3000)
