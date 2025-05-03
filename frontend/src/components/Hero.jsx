import React from 'react';
import { useState, useEffect } from "react";

const images = [
	"https://bluefery.com/cdn/shop/files/1_ab3d7043-d26a-44e1-a18e-081b0304653d.png?v=1734670802&width=1370",
    "https://akhrotclothing.com/cdn/shop/files/season_end_8.png?v=1727089991&width=1370",
	"https://pk.sapphireonline.pk/on/demandware.static/-/Sites-Sapphire-Library/default/dwe09a4073/images/Editorials/Hania-Editorial-Main-tile.jpg",
	"https://pk.sapphireonline.pk/on/demandware.static/-/Sites-Sapphire-Library/default/dw5dc71dcb/images/Editorials/scents-of-love-tiles.jpg",
	"https://cdn.shopify.com/s/files/1/1692/9471/files/HP-GIF-BANNER-DESKTOP-22222_d02c3fc4-486a-4cfa-a673-7dce33da81ab.gif?v=1745825517&width=1280"
];


const Hero = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((currentInd) => (currentInd === images.length - 1 ? 0 : currentInd + 1));
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const prevSlide = () => {
		setCurrentIndex((previousImg) => (previousImg === 0 ? images.length - 1 : previousImg - 1));
	};

	const nextSlide = () => {
		setCurrentIndex((nextImg) => (nextImg === images.length - 1 ? 0 : nextImg + 1));
	};

	return (
		<>
			<div className="relative w-full h-auto mt-1 mx-auto">
				{/* Images */}
				<div className="overflow-hidden">
					<img
						src={images[currentIndex]}
						alt={`Slide ${currentIndex+1}`}
						className="w-full h-160 object-cover transition-transform duration-500"
					/>
				</div>

				{/* Left Arrow */}
				<button
					onClick={prevSlide}
					className="absolute top-1/2 left-4 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/80"
				>
					❮
				</button>

				{/* Right Arrow */}
				<button
					onClick={nextSlide}
					className="absolute top-1/2 right-4 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/80"
				>
					❯
				</button>

				{/* Dots */}
				<div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
					{images.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentIndex(index)}
							className={`w-3 h-3 rounded-full ${currentIndex === index ? "bg-white" : "bg-gray-400"
								}`}
						/>
					))}
				</div>
			</div>
		</>
	)
}

export default Hero
