import {
	Card,
	CardBody,
	CardHeader,
	Typography,
} from "@material-tailwind/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Banner } from "../../components/Banner";

export const Home = () => {
	useEffect(() => {
		AOS.init({ duration: 2000 });
	});
	return (
		<div>
			<Banner />
			<div className="flex flex-col items-center w-full justify-center my-5 mx-auto max-w-4xl text-center">
				<div data-aos="zoom-in-up" className="w-3/4 h-16 lg:h-28 mb-6">
					<img
						className="w-full h-full object-center object-contain"
						src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1662743341/giphy_z0oh4j.gif"
						alt=""
					/>
				</div>

				<p
					data-aos="fade-up"
					className="uppercase text-black/80 lg:text-2xl mb-3"
				>
					Ahora podés seleccionar los productos que quieras y armar un pedido
					que nos llega por whatsapp !
				</p>
				<p
					data-aos="fade-up"
					className="uppercase text-black/80 mb-3 lg:text-2xl"
				>
					👋 Por ese medio seguimos coordinando todo para que puedas pasar a
					buscar tus productos!
				</p>

				<p data-aos="fade-up" className="text-sm text-black/60 ">
					Aclaración: el pedido es un estimativo, y se puede modificar. En el
					caso que nos hayamos quedado sin stock te avisaremos por whatsapp al
					solicitar el pedido, asimismo si querés agregar otro producto que no
					esté en la lista, también nos lo podés pedir por whatsapp.
				</p>
			</div>
			<div className="flex flex-col md:flex-row md:justify-around mt-16 gap-3">
				<Card
					data-aos="fade-up"
					placeholder="card1"
					shadow={false}
					className="relative grid h-[30rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
				>
					<CardHeader
						placeholder="card-header"
						floated={false}
						shadow={false}
						color="transparent"
						className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://res.cloudinary.com/dfbxjt69z/image/upload/v1662134685/delTomate/WhatsApp_Image_2022-09-02_at_12.29.38_dzq7p3.jpg')] bg-cover bg-center"
					>
						<div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/95 via-black/80" />
					</CardHeader>
					<CardBody
						placeholder="card1"
						className="relative py-14 px-6 md:px-12"
					>
						<Typography
							data-aos="flip-up"
							placeholder="card1"
							variant="h2"
							color="white"
							className="mb-6 font-medium leading-[1.5]"
						>
							VISITANOS
						</Typography>
						<Typography
							placeholder="card1"
							variant="h5"
							className="mb-4 text-gray-400"
							data-aos="fade-up"
						>
							Podes encontrar nuestra huerta en la ciudad de Belén de Escobar,
							Partido de Escobar, Buenos Aires. J. Mermoz norte 2433
						</Typography>
					</CardBody>
				</Card>
				<Card
					data-aos="fade-up"
					placeholder="card1"
					shadow={false}
					className="relative grid h-[30rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
				>
					<CardHeader
						placeholder="card-header"
						floated={false}
						shadow={false}
						color="transparent"
						className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://res.cloudinary.com/dfbxjt69z/image/upload/v1662129293/delTomate/banner_ubxf59.jpg')] bg-cover bg-center"
					>
						<div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/95 via-black/80" />
					</CardHeader>
					<CardBody
						placeholder="card1"
						className="relative py-14 px-6 md:px-12"
					>
						<Typography
							data-aos="flip-up"
							placeholder="card1"
							variant="h2"
							color="white"
							className="mb-6 font-medium leading-[1.5]"
						>
							PROYECTOS
						</Typography>
						<Typography
							placeholder="card1"
							variant="h5"
							className="mb-4 text-gray-400"
							data-aos="fade-up"
						>
							Unimos trabajo con profesionales del INTA, trabajos en común con
							cooperativas de la zona y con pymes de cosmética natural.
						</Typography>
					</CardBody>
				</Card>
			</div>
		</div>
	);
};
