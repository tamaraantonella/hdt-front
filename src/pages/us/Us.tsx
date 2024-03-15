import {
	Card,
	CardBody,
	CardHeader,
	Typography,
} from "@material-tailwind/react";
import { PageTitle } from "../../components/PageTitle";

export const Us = () => {
	return (
		<div className="">
			<PageTitle title="ECOLÓGICOS Y AMIGABLES CON EL MEDIOAMBIENTE" id="us" />
			<Typography placeholder={undefined} className="mb-5 text-gray-900">
				La huerta surge en 2021 de la idea de Norma y Maby, dos amigas dedicadas
				a la huerta agroecológica exotica. Todo surgio cuando cada una de las
				amigas tenia su propia huerta,intercambiaban semillas y experiencias.
				Con el tiempo decidieron unir esfuerzos y cultivar conjuntamente
				distintas verduras exóticas con producción de semillas, dando origen a
				Huerta Del Tomate.
			</Typography>
			<Typography placeholder={undefined} className="mb-5 text-gray-900">
				La misión principal del proyecto es concientizar sobre los pesticidas e
				incentivar a todos con huertas propias. Hoy en día en la huerta se lleva
				a cabo producción de plantines, producción de semillas, venta de
				verduras de estación. Eliseo trabaja junto a nosotras, preparándonos la
				tierra y cultivando de manera agroecologica las verduras tradicionales
				que integran el bolsón. Dedicandonos nosotras a todas las verduras
				exóticas y a recuperar el sabor del tomate reliquia y de las distintas
				variedades de ajíes y otras verduras exóticas
			</Typography>

			<div className="flex md:flex-row my-8 w-full lg:justify-between px-0">
				<Card placeholder={undefined} className="w-96 lg:w-[30rem] mx-0">
					<CardHeader placeholder={undefined} floated={false} className="h-80">
						<img
							src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1662132500/delTomate/about3_k32w8a.jpg"
							alt="profile-picture"
						/>
					</CardHeader>
					<CardBody placeholder={undefined} className="text-center">
						<Typography
							placeholder={undefined}
							variant="h4"
							color="blue-gray"
							className="mb-2"
						>
							Norma
						</Typography>
						<Typography
							placeholder={undefined}
							color="blue-gray"
							className="font-medium"
							textGradient
						>
							Fundadora
						</Typography>
					</CardBody>
				</Card>
				<Card placeholder={undefined} className="w-96 lg:w-[30rem] mx-0">
					<CardHeader placeholder={undefined} floated={false} className="h-80">
						<img
							src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1662132499/delTomate/about2_yefkhz.jpg"
							alt="profile-picture"
						/>
					</CardHeader>
					<CardBody placeholder={undefined} className="text-center">
						<Typography
							placeholder={undefined}
							variant="h4"
							color="blue-gray"
							className="mb-2"
						>
							Maby
						</Typography>
						<Typography
							placeholder={undefined}
							color="blue-gray"
							className="font-medium"
							textGradient
						>
							Fundadora
						</Typography>
					</CardBody>
				</Card>
			</div>
		</div>
	);
};
