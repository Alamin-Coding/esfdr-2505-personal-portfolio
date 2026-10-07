import React from "react";
import BlogCard from "../Components/BlogCard";
import SectionHeading from "../Components/SectionHeading";
import blog_1 from "../assets/blog-1.png";
import blog_2 from "../assets/blog-2.png";
import blog_3 from "../assets/blog-3.png";

const Blogs = () => {
	return (
		<section className="bg-[#140C1C] pb-30">
			<div className="container">
				<div className="text-center">
					<SectionHeading
						heading={"Read My Recent Blog"}
						subHeading={"Behind the Pixels"}
					/>
				</div>
				<div className="grid grid-cols-3 gap-6">
					<BlogCard title={"The Role of Technology in Modern Log"} image={blog_1} date={"Nov 01, 2025"} href={""} imageAlt="image" category={"business"} badge={"Video"} />
					<BlogCard title={"The Role of Technology in Modern Log"} image={blog_2} date={"Dec 30, 2025"} href={""} imageAlt="image" category={"Development"} badge={"Editing"} />
					<BlogCard title={"The Role of Technology in Modern Log"} image={blog_3} date={"Jan 20, 2026"} href={""} imageAlt="image" category={"blog"} badge={"3D"} />
					
				</div>
			</div>
		</section>
	);
};

export default Blogs;
