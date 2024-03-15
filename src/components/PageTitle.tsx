import React from "react";

type SectionTitleProps = {
	title: string;
	subtitle?: string;
	id: string;
};

export const PageTitle: React.FC<SectionTitleProps> = ({
	title,
	subtitle,
	id,
}) => {
	return (
		<div key={id} className="py-5 flex justify-center">
			<p className="uppercase text-main-dark text-2xl lg:text-4xl font-semibold">
				{title}
			</p>
			{subtitle && <p className="my-2 text-gray-900">{subtitle}</p>}
		</div>
	);
};
