import { ProductCard } from "../Product/ProductCard";

const Home = () => {
  const products = [
    {
      id: 1,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 149,
      image: "assets/1001.jfif",
    },
    { id: 2, name: "boAt Rockerz 450", price: 49, image: "assets/1002.jfif" },
    { id: 3, name: "JBL Tune 760NC", price: 179, image: "assets/1003.jfif" },
    {
      id: 4,
      name: "Logitech H111 Wired",
      price: 39,
      image: "assets/1004.jfif",
    },
    {
      id: 5,
      name: "APPLE Airpods Max Bluetooth Headset",
      price: 199,
      image: "assets/1005.jfif",
    },
    {
      id: 6,
      name: "ZEBRONICS Zeb-Thunder Wired",
      price: 29,
      image: "assets/1006.jfif",
    },
    {
      id: 7,
      name: "ZEBRONICS Zeb-Thunder Wired",
      price: 29,
      image: "assets/1007.jfif",
    },
  ];
  return (
    <div>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};

export default Home;
