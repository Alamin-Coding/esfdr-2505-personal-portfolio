import LogoLoop from "./LogoLoop";
import {
	SiReact,
	SiNextdotjs,
	SiTypescript,
	SiTailwindcss,
} from "react-icons/si";

import brand_1 from "../assets/brand-1.png";
import brand_2 from "../assets/brand-2.png";
import brand_3 from "../assets/brand-3.png";
import brand_4 from "../assets/brand-4.png";
import brand_5 from "../assets/brand-5.png";

const Brand_1 = () => {
	return <img src={brand_1} alt="brand logo" />;
};
const Brand_2 = () => {
	return <img src={brand_2} alt="brand logo" />;
};
const Brand_3 = () => {
	return <img src={brand_3} alt="brand logo" />;
};
const Brand_4 = () => {
	return <img src={brand_4} alt="brand logo" />;
};
const Brand_5 = () => {
	return <img src={brand_5} alt="brand logo" />;
};

const techLogos = [
	{ node: <Brand_1 />, title: "Brand 1" },
	{ node: <Brand_2 />, title: "Brand 2" },
	{ node: <Brand_3 />, title: "Brand 3" },
	{ node: <Brand_4 />, title: "Brand 4" },
	{ node: <Brand_5 />, title: "Brand 5" },
	// { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
	// {
	// 	node: <SiTypescript />,
	// 	title: "TypeScript",
	// 	href: "https://www.typescriptlang.org",
	// },
	// {
	// 	node: <SiTailwindcss />,
	// 	title: "Tailwind CSS",
	// 	href: "https://tailwindcss.com",
	// },
];

// Alternative with image sources
const imageLogos = [
	{
		src: "/logos/company1.png",
		alt: "Company 1",
		href: "https://company1.com",
	},
	{
		src: "/logos/company2.png",
		alt: "Company 2",
		href: "https://company2.com",
	},
	{
		src: "/logos/company3.png",
		alt: "Company 3",
		href: "https://company3.com",
	},
];

function ImageLoop() {
	return (
		<div style={{ height: "200px", position: "relative", overflow: "hidden" }}>
			{/* Basic horizontal loop */}
			<LogoLoop
				logos={techLogos}
				speed={100}
				direction="left"
				logoHeight={60}
				gap={60}
				hoverSpeed={0}
				scaleOnHover
				fadeOut
				fadeOutColor="#ffffff"
				ariaLabel="Technology partners"
			/>

			{/* Vertical loop with deceleration on hover */}
			{/* <LogoLoop logos={techLogos} useCustomRender={false} /> */}
		</div>
	);
}

export default ImageLoop;
