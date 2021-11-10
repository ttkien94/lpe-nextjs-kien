import PropTypes from "prop-types";
import Head from "next/head";

function ShoppingCart(props) {
  return (
    <>
      <Head>
        <title>Giỏ hàng</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <h1>Giỏ hàng</h1>
      </main>
    </>
  );
}

ShoppingCart.propTypes = {};

export default ShoppingCart;
