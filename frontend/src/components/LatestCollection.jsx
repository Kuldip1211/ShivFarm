import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import TitleComp from "./TitleComp";
import ProductItem from "./ProductItem";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);

  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center py-8 text-3xl">
        <TitleComp text1={"LATEST"} text2={"COLLECTIONS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Explore our fresh selection of high-quality items, handpicked for
          their unique appeal and top-tier performance. From chic fashion pieces
          that make a statement to smart gadgets that simplify your life, our
          collection is crafted to cater to your modern lifestyle needs.
        </p>
      </div>

      {/* Rendering Products from ProductItem Component */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {latestProducts.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
};
export default LatestCollection;
