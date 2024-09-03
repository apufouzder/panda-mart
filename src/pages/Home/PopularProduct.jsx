import { BiCart, BiStar } from "react-icons/bi";
import { HiHeart } from "react-icons/hi";
import { TbCurrencyTaka } from "react-icons/tb";

const PopularProduct = () => {
    const products = [
        {
            id: 1,
            title: "5pcs Lady Necklace Creative Highlevel",
            price: 500,
            rating: 4,
            image: "https://res.cloudinary.com/dw3s67ztb/image/upload/v1724100819/obw59zxoxukai2s6tluo.png",
            rawPrice: 1200,
        },
        {
            id: 2,
            title: "5pcs Lady Necklace Creative Highlevel",
            price: 500,
            rating: 4,
            image: "https://res.cloudinary.com/dw3s67ztb/image/upload/v1724101282/up7sr5iq0if2pqqnkgqm.png",
            rawPrice: 1200,
        },
        {
            id: 3,
            title: "5pcs Lady Necklace Creative Highlevel",
            price: 500,
            rating: 4,
            image: "https://res.cloudinary.com/dw3s67ztb/image/upload/v1724100819/obw59zxoxukai2s6tluo.png",
            rawPrice: 1200,
        },
        {
            id: 4,
            title: "5pcs Lady Necklace Creative Highlevel",
            price: 500,
            rating: 4,
            image: "https://res.cloudinary.com/dw3s67ztb/image/upload/v1724104728/lhcpsb1cgyvyhhokz8uc.png",
            rawPrice: 1200,
        },
        {
            id: 5,
            title: "5pcs Lady Necklace Creative Highlevel",
            price: 500,
            rating: 4,
            image: "https://res.cloudinary.com/dw3s67ztb/image/upload/v1724100819/obw59zxoxukai2s6tluo.png",
            rawPrice: 1200,
        },
    ]
    return (
        <div className="pb-20">
            <div>
                <h1 className="text-4xl font-medium text-primary mb-6">Popular Products</h1>
            </div>
            <div className="grid grid-cols-5 gap-4">
                {products.map(item => (
                    <div key={item.id} className="hover:shadow-md border p-4 rounded group transition-all duration-300 ease-in-out relative">

                    <div className="hidden items-center justify-center gap-4 opacity- group-hover:flex transform group-hover:translate-y-0 transition-all duration-300 ease-in-out absolute top-6 z-50 w-full">
                        <span className="text-2xl bg-gray-200 p-2 rounded-md cursor-pointer"><BiCart /></span>
                        <span className="text-2xl bg-gray-200 p-2 rounded-md cursor-pointer"><HiHeart /></span>
                        </div>
                        
                    <img className="w-full rounded object-cover overflow-hidden transform transition-transform duration-300 ease-in-out group-hover:scale-110" src={item.image} alt="" />
                    <h2 className="text-xl font-semibold my-3">{item.title}</h2>
                    <p className="flex items-center text-xl font-bold text-primary">
                        <span className="text-2xl"><TbCurrencyTaka /></span>
                        <span>{item.price}</span>
                    </p>
                    <p className="flex items-center text-xl text-gray-400 font-semibold line-through">
                        <span className="text-xl"><TbCurrencyTaka /></span>
                        <span>{item.rawPrice}</span>
                    </p>
                    <div className="flex items-center gap-2 text-lg mb-3">
                        <span className="text-orange-500 text-xl"><BiStar /></span>
                        <span>{item.rating}</span>
                        <span>{`(0 reviews)`}</span>
                    </div>
                    <button className="bg-primary w-full py-2 px-4 rounded-full border-none text-white">Buy Now</button>
                </div>
                
                ))}
            </div>
        </div>
    );
};

export default PopularProduct;