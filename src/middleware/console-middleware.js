const mid = function(req, res, next){
    console.log('lul')
    console.log(req.body);
    next();
}//connect type middleware
module.exports = mid;