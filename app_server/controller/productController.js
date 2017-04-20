var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Product = mongoose.model('Product');

//gets products to show on product page
/*module.exports.getProducts = function(req,res){
var products;
  if(err){
    console.log("oops something went wrong");
     res.status(500).jsonp({ error: 'oops something went wrong' })
    //sendJSONresponse(res,404,err); //not sure
    return;
  }else{
    products = buildProductList(req,res,results);
      res.status(200).json(products);
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
};*/

//adds product to cart

module.exports.addProduct = function(req,res){
  
  if(!req.user._id){
    res.status(401).json({
      "message": "Please login first"
    });
  }else{
    Product.findById(req.body.product_id, function(err,product){
      User.findById(req.user._id, function(err,user){
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
        res.json({message: "Added to Cart"});
      });
    });
    });
    
  }
};

module.exports.removeFromCart = function(req, res){
  var product;
  if(!req.user._id){
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
      res.status(200);
});
};
//veiw cart to to remove or checkout
module.exports.viewCart = function(req,res){
   var cart=[];
   var total=0
  User.findById(req.user._id,function(err,user){
    if(err){
      console.log('Cant Access')
    }else{
      Product.find(function(err,products){
        if(err){
          throw err;
        }{
          for(var i=0;i<user.user_basket.length;i++){
            for(var j=0;j<products.length;j++){
              
              if(products[j]._id==user.user_basket[i].toString()){
                cart.push(products[j]);
                total=total+products[j].price;
                
                
              }
              
            }
          }
          console.log(cart);
          res.json({cart,total});
        }
      });

    }

  });
};

//s Function where a stripe token generated from data provided by the checkout partial 
// Success:message show "Payment is Successful"
//Error: message show "Something Wrong with your card"
module.exports.charge=function(req,res){
  if(!req.user._id){
    console.log("CAnnot Access")
  }else{
    var token=req.body.stripeToken;
    var charge=req.body.charge;
    var checkout=stripe.charges.create({
      amount:charge,
      currency:"usd",
      source:token
    },function(err,c){
      if(err & err.type==="StripeCardError"){
        res.json({message:"Something Wrong with your card"});
      }else{
        User.findById(req.user_id,function(err,user){
          user.user_basket=[];
        });
        res.json({message:"Payment is Successful"});
      }

    });
    
  }
};
module.exports.getCartDetails =function (req,res){
  if(!req.user._id){
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
        res.format({
        'text/plain': function(){
      res.send(productNames);
   },
          'text/plain': function(){
      res.send(total.toString());
   }
        });
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
