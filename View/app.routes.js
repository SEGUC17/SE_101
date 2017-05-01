<html ng-app="fitnessApp" ng-controller="mainController as main" >

<head>
  <title>Fitness Platform</title>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<script src="bower_components/angular/angular.js"></script>
  <script src="bower_components/angular-ui-router/release/angular-ui-router.js"></script>
	<!--<script src="bower_components/angular-animate/"></script>-->
  <script src="bower_components/angular-route/angular-route.js"></script>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800" rel="stylesheet">
  <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

  <script src="/controllers/mainCtrl.js"></script>
  <script src="/controllers/productsctrl.js"></script>
  <script src="/controllers/adminCtrl.js"></script>
  <!--<script src="/controllers/checkout.js"></script>-->
  <!--<script src="/controllers/adminPagectrl.js"></script>
  <script src="/controllers/productsctrl.js"></script>
  <script src="/controllers/editProductctrl.js"></script>
  <script src="/controllers/adsctrl.js"></script>
  <script src="/controllers/editSponserAdsctrl.js"></script>
  <script src="/controllers/editClientsctrl.js"></script>  -->



  <script src="/services/authService.js"></script>
  <!--<script src="/services/adminPagesrv.js"></script>
  <script src="/services/productssrv.js"></script>
  <script src="/services/editProductsrv.js"></script>
  <script src="/services/editSponserAdssrv.js"></script>
  <script src="/services/editClientssrv.js"></script>-->
  <script src="app.routes.js"></script>
  <script src='app.js'></script>


  <style>
.jumbotron{
    background-color:#2E2D88;
    color:white;
}
/* Adds borders for tabs */
.tab-content {
    border-left: 1px solid #ddd;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    padding: 10px;
}
.nav-tabs {
    margin-bottom: 0;
}
  </style>

  <div class="container">
    <nav class="navbar navbar-default">
    <div class="container-fluid">

      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">

        <!-- Button that toggles the navbar on and off on small screens -->
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">

        <!-- Hides information from screen readers -->
          <span class="sr-only"></span>

          <!-- Draws 3 bars in navbar button when in small mode -->
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>


      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li class="active"><a href="/">Home <span class="sr-only">(current)</span></a></li>
          <li><a href="/login" >Login</a></li>
          <li><a href="/register">Register</a></li>
          <li><a href="/plans">Plans</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="about">About</a></li>
          </li>
        </ul>

        <form class="navbar-form navbar-right" role="search">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Search">
          </div>
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div>
    </div>
  </nav>
  </div>

</head>

<body >

  <div class="app-wrapper">
    <chat ng-show="!admin"></chat>
    <adminchat ng-show="admin"></adminchat>
  </div>


  <div ng-view></div>
</body>

</html>
