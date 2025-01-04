import { assets } from "../assets/assets"

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Section 1 */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-2/3 text-gray-600">
            Discover the latest trends and timeless classics in our curated
            collection of clothing. Experience the perfect blend of style and
            comfort. Shop now and elevate your wardrobe.
          </p>
        </div>

        {/* Section 2 */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+91-81409-23198</li>
            <li>contact@forever.com</li>
          </ul>
        </div>
      </div>

      {/* copyright section */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ forever.com - All Right Reserved.</p>
      </div>
    </div>
  );
}
export default Footer