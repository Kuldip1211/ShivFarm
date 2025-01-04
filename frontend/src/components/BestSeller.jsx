import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import TitleComp from "./TitleComp";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    console.log(products);
    const bestProduct = products.filter((item) => item.bestseller);
    setBestSeller(bestProduct.slice(0, 5));
    console.log(bestProduct)
  }, [products]);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <TitleComp text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Our best-selling products are a testament to customer satisfaction.
          Discover the items that have captured the hearts and homes of our
          shoppers. From timeless classics to cutting-edge innovations, our
          curated selection of top-rated products is sure to meet your needs and
          exceed your expectations.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
        {bestSeller.map((item, index) => (
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
export default BestSeller;
