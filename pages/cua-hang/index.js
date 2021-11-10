import Head from "next/head";
import { useState } from "react";

// Component Created
import ProductCard from "@/src/components/productCard";
import PanelFilter from "@/src/components/panelFilter";
import LPEDrawer from "src/components/drawer";
import FilterSide from "@/src/components/filterSide";

const productList = [
  {
    id: 1,
    name: "Nike Air Force 1 NDESTRUKT",
    imgSrc: "https://minimals.cc/static/mock-images/products/product_1.jpg",
    price: 500000,
  },
  {
    id: 2,
    name: "Jordan Delta",
    imgSrc: "https://minimals.cc/static/mock-images/products/product_8.jpg",
    price: 900000,
  },
  {
    id: 3,
    name: "Nike Waffle Racer Crater",
    imgSrc: "https://minimals.cc/static/mock-images/products/product_10.jpg",
    price: 900000,
  },
  {
    id: 4,
    name: "Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear",
    imgSrc: "https://minimals.cc/static/mock-images/products/product_3.jpg",
    price: 1900000,
  },

  {
    id: 5,
    name: "Nike Air Zoom BB NXT",
    imgSrc: "https://minimals.cc/static/mock-images/products/product_12.jpg",
    price: 1400000,
  },
];

function StorePage() {
  const [state, setState] = useState({
    right: false,
  });
  const [isFiltered, setIsFiltered] = useState(false);
  const [filterSystem, setFilterSystem] = useState({});

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Head>
        <title>
          Cửa hàng - Công ty TNHH Giáo Dục Leading Performance Education
        </title>
        <link rel="icon" href="/images/lpe-nlp-logo.png" />
      </Head>

      <main>
        <div className="container-fluid py-5">
          <></>

          <div className="text-right">
            <PanelFilter onToggleDrawer={toggleDrawer} />
          </div>

          <div className="row mt-5">
            {productList.map((prod, index) => {
              return (
                <div
                  className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-5"
                  key={index}
                >
                  <ProductCard
                    price={prod.price}
                    imgSrc={prod.imgSrc}
                    name={prod.name}
                    id={prod.id}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <LPEDrawer
        anchor="right"
        isOpen={state["right"]}
        onToggle={toggleDrawer}
        disableScrollLock
      >
        <FilterSide onToggleDrawer={toggleDrawer} />
      </LPEDrawer>
    </>
  );
}

export default StorePage;
