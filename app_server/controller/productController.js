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
var buildProductList=function(req,res,results){
  var products = [];
  results.forEach(function(doc){
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
module.exports.addProduct = function(req,res){
  var product ; 
  if(!req.payload._id){
    res.status(401).json({
      "message": "Please login first"
    });
  }else{
    Plan.findById(req.params.product_id, function(err,pproduct){
      product = pproduct;
    });
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
    Plan.findById(req.params.product_id, function(err,pproduct){
      product = pproduct;
    });
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
  User.findById(req.payload._id,function(err,user){
    if(err){
      console.log('Cant Access')
    }else{
      var cart=[];
      cart=user.user_basket;
      //res.render('Cart',{cart:cart});
    }

  });
};

module.exports.checkout =  function (req,res){
// sprint 2 be3oon ellah
}

module.exports.getCartDetails =function (req,res){
  if(!req.payload._id){
    console.log('Cant Access');
  }else{
    User.findById(req.payload._id,function(err,user){
      if(err){
        throw err;
      }else{
        var total=0;
        var productNames=[String];
        for(var i=0;i<user.user_basket[i].length;i++){
        total=total+user.user_basket[i].price;
        productNames.push(user.user_basket[i].name);
        //res.render('CheckoutList',{pNames:productNames,ptotal:total});
        

      };
      }
    })
  }

  
};


var renderCartPage = function(req,res,cartData){
  // res.render('cart',{
  //
  // })
};

//remove an item from the cart
