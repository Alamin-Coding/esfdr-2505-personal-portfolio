import React, { useState } from "react";
import SectionHeading from "../Components/SectionHeading";

/**
 * Achievements.jsx
 * Tailwind CSS only. Sized for a 1290px content column (same as Footer.jsx).
 *
 * Font: add this to your index.html <head> (or global CSS):
 * <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
 */

const DESC =
	"I'm winner of the world's most prestigious web designthat has more-or-less normal awards in the fields.";

/* ---------- Company logos ---------- */
import VirtusLogo from "../assets/achievements-1.png";

import SemiflatLogo from "../assets/achievements-2.png";

import AutentikaLogo from "../assets/achievements-3.png";

const CalendarIcon = () => (
	<svg
		width="18"
		height="18"
		viewBox="0 0 18 18"
		fill="none"
		stroke="#6b45c9"
		strokeWidth="1.300"
		strokeLinecap="round"
		aria-hidden="true"
	>
		<rect x="2" y="3.500" width="14" height="12.500" rx="2" />
		<path d="M2 7.500h14M6 2v3M12 2v3" />
		<path
			d="M6 10.500h.01M9 10.500h.01M12 10.500h.01M6 13h.01M9 13h.01"
			strokeWidth="1.800"
		/>
	</svg>
);

/* ---------- Data ---------- */
const TABS = ["Experiences", "Education", "Awards"];

const DATA = {
	Experiences: [
		{
			title: "Senior Product Designer",
			company: "Virtuslab",
			date: "2022 - 2023",
			Logo: VirtusLogo,
		},
		{
			title: "Senior Product Designer",
			company: "Semiflat Studio",
			date: "2020 - 2023",
			Logo: SemiflatLogo,
		},
		{
			title: "Senior User Interface Designer",
			company: "Autentika",
			date: "2018 - 2020",
			Logo: AutentikaLogo,
		},
	],
	Education: [
		{
			title: "Master of Interaction Design",
			company: "Design University",
			date: "2016 - 2018",
			Logo: VirtusLogo,
		},
		{
			title: "Bachelor of Visual Arts",
			company: "Arts Institute",
			date: "2012 - 2016",
			Logo: SemiflatLogo,
		},
		{
			title: "UX Certification Program",
			company: "Autentika Academy",
			date: "2011 - 2012",
			Logo: AutentikaLogo,
		},
	],
	Awards: [
		{
			title: "Site Of The Day",
			company: "Awwwards",
			date: "2023",
			Logo: VirtusLogo,
		},
		{
			title: "Best UI Design",
			company: "CSS Design Awards",
			date: "2022",
			Logo: SemiflatLogo,
		},
		{
			title: "Honorable Mention",
			company: "Behance Featured",
			date: "2020",
			Logo: AutentikaLogo,
		},
	],
};

export default function Achievements() {
	const [active, setActive] = useState("Experiences");
	const items = DATA[active];

	// const myObj = {
	//     info: ["a",2, true]
	// }
	// myObj["info"]

	return (
		<section className="w-full bg-[#150d1f] px-6 pb-[94px] pt-[110px] font-['Plus_Jakarta_Sans',sans-serif] text-white">
			{/* ---------- Heading ---------- */}
			<div className="flex flex-col items-center text-center">
				<SectionHeading
					className={"max-w-[500px] max-auto"}
					heading={"My background and achievements"}
					subHeading={"Behind the pixels"}
				/>

				{/* ---------- Tabs ---------- */}
				<div
					role="tablist"
					className="mt-[58px] flex p-1.25 items-center rounded-full border-2 border-[#8f4ff2] bg-[#8f4ff2]"
				>
					{TABS.map((tab, i) => {
						const isActive = tab === active;
						return (
							<button
								key={tab}
								role="tab"
								aria-selected={isActive}
								onClick={() => {
									console.log(tab);
									setActive(tab);
								}}
								className={`flex items-center justify-center rounded-full text-[15px] font-bold leading-none text-white transition-colors px-6 py-3 ${
									isActive ? "bg-[#150d1f]" : "bg-transparent"
								}`}
							>
								{tab}
							</button>
						);
					})}
				</div>
			</div>

			{/* ---------- Card ---------- */}
			<div className="mx-auto mt-[40px] w-full max-w-[1290px] rounded-[22px] border border-[#2a2135] bg-[#120a1a] px-6 py-[10px] lg:px-[60px]">
				{items.map(({ title, company, date, Logo }, i) => (
					<div
						key={`${active}-${i}`}
						className={`flex flex-col gap-4 py-[50px] lg:flex-row lg:items-start lg:justify-between ${
							i > 0 ? "border-t border-[#2a2135]" : ""
						}`}
					>
						<div className="flex items-start gap-[40px]">
							<img src={Logo} alt="logo" />
							<div>
								<h3 className="text-[20px] font-medium uppercase leading-[26px] text-white">
									{title}
								</h3>
								<p className="mt-[12px] text-[12px] font-bold uppercase leading-none text-white">
									{company}
								</p>
								<p className="mt-[28px] max-w-[640px] text-[16px] font-medium leading-[30px] text-[#8a8394]">
									I'm winner of the world's most prestigious web designthat has
									more-
									<br className="hidden lg:block" />
									or-less normal awards in the fields.
								</p>
							</div>
						</div>

						<div className="flex items-center gap-[10px] lg:h-[26px]">
							<CalendarIcon />
							<span className="text-[18px] font-medium leading-none text-[#b3acbe]">
								{date}
							</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
