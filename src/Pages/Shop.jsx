import Collection from "../Components/Collection/Collection";
import Hero from "../Components/Hero/Hero";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";
import NewsLetter from "../Components/NewsLetter/NewsLetter"


const Shop = () => {
return(
    <div>
    <Hero />
    <Popular/>
    <Offers/>
    <Collection />
    <NewsLetter />
    </div>
)
}

export default Shop;