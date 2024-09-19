var express = require('express')
var router  = express.Router()

router.get('/', function(req,res){
    res.send('<h1>product Routers</h1>')
});

//localhost:3000/product/create
//yeu cau gui (send) text la creat product
router.get('/create', function(req,res){
    res.send('<h1>product create</h1>')
});
//
router.get('/ID/:id',function(req,res){
    res.send('<h1>product create</h1>')
})


module.exports = router;
