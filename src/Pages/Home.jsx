import React from "react";
import NavBar from "../Components/NavBar";
import Banner from "../Components/Banner";
import ScrollVelocity from "../Components/ScrollVelocity";
import ImageLoop from "../Components/LogoSlider";
import RecentWork from "../sections/RecentWork";
import BehindThePixels from "../sections/BehindThePixels";
import MyService from "../sections/MyService";
import MyRecentWork from "../sections/MyRecentWork";
import Blogs from "../sections/Blogs";
import Footer from "../Components/Footer";
import Achievements from "../sections/Achievements";

const Home = () => {
	return (
		<div>
			<NavBar />
			<Banner />
			<ImageLoop />

			<RecentWork />
			<BehindThePixels />
			<MyService />
			<MyRecentWork />
			<Achievements />
			<Blogs />
			<Footer />
		</div>
	);
};

export default Home;
