// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Banner = () => {
	return (
		<div className="relative">
			{/* 	<Carousel
				autoPlay
				infiniteLoop
				showStatus={false}
				showThumbs={false}
				showIndicators={false}
				interval={5000}
			>
				<div>
					<img
						src="/image/amazonbg1.jpg"
						alt="image bg amazon"
						loading="lazy"
					/>
				</div>
				<div>
					<img
						src="/image/amazonbg2.jpg"
						alt="image bg amazon"
						loading="lazy"
					/>
				</div>
				<div>
					<img
						src="/image/amazonbg3.jpg"
						alt="image bg amazon"
						loading="lazy"
					/>
				</div>
				<div>
					<img
						src="/image/amazonbg4.jpg"
						alt="image bg amazon"
						loading="lazy"
					/>
				</div>
				<div>
					<img
						src="/image/amazonbg5.jpg"
						alt="image bg amazon"
						loading="lazy"
					/>
				</div>
			</Carousel> */}
			<div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
			<div>
				<img
					src="/image/amazonbg2.jpg"
					loading="lazy"
					// width={150}
					// height={250}
					alt="image bg amazon"
				/>
			</div>
		</div>
	);
};

export default Banner;
