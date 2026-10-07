import React from "react";
import Container from "./Container";
import CircularText from "./CircularText";
import BannerImg from "../assets/Banner.png"

const Banner = () => {
	return (
		<div className="bg-secondary text-white py-20">
			<Container className="w-[1880px]">
				<h1 className="text-[180px] font-semibold flex items-center gap-14">
					Hello
					<CircularText
						text="REACT*BITS*COMPONENTS*"
						onHover="speedUp"
						spinDuration={20}
						className="custom-class"
					/>
					Motion
				</h1>
                <img src={BannerImg} alt="" />
			</Container>
		</div>
	);
};

export default Banner;
