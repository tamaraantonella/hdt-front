import {
	IconButton,
	MobileNav,
	Navbar as StickyNavbar,
	Typography,
} from "@material-tailwind/react";
import React from "react";
import { navLinks } from "../constants";
import { CartWidget } from "./CartWidget";
import { isStoreOpen } from "@/utils/utils";

export const Navbar = () => {
	const [openNav, setOpenNav] = React.useState(false);
	const isStore = isStoreOpen();
	React.useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false),
		);
	}, []);

	const navList = (
		<div className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			{navLinks.map((link) => (
				<ul key={link.name} className="">
					<Typography
						placeholder="navbar"
						as="li"
						variant="small"
						color="blue-gray"
						className="p-1 font-normal  hover:text-green-500 focus:text-green-500"
					>
						<a href={link.href} className="flex items-center">
							{link.name}
						</a>
					</Typography>
				</ul>
			))}
		</div>
	);

	return (
		<div className=" h-24 max-h-[768px] w-full">
			<StickyNavbar
				placeholder="navbar"
				className="sticky top-0 z-10 h-max max-w-full rounded-none py-4 px-0"
			>
				<div className="flex w-full items-center justify-between text-blue-gray-900">
					<div className="h-12 w-12">
						<a href="/">
							<img
								className="h-full object-cover object-center"
								src="https://res.cloudinary.com/dfbxjt69z/image/upload/v1662125764/delTomate/deltomate-logo_pxslmj.png"
								alt="logo"
							/>
						</a>
					</div>
					<div className="flex items-center gap-4 ">
						<div className="mr-4 hidden lg:flex justify-end">{navList}</div>
						{isStore ? <CartWidget /> : null}
						<IconButton
							placeholder="icon button"
							variant="text"
							className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
							ripple={false}
							onClick={() => setOpenNav(!openNav)}
						>
							{openNav ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									className="h-6 w-6"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</IconButton>
					</div>
				</div>
				<MobileNav open={openNav}>{navList}</MobileNav>
			</StickyNavbar>
		</div>
	);
};
