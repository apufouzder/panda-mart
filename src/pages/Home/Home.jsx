import CategorySection from "./CategorySection";
import HeroSection from "./HeroSection";
import PopularProduct from "./PopularProduct";

const Home = () => {
    return (
        <div className="container mx-auto ">
            <HeroSection />
            <CategorySection />
            <PopularProduct />
        </div>
    );
};

export default Home;