import { Carousel } from "@material-tailwind/react";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

export const Banner=() => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	});
	return (
		<div className="relative w-full" data-aos="fade-up">
			<Carousel placeholder="carousel" className="rounded-xl h-[28rem]">
				<img
					src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1662129293/delTomate/banner_ubxf59.jpg"
					alt="image 1"
					className="h-full w-full object-cover"
				/>
				<img
					src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1662140303/delTomate/bolson3_osb2wj.jpg"
					alt="image 2"
					className="h-full w-full object-cover"
				/>
				<img
					src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1662145804/delTomate/semillas/ajies/holliday-time_hu5d9a.jpg"
					alt="image 3"
					className="h-full w-full object-cover"
				/>
			</Carousel>
			<div className="bg-black/50 h-full absolute flex items-center justify-center text-white w-full top-0 text-3xl lg:text-5xl font-bold text-center uppercase">
				HUERTA DEL TOMATE ORGÁNICA Y AGROECOLÓGICA
			</div>
		</div>
	);
};
