import linkButton from "../assets/Link-button.png";
const PortfolioCard = (props) => {
	return (
		<div className="p-6.5 bg-[#050709] rounded-[30px] overflow-hidden">
			<div className="overflow-hidden rounded-4xl">
				<img src={props.image} alt="image" />
			</div>
			<div className="flex items-center gap-3 pt-8.25">
				<div>
					<h3 className="text-white text-[20px] font-bold">{props.title}</h3>
					<p className="text-white/60 pt-3">{props.description}</p>
				</div>
				<a href="#">
					<img src={linkButton} alt="icon link" />
				</a>
			</div>
		</div>
	);
};

export default PortfolioCard;
