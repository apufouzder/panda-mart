import { FaBagShopping } from "react-icons/fa6";

const CategorySection = () => {
    const categories = [
        { name: "Bathroom Accessories", pic: <FaBagShopping /> },
        { name: "Bag Item", pic: <FaBagShopping /> },
        { name: "Cosmetic & Organiser", pic: <FaBagShopping /> },
        { name: "Electronics Items", pic: <FaBagShopping /> },
        { name: "Kitchen & Cooking", pic: <FaBagShopping /> },
        { name: "Baby and Kids", pic: <FaBagShopping /> },
    ]
    return (
        <div className="py-20">
            <div>
                <h1 className="text-4xl font-medium text-primary mb-6">Popular Categories</h1>
            </div>
            <div className="grid grid-cols-5 gap-6">
                {categories.map(item => (
                    <div key={item.name} className="bg-lightBlack flex flex-col items-center px-4 py-8 shadow-md border border-primary rounded-md hover:bg-primary hover:text-white transition-all cursor-pointer duration-300 ease-in-out group">
                        <span className="text-6xl mb-2 text-primary transition-all duration-300 ease-in-out group-hover:text-white">{item.pic}</span>
                        <span className="text-gray-600 font-medium transition-all duration-500 ease-in-out group-hover:text-white text-base">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategorySection;