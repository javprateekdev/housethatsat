import React from "react";
import ShopDetails from "./shop-details";
import Navbar from "../components/global-components/navbar-v4";
import CallToActionV1 from "../components/section-components/call-to-action-v1";
import Footer from "../components/global-components/footer";
import Gallery from "../components/section-components/gallery-v1";
import PageHeader from "../components/global-components/page-header";
import ProductSlider from "../components/shop-components/product-slider-v1";
const Pageview = () => {
  return (
    <div>
      <Navbar />
      <ProductSlider />
      <ShopDetails />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Pageview;
