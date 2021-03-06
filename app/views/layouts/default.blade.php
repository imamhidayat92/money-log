<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Money Log</title>

		<!-- Bootstrap -->
		<link href="components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">

		<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
		<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
		<!--[if lt IE 9]>
		  <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
		  <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
		<![endif]-->
	</head>
	<body>

		@yield('content')

		<script src="components/jquery/dist/jquery.min.js"></script>
		<script src="components/bootstrap/dist/js/bootstrap.min.js"></script>
		<script src="components/handlebars/handlebars.min.js"></script>
		<script src="components/ember/ember.min.js"></script>
		
		<script src="static/js/app.js"></script>
		<script src="static/js/routes.js"></script>

		<script src="static/js/controllers/transaction.js"></script>
	</body>
</html>
