import { Typography } from "@material-tailwind/react";
import { navLinks } from "../constants";

export const Footer = () => {
	return (
		<footer className="flex w-full  mt-12 flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 border-t border-blue-gray-50 py-6 text-center md:justify-between">
			<Typography
				placeholder="footer"
				color="blue-gray"
				className="font-normal"
				variant="small"
			>
				&copy; 2024 Huerta del Tomate
			</Typography>
			<ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
				{navLinks.map((link) => (
					<li key={link.name}>
						<Typography
							placeholder="footer"
							as="a"
							href={link.href}
							variant="small"
							color="blue-gray"
							className="font-normal transition-colors hover:text-green-500 focus:text-green-500"
						>
							{link.name}
						</Typography>
					</li>
				))}
			</ul>
		</footer>
	);
};
