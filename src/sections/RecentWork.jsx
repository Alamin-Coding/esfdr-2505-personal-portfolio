import Button from "../Components/Button";
import SectionHeading from "../Components/SectionHeading";
import SkillCard from "../Components/SkillCard";

import cardImage1 from "../assets/skills-1.png";
import cardImage2 from "../assets/skills-2.png";
import cardImage3 from "../assets/skills-3.png";
import cardImage4 from "../assets/skills-4.png";

const RecentWork = () => {
	return (
		<section className="bg-secondary py-30 text-white">
			<div className="container">
				<div className="flex justify-between items-end">
					<SectionHeading className={"max-w-[508px]"} subHeading={"My Recent Work"} heading={"MY Mastering Video Editing Skills"} />
					<Button text={"Learn More"} />
				</div>

				<div className="grid grid-cols-4 gap-6 pt-15">
					<SkillCard image={cardImage1} title="Adobe After Effect" description="Adobe After Effects is a powerful software application used motion graphics." progress={92}/>
					<SkillCard image={cardImage2} title="Final Cut Pro" description="Professional video editing software developed by Apple Inc., designed." progress={80} />
					<SkillCard image={cardImage3} title="iMovie Film" description="iMovie offers a range of powerful editing tools that allow users." progress={85}/>
					<SkillCard image={cardImage4} title="Hit Films Express" description="HitFilm Express is a free video editing and visual effects software developed." progress={99}/>
				</div>
			</div>
		</section>
	);
};

export default RecentWork;
