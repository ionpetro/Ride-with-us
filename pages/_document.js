import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/assets/images/favicon.png"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alumni+Sans:wght@800&family=Kodchasan:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/vendor/slick.css" />
        <link rel="stylesheet" href="/assets/css/vendor/slick-theme.css" />
        <link rel="stylesheet" href="/assets/css/plugins/sal.css" />
        <link rel="stylesheet" href="/assets/css/plugins/feather.css" />
        <link rel="stylesheet" href="/assets/css/plugins/fontawesome.min.css" />
        <link
          rel="stylesheet"
          href="/assets/css/plugins/euclid-circulara.css"
        />
        <link rel="stylesheet" href="/assets/css/plugins/swiper.css" />
        <link rel="stylesheet" href="/assets/css/plugins/magnify.css" />
        <link rel="stylesheet" href="/assets/css/plugins/odometer.css" />
        <link rel="stylesheet" href="/assets/css/plugins/animation.css" />
        <link rel="stylesheet" href="/assets/css/plugins/jquery-ui.css" />
        <link
          rel="stylesheet"
          href="/assets/css/plugins/magnigy-popup.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="/assets/js/vendor/modernizr.min.js"></script>
        <script src="/assets/js/vendor/jquery.js"></script>
        <script src="/assets/js/vendor/bootstrap.min.js"></script>
        <script src="/assets/js/vendor/sal.js"></script>
        <script src="/assets/js/vendor/swiper.js"></script>
        <script src="/assets/js/vendor/magnify.min.js"></script>
        <script src="/assets/js/vendor/jquery-appear.js"></script>
        <script src="/assets/js/vendor/odometer.js"></script>
        <script src="/assets/js/vendor/isotop.js"></script>
        <script src="/assets/js/vendor/imageloaded.js"></script>
        <script src="/assets/js/vendor/wow.js"></script>
        <script src="/assets/js/vendor/waypoint.min.js"></script>
        <script src="/assets/js/vendor/easypie.js"></script>
        <script src="/assets/js/vendor/text-type.js"></script>
        <script src="/assets/js/vendor/jquery-one-page-nav.js"></script>
        <script src="/assets/js/vendor/jquery-ui.js"></script>
        <script src="/assets/js/vendor/magnify-popup.min.js"></script>
        <script src="/assets/js/vendor/paralax-scroll.js"></script>
        <script src="/assets/js/vendor/paralax.min.js"></script>
        <script src="/assets/js/vendor/countdown.js"></script>
        <script src="/assets/js/main.js"></script>
      </body>
    </Html>
  );
}
