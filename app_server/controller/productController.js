var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Product = mongoose.model('Product');

//gets products to show on product page
module.exports.getProducts = function(req,res){
var products;
  if(err){
    console.log("oops something went wrong");
    sendJSONresponse(res,404,err); //not sure
    return;
  }else{
    products = buildProductList(req,res,results);
    sendJSONresponse(res, 200, products);
  }

};
var buildProductList(req,res,results){
  var products = [];
  results.forEach(function(doc)){
    products.push({
      name: doc.obj.name,
      price: doc.obj.price,
      details: doc.obj.details,
      _id: doc.obj._id
    });
  });
  return products;
};

//adds product to cart
module.exports.addProduct = fuction(req,res){
  var product ; // dont know where to get it from
  if(!req.payload._id){
    res.status(401).json({
      "message": "Please login first"
    });
  }else{
    User.findById(req.payload._id, function(err,user){
      if(err) throw err;
      user.user_basket.push({
        name: product.name,
        price:product.price,
        details: product.details,
        _id: product.id
      });
      user.save(function(err){
        if(err) throw err;
        console.log("Added to cart");
        res.status(200).json(updatedUser);
      });
    });
  }
};

module.exports.removeFromCart = function(req, res){
  var product;
  if(!req.payload._id){
    res.status(401).json({
      "message": "oops something went wrong"
    });
  }else {
      User.findById(req.payload._id, function(err,user){
        if(err) throw err;
          user.user_basket.splice(user.user_basket.indexOf(product));
        });
    }
    user.save(function(err){
      if(err) throw err;
      console.log("Removed from cart");
      res.status(200).json(updatedUser);
});
};
//veiw cart to to remove or checkout
module.exports.viewCart = function(req,res){
  getCartDetails(req,res,responseData){
    renderCartPage(req,res,responseData);
  });
};

var getCartDetails =function (req,res,callback){
  var requestOptions;
  var total = 0;
  var products =[];
  requestOptions = {
    url : "../cart",
    method : "GET",
  };
  request(
    requestOptions,
    function(err, response, body) {
      var data = body;
        if (response.statusCode === 200) {
  User.findById(req.payload._id, function(err,user){
    if(err) throw err;
    for (var i=0; i<cartData.length;i++){
      ttotal+=user.user_basket[i].price;
    }
    pproducts=user.user_basket;
  });
  data.info= {
    total : ttotal,
    products : pproducts
    };
    callback(req,res,data);
  }else{
    showError(req, res, response.statusCode);
  }
  );
});
};


var renderCartPage = function(req,res,cartData){
  // res.render('cart',{
  //
  // })
};

//remove an item from the cart

