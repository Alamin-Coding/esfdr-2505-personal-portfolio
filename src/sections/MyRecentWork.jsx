import PortfolioCard from "../Components/PortfolioCard";
import SectionHeading from "../Components/SectionHeading";

import image_1 from "../assets/portfolio (1).png";
import image_2 from "../assets/portfolio (2).png";
import image_3 from "../assets/portfolio (3).png";

const MyRecentWork = () => {
	return (
		<section className="py-30 bg-[#140C1C]">
			<div className="container">
				<SectionHeading
					className="max-w-[440px]"
					subHeading={"My recent work"}
					heading={"Recent work for MY clients!"}
				/>
			</div>

			<div className="flex gap-7.5 justify-center py-15">
				<PortfolioCard
					image={image_1}
					title="Deloitte"
					description="Project was about precision and information..."
				/>
				<PortfolioCard image={image_2} />
				<PortfolioCard image={image_3} />
			</div>
		</section>
	);
};

export default MyRecentWork;
