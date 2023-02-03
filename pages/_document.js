import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="assets/images/favicon.png"
        />
        <link rel="stylesheet" href="assets/css/vendor/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/vendor/slick.css" />
        <link rel="stylesheet" href="assets/css/vendor/slick-theme.css" />
        <link rel="stylesheet" href="assets/css/plugins/sal.css" />
        <link rel="stylesheet" href="assets/css/plugins/feather.css" />
        <link rel="stylesheet" href="assets/css/plugins/fontawesome.min.css" />
        <link rel="stylesheet" href="assets/css/plugins/euclid-circulara.css" />
        <link rel="stylesheet" href="assets/css/plugins/swiper.css" />
        <link rel="stylesheet" href="assets/css/plugins/magnify.css" />
        <link rel="stylesheet" href="assets/css/plugins/odometer.css" />
        <link rel="stylesheet" href="assets/css/plugins/animation.css" />
        <link
          rel="stylesheet"
          href="assets/css/plugins/bootstrap-select.min.css"
        />
        <link rel="stylesheet" href="assets/css/plugins/jquery-ui.css" />
        <link
          rel="stylesheet"
          href="assets/css/plugins/magnigy-popup.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="assets/js/vendor/modernizr.min.js"></Script>
        <Script src="assets/js/vendor/jquery.js"></Script>
        <Script src="assets/js/vendor/bootstrap.min.js"></Script>
        <Script src="assets/js/vendor/sal.js"></Script>
        <Script src="assets/js/vendor/swiper.js"></Script>
        <Script src="assets/js/vendor/magnify.min.js"></Script>
        <Script src="assets/js/vendor/jquery-appear.js"></Script>
        <Script src="assets/js/vendor/odometer.js"></Script>
        {/*<Script src="assets/js/vendor/backtotop.js"></script>*/}
        <Script src="assets/js/vendor/isotop.js"></Script>
        <Script src="assets/js/vendor/imageloaded.js"></Script>

        <Script src="assets/js/vendor/wow.js"></Script>
        <Script src="assets/js/vendor/waypoint.min.js"></Script>
        <Script src="assets/js/vendor/easypie.js"></Script>
        <Script src="assets/js/vendor/text-type.js"></Script>
        <Script src="assets/js/vendor/jquery-one-page-nav.js"></Script>
        <Script src="assets/js/vendor/bootstrap-select.min.js"></Script>
        <Script src="assets/js/vendor/jquery-ui.js"></Script>
        <Script src="assets/js/vendor/magnify-popup.min.js"></Script>
        <Script src="assets/js/vendor/paralax-scroll.js"></Script>
        <Script src="assets/js/vendor/paralax.min.js"></Script>
        <Script src="assets/js/vendor/countdown.js"></Script>
        <Script src="assets/js/main.js"></Script>
      </body>
    </Html>
  );
}
