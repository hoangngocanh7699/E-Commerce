import Hero from "../component/hero/hero";
import NewCollections from "../component/newCollections/newCollections";
import NewsLetter from "../component/newsLetter/newsLetter";
import Offers from "../component/offers/offers";
import Popular from "../component/popular/popular";

const Shop = () => {
  return (
    <>
      <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        <NewsLetter />
      </div>
    </>
  );
};

export default Shop;
