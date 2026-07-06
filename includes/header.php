<!-- header start -->
<header>

  <!-- nav top -->
  <nav class="nav-top navbar py-2" aria-label="روابط التواصل الاجتماعي">
    <div class="container-fluid custom-container d-flex align-items-center justify-content-between">

      <!-- Logo Desktop -->
      <a class="navbar-brand d-none d-lg-flex" href="index.php">
        <img id="site-logo" src="assets/img/logo.png" alt="BCS Logo" width="178" height="72" loading="lazy">
      </a>

      <div class="flex-grow-1 d-none d-lg-flex more"></div>

      <!-- Social Icons -->
      <div class="social-icons d-none d-lg-flex gap-3">
        <a href="https://www.facebook.com/BeethovenCityService" target="_blank">
          <img src="assets/img/socialicons/Facebook.png" alt="">
        </a>
        <a href="https://www.instagram.com/beethoven_city_service" target="_blank">
          <img src="assets/img/socialicons/Instagram.png" alt="">
        </a>
        <a href="https://wa.me/4917671230666" target="_blank">
          <img src="assets/img/socialicons/whatsapp.png" alt="">
        </a>
        <a href="#">
          <img src="assets/img/socialicons/Twitter.png" alt="">
        </a>
        <a href="https://youtube.com/@learning_german_language?si=Ulc8NPGJgLdMDyvY" target="_blank">
          <img src="assets/img/socialicons/youtube.png" alt="">
        </a>
      </div>

    </div>
  </nav>

  <!-- main nav -->
  <nav id="main-header" class="navbar navbar-expand-lg py-3" aria-label="القائمة الرئيسية">

    <div class="container-fluid custom-container d-flex align-items-center justify-content-between">

      <!-- Logo Mobile -->
      <a class="navbar-brand d-lg-none" href="index.php">
        <img id="site-logo-mobile" src="assets/img/logo.png" alt="BCS Logo">
      </a>

      <!-- Desktop Menu (Dynamic) -->
      <div class="collapse navbar-collapse d-none d-lg-flex">
        <ul class="navbar-nav gap-3" id="main-menu-desktop"></ul>
      </div>

      <!-- Controls -->
      <div class="d-flex align-items-center gap-3">

        <!-- Mobile Button -->
        <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Language Switcher -->
        <div class="dropdown">
          <button class="btn lang-switch d-flex align-items-center" type="button" data-bs-toggle="dropdown">
            <img src="assets/img/home/global.svg" alt="">
            <span>العربية</span>
          </button>

          <ul class="dropdown-menu dropdown-menu-end">
            <li><a class="dropdown-item" href="index.php">العربية</a></li>
            <li><a class="dropdown-item" href="index-en.php">English</a></li>
          </ul>
        </div>

      </div>
    </div>
  </nav>

  <!-- offcanvas mobile menu -->
  <div class="offcanvas offcanvas-end" id="offcanvasNavbar">

    <div class="offcanvas-header">

      <!-- Logo -->
      <img id="site-logo-mobile-offcanvas" src="assets/img/logo.png" height="50">

      <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>

    <div class="offcanvas-body">

      <!-- Mobile Menu (Dynamic) -->
      <ul class="navbar-nav" id="main-menu-mobile"></ul>

    </div>
  </div>

</header>
<!-- header end -->