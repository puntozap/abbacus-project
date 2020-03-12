<!DOCTYPE html>
<html lang="en">
  <head>
    <title>🎓AppBacus</title>
    <meta charset="utf-8">
    <meta name="description" content="Appbacus: el abaco de notas automatizado que calcula sabiendo tu nota previa y la nota del examen final">
    <meta name="keywords" content="Appbacus: el abaco de notas automatizado que calcula sabiendo tu nota previa y la nota del examen final">
    <meta name="author" content="App">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- favicon-->
    <link rel="shortcut icon" href="{{asset('assets/images/favicon.png')}}">
    <!-- Font Family-->
    <link href="https://fonts.googleapis.com/css?family=Lato:300,400,700,900" rel="stylesheet">
    <!-- Bootstrap CSS-->
    <link rel="stylesheet" href="{{asset('assets/css/bootstrap.min.css')}}">
    <!-- Animation CSS-->
    <link rel="stylesheet" href="{{asset('assets/css/animate.min.css')}}">
    <!-- Owl carousel .css-->
    <link rel="stylesheet" href="{{asset('assets/css/owl.carousel.min.css')}}">
    <link rel="stylesheet" href="{{asset('assets/css/owl.theme.default.min.css')}}">
    <!-- font-awesome css-->
    <link rel="stylesheet" href="{{asset('assets/css/font-awesome.min.css')}}">
    <!-- swiper slider-->
    <link rel="stylesheet" href="{{asset('assets/css/swiper.min.css')}}">
    <!-- Style .css-->
    <link id="color" rel="stylesheet" href="{{asset('assets/css/color4.css')}}" media="screen">
  </head>
  <body>
    <!-- loader-->
    @include("template-countdown.loader")
    <!-- loader end-->
    <!-- Page start-->
    @include("template-countdown.cooming-soon")
    <!-- Page Ends-->
    <!-- subscribe section-->
    @include("template-countdown.newsletter")
    <!-- end subscribe section-->
    <!-- copy-right-section-->
    @include("template-countdown.footer")
    <!-- end copy right section-->
    <!-- Tap to top-->
    <div class="tap-top">
      <div><i class="fa fa-angle-up" aria-hidden="true"></i></div>
    </div>
    <!-- Tap to top end-->
    <!-- facebook chat section start-->
    <div id="fb-root"></div>
    <!-- <script>
      (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1';
      fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    </script> -->
    <!-- Your customer chat code-->
    <div class="fb-customerchat" attribution="setup_tool" page_id="2123438804574660" theme_color="#5f57ea" logged_in_greeting="Hi! Welcome to PixelStrap Themes  How can we help you?" logged_out_greeting="Hi! Welcome to PixelStrap Themes  How can we help you?"></div>

    <!-- js file-->
    <script src="{{asset('assets/js/jquery-3.3.1.min.js')}}"></script>
    <!-- bootstrap js file-->
    <script src="{{asset('assets/js/bootstrap.min.js')}}"></script>
    <!-- popper js file-->
    <script src="{{asset('assets/js/popper.min.js')}}"></script>
    <!-- Owl carousel js file-->
    <script src="{{asset('assets/js/owl.carousel.min.js')}}"></script>
    <!-- tilt js file-->
    <script src="{{asset('assets/js/tilt.jquery.js')}}"></script>
    <!-- script js file-->
    <script src="{{asset('assets/js/script.js')}}"></script>
    <!-- timer file-->
    <!-- <script src="{{asset('assets/js/timer.js')}}"></script> -->
    @yield('scritps')
  </body>
</html>