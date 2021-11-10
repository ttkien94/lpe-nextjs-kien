import { wrapper } from "../src/redux/store/configStore";
// nextJS Component
import Head from "next/head";
import { ToastContainer } from "react-toastify";
// component
import Layout from "../src/layout";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "react-modal-video/scss/modal-video.scss";
import "react-toastify/dist/ReactToastify.css";
import "../styles/global/globals.scss";
import "react-image-lightbox/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Bootstrap only using grid and spacing class  */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.1/css/all.min.css"
          rel="stylesheet"
        ></link>

        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,800;1,700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&family=Raleway:ital,wght@0,300;0,400;0,500;0,600;0,800;1,700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </>
  );
}

export default wrapper.withRedux(MyApp);
