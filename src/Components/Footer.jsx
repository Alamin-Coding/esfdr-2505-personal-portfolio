import React from "react";

/**
 * Footer.jsx
 * Tailwind CSS only (arbitrary values used for pixel-accurate match).
 *
 * Font: add this to your index.html <head> (or global CSS):
 * <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap" rel="stylesheet" />
 */

import bgImage from "../assets/Footer-bg.png" 

const gradientBg = {
	background: `url(${bgImage})`,
	backgroundRepeat: "no-repeat",
	backgroundOPosition: "center",
	backgroundSize: "cover"
};

const FacebookIcon = () => (
	<svg width="8" height="14" viewBox="0 0 8 14" fill="#fff" aria-hidden="true">
		<path d="M5.2 14V7.6h2.1l.4-2.5H5.2V3.6c0-.7.3-1.2 1.3-1.2h1.3V.2C7.5.1 6.800 0 6 0 4.100 0 2.800 1.100 2.800 3.200v1.900H.7v2.500h2.100V14h2.400Z" />
	</svg>
);

const InstagramIcon = () => (
	<svg
		width="13"
		height="13"
		viewBox="0 0 24 24"
		fill="none"
		stroke="#fff"
		strokeWidth="2.2"
		aria-hidden="true"
	>
		<rect x="3" y="3" width="18" height="18" rx="5" />
		<circle cx="12" cy="12" r="4" />
		<circle cx="17.500" cy="6.500" r="1" fill="#fff" stroke="none" />
	</svg>
);

const LinkedinIcon = () => (
	<svg
		width="12"
		height="12"
		viewBox="0 0 24 24"
		fill="#fff"
		aria-hidden="true"
	>
		<path d="M4.500 8.500H.5V23h4V8.500ZM2.500 1.500a2.300 2.300 0 1 0 0 4.600 2.300 2.300 0 0 0 0-4.600ZM23.500 14.500c0-4.100-2.200-6.300-5.200-6.300-2.100 0-3.100 1.200-3.600 2V8.500h-4V23h4v-8c0-2 .9-3.300 2.700-3.300 1.600 0 2.100 1.300 2.100 3.300v8h4v-8.500Z" />
	</svg>
);

const ArrowUpRight = () => (
	<svg
		width="13"
		height="13"
		viewBox="0 0 14 14"
		fill="none"
		stroke="#fff"
		strokeWidth="1.400"
		strokeLinecap="round"
		strokeLinejoin="round"
		aria-hidden="true"
	>
		<path d="M3 11 11 3M4.500 3H11v6.500" />
	</svg>
);

const LogoMark = () => (
	<span className="flex h-[55px] w-[55px] shrink-0 items-center justify-center rounded-full bg-[#0c0712]">
		<svg
			width="38"
			height="38"
			viewBox="0 0 40 40"
			fill="none"
			stroke="#fff"
			strokeWidth="3.400"
			strokeLinecap="round"
			aria-hidden="true"
		>
			<path d="M31 12.500A14 14 0 1 0 33 21" />
			<path d="M27 15.500A9.500 9.500 0 1 0 28.500 22H20" />
			<path d="M20 22h9" />
		</svg>
	</span>
);

const legalLinks = [
	"Policy Privacy",
	"Term & Conditions",
	"Refund And Cancellation",
	"Disclaimer",
];
const contactItems = [
	"Hello-Designer@Gerold.Com",
	"+01 123 654 8096",
	"+01 123 654 8096",
];
const navLinks = ["WORK.", "SERVICES.", "ABOUT.", "CONTACT."];

const Footer = () => {
	return (
		<footer className="w-full bg-[#120a1a] font-['Plus_Jakarta_Sans',sans-serif] text-white">
			<div
				className="relative flex min-h-[510px] w-full flex-col overflow-hidden rounded-t-[60px] lg:rounded-t-[110px]"
				style={gradientBg}
			>
				<div className="mx-auto flex w-full max-w-[1290px] flex-1 flex-col px-6 pt-16 lg:px-0 lg:pt-[120px]">
					{/* ---------- Main columns ---------- */}
					<div className="grid grid-cols-1 gap-12 lg:grid-cols-[430px_260px_295px_305px] lg:gap-0">
						{/* Brand */}
						<div>
							<div className="flex items-center gap-[8px]">
								<a href="#">
									<img src="footer-logo.png" alt="Logo" />
								</a>
							</div>

							<p className="mt-[29px] max-w-[350px] text-[16px] font-normal leading-[24px] text-[#f1e6ff]">
								I break down complex user the experience problems the create
								integrity focused to solutions that’s connect.
							</p>

							<div className="mt-[21px] flex items-center gap-[8px]">
								{[FacebookIcon, InstagramIcon, null, LinkedinIcon].map(
									(Icon, i) => (
										<a
											key={i}
											href="#"
											aria-label={
												["Facebook", "Instagram", "Social", "LinkedIn"][i]
											}
											className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-white/25"
										>
											{Icon ?
												<Icon />
											:	null}
										</a>
									),
								)}
							</div>
						</div>

						{/* Legal */}
						<div>
							<h3 className="text-[20px] font-semibold uppercase leading-[24px]">
								Legal Details
							</h3>
							<ul className="mt-[34px] flex flex-col">
								{legalLinks.map((item) => (
									<li key={item} className="h-[36px]">
										<a
											href="#"
											className="text-[15px] leading-[20px] text-white"
										>
											{item}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Contact */}
						<div>
							<h3 className="text-[20px] font-semibold uppercase leading-[24px]">
								Contact
							</h3>
							<ul className="mt-[34px] flex flex-col">
								{contactItems.map((item, i) => (
									<li key={i} className="h-[36px]">
										<a
											href="#"
											className="text-[15px] leading-[20px] text-white"
										>
											{item}
										</a>
									</li>
								))}
							</ul>
						</div>

						{/* Newsletter */}
						<div>
							<h3 className="max-w-[260px] text-[20px] font-semibold uppercase leading-[24px]">
								Subscribe to my newsletter!
							</h3>
							<form
								onSubmit={(e) => e.preventDefault()}
								className="mt-[19px] flex items-center gap-[9px]"
							>
								<input
									type="email"
									aria-label="Email address"
									className="h-[56px] w-[236px] rounded-full border-2 border-[#0c0712] bg-white px-6 text-[15px] text-[#0c0712] outline-none"
								/>
								<button
									type="submit"
									aria-label="Subscribe"
									className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-full bg-[#0c0712]"
								>
									<ArrowUpRight />
								</button>
							</form>
						</div>
					</div>

					{/* ---------- Bottom bar ---------- */}
					<div className="mt-auto pt-16">
						<div className="border-t border-white/10" />
						<div className="flex flex-col items-start gap-5 pb-[33px] pt-[30px] lg:flex-row lg:items-center lg:justify-between lg:gap-0">
							<div className="flex items-center gap-[9px] lg:w-[400px]">
								<span className="h-[7px] w-[7px] rounded-full bg-[#22ff33]" />
								<span className="text-[13px] font-semibold uppercase leading-none">
									Available for freelance
								</span>
							</div>

							<nav className="flex items-center gap-[35px] lg:ml-[-40px]">
								{navLinks.map((item) => (
									<a
										key={item}
										href="#"
										className="text-[15px] leading-none text-white"
									>
										{item}
									</a>
								))}
							</nav>

							<p className="text-[15px] uppercase leading-none lg:w-[400px] lg:text-right">
								©All Rights Reserved ByThemeJunction
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
