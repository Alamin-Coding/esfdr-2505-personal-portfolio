import React, { useState } from "react";

const tabsData = ["Experiences", "Education", "Awards"];
const tabsContent = {
	Experiences: [
		{
			id: 1,
			content:
				"Logos: I redrew the three company logos as small SVGs that approximate the originals. Swap in your real logo images if you have them",
		},
	],
	Education: [
		{
			id: 1,
			content:
				"Heading: the white-to-grey split comes from a hard-stop gradient on the text at 51%, so it matches the screenshot. It's static. If you want it to animate on scroll, that needs extra code.",
		},
	],
	Awards: [
		{
			id: 1,
			content:
				"Tabs: they switch between Experiences, Education and Awards. Only Experiences appears in your screenshot, so I made up placeholder entries for the other two. Edit the",
		},
		{
			id: 2,
			content:
				"as a Tailwind-only section. I haven't rendered it next to your screenshot, so please compare the two.",
		},
	],
};

const Tab = () => {
	const [active, setActive] = useState("Awards");
	return (
		<div>
			<h2>Tabs</h2>

			<div className="flex items-center justify-center gap-2">
				{tabsData.map((item) => (
					<button onClick={()=> setActive(item)} className="px-3 py-1.5 cursor-pointer btn text-white">
						{item}
					</button>
				))}
			</div>
			<div className="mt-12">
				<div className="space-y-3 border p-10 max-w-5xl mx-auto">
					{tabsContent[active].map((item) => (
						<p className="bg-orange-300">{item.content}</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default Tab;
