import React from "react";

const SectionHeading = ({
	className,
	subHeading,
	heading,
	textCenter = false,
}) => {
	return (
		<div className={textCenter ? "text-center" : ""}>
			<h3 className="text-xs font-semibold text-primary font-sora uppercase tracking-[2.4px]">
				{subHeading}
			</h3>
			<h2 className={`linear-text font-sora text-[45px] ${className}`}>
				{heading}
			</h2>
		</div>
	);
};

export default SectionHeading;
