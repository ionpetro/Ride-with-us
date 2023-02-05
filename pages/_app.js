import "/styles/scss/style.scss";
import Navbar from "../components/UI/Navbar/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <Navbar>
      <Component {...pageProps} />
    </Navbar>
  );
}
