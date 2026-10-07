const BlogCard = ({
	image,
	imageAlt = "",
	badge,
	category,
	date,
	title,
	href,
	className = "",
	...props
}) => {
	const Wrapper = href ? "a" : "article";

	return (
		<Wrapper
			{...(href ? { href } : {})}
			className={`group block  rounded-3xl bg-[#0A0A0B] p-4 ring-1 ring-white/5 transition-colors hover:ring-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${className}`}
			{...props}
		>
			<div className="relative overflow-hidden rounded-2xl">
				<img
					src={image}
					alt={imageAlt}
					loading="lazy"
					className="aspect-[11/10] w-full object-cover"
				/>

				{badge && (
					<span className="btn absolute left-3 top-3 rounded-full bg-violet-600 px-3.5 py-1.5 text-sm font-medium text-white shadow-lg shadow-violet-900/40">
						{badge}
					</span>
				)}
			</div>

			<div className="px-2 pb-2 pt-5">
				{(category || date) && (
					<div className="flex items-center gap-2.5 text-sm text-neutral-400">
						{category && <span>{category}</span>}
						{category && date && (
							<span aria-hidden="true" className="text-neutral-600">
								&bull;
							</span>
						)}
						{date && <span>{date}</span>}
					</div>
				)}

				<h3 className="mt-3 text-2xl font-bold uppercase leading-tight tracking-tight text-white">
					{title}
				</h3>
			</div>
		</Wrapper>
	);
}

export default BlogCard;
