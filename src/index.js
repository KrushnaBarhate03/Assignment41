import {createRoot} from "react-dom/client";

import { ProductCard } from "./Productcard";


const Container = {
  display: "flex",
  flexWrap:"wrap",
  justifyContent: "center",
}

const headStyle = {
  textAlign: "center",
}

const root = createRoot(document.getElementById("root"));
root.render(
  <>
 
  <div style={Container}>
  </div>

  <h1 style={headStyle}>Mobile Collection</h1>
  <div style={Container}>
  <ProductCard
    Image = "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/b/j/-original-imah3agqepywexex.jpeg?q=70"

    description = "Samsung Galaxy F15 5G"
    price = "16,999"
 
   
  />

  <ProductCard
    Image = "https://image-us.samsung.com/SamsungUS/home/mobile/phones/pf/galaxy-a/03032023/1.jpg?$product-details-jpg$" 
    description = "Galaxy S22 | Galaxy S22+ "
    price = "51,000"
   
  />
  </div>
  </>
);

