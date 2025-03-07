import Img1 from '../assets/Imagesrecently1.png';
import Img2 from '../assets/Imagesrecently2.png';
import Img3 from '../assets/Imagesrecently3.png';
import Img4 from '../assets/Imagesrecently4.png';
import Img5 from '../assets/Imagesrecently5.png';
import Img6 from '../assets/Imagesrecently6.png';
const products = [
    {
        name: "Women's Fashion", items: [
            { id: 1, name: "Casual Shirt", brand: "Brand A", price: 10.50, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "L", categori: "t-shirt", image: Img1 },
            { id: 2, name: "Formal Shirt", brand: "Brand B", price: 80.25, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "XL", categori: "dress", image: Img2 },
            { id: 3, name: "Modern Shirt", brand: "Brand C", price: 35.20, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "XXL", categori: "sandals", image: Img3 },
            { id: 4, name: "Vintage Shirt", brand: "Brand D", price: 22.34, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "M", categori: "shoes", image: Img4 },
            { id: 5, name: "Colorize Shirt", brand: "Brand E", price: 12.25, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "S", categori: "jacket", image: Img5 },
            { id: 6, name: "Keyach Shirt", brand: "Brand F", price: 40.50, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "M", categori: "blazzer", image: Img6 },

            { id: 7, name: "Beach Shirt", brand: "Brand A", price: 18.50, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img6 },
            { id: 8, name: "Lingch Shirt", brand: "Brand A", price: 79.43, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img5 },
            { id: 9, name: "Sweet Shirt", brand: "Brand A", price: 90.99, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img4 },
            { id: 10, name: "Forest Shirt", brand: "Brand A", price: 99.65, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img3 },
            { id: 11, name: "Beauty Shirt", brand: "Brand A", price: 12.78, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img2 },
            { id: 12, name: "Cook Shirt", brand: "Brand A", price: 78.00, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img1 },
        
            { id: 13, name: "Play Shirt", brand: "Brand A", price: 20.45, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img6 },
            { id: 14, name: "Lala Shirt", brand: "Brand A", price: 14.76, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img5 },
            { id: 15, name: "Noir Shirt", brand: "Brand A", price: 46.78, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img4 },
            { id: 16, name: "Chuko Shirt", brand: "Brand A", price: 44.55, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img3 },
            { id: 17, name: "Avatar Shirt", brand: "Brand A", price: 33.66, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img2 },
            { id: 18, name: "Enoc Shirt", brand: "Brand A", price: 22.99, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img1 },

            { id: 19, name: "Casual Shirt", brand: "Brand A", price: 98.23, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img6 },
            { id: 20, name: "Casual Shirt", brand: "Brand A", price: 32.14, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img5 },
            { id: 21, name: "Casual Shirt", brand: "Brand A", price: 65.78, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img4 },
            { id: 22, name: "Casual Shirt", brand: "Brand A", price: 53.55, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img3 },
            { id: 23, name: "Casual Shirt", brand: "Brand A", price: 55.55, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img2 },
            { id: 24, name: "Casual Shirt", brand: "Brand A", price: 65.44, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img1 },

            { id: 25, name: "Casual Shirt", brand: "Brand A", price: 34.45, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img6 },
            { id: 26, name: "Casual Shirt", brand: "Brand A", price: 10.55, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img5 },
            { id: 27, name: "Casual Shirt", brand: "Brand A", price: 22.56, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img4 },
            { id: 28, name: "Casual Shirt", brand: "Brand A", price: 22.99, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img3 },
            { id: 29, name: "Casual Shirt", brand: "Brand A", price: 87.88, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img2 },
            { id: 30, name: "Casual Shirt", brand: "Brand A", price: 44.21, reviews: "(2.1k) Customer Reviews", location: "New York, USA", color: "Black", size: "Medium", categori: "t-shirt", image: Img1 },
        ]
    },
    {
        name: "Men's Fashion", items: [

        ]
    },
    {
        name: "Kid's Fashion", items: [
            
        ]
    }
];

export default products;
