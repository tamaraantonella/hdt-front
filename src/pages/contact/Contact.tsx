import { Typography } from "@material-tailwind/react";
import { PageTitle } from "../../components/PageTitle";

export const Contact = () => {
	return (
		<div>
			<PageTitle
				title="Contactate"
				id="contact-title"
				subtitle="Gracias por interesarte en nosotros."
			/>

			<div className="mb-5">
				<Typography
					placeholder="contact"
					color="gray"
					className="text-xl font-bold lg:text-2xl"
				>
					Consultas por whatsapp
				</Typography>
				<Typography placeholder="contact" variant="small">
					<div>
						<img
							src="../../../public/wp.png"
							width={20}
							height={20}
							className="inline mr-2 "
						/>
						<a
							className="pointer text- hover:text-main-dark transition-all duration-300"
							href="http://wa.link/0435k6"
						>
							11-7007-1205
						</a>
					</div>
				</Typography>
			</div>
			<div className="w-full flex flex-col">
				<Typography
					placeholder="contact"
					color="gray"
					className="text-xl font-bold lg:text-2xl"
				>
					Ubicación
				</Typography>
				<Typography placeholder="contact" variant="small" className="mb-5">
					<a
						className="pointer text- hover:text-main-dark transition-all duration-300"
						href="https://maps.app.goo.gl/5eCSNy9eSrrUi67y7"
					>
						J. Mermoz norte 2433, Escobar
					</a>
				</Typography>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3295.013067916215!2d-58.78764258541363!3d-34.32468658053274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bb611ccefc9223%3A0x6b389041d6d7de9e!2sJuan%20Mermoz%20Nte.%202433%2C%20Bel%C3%A9n%20de%20Escobar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1647300534621!5m2!1ses!2sar"
					width="100%"
					height="50%"
					loading="lazy"
					className="h-[20rem] w-full"
				/>
			</div>
		</div>
	);
};
