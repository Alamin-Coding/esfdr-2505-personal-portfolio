import cardImage1 from "../assets/skills-1.png";
const SkillCard = ({
  image = cardImage1,
  title = "Adobe After Effect",
  description = "Adobe After Effects is a powerful software application used motion graphics.",
  progress = 92,
}) => {
  return (
    <div className="w-[305px] rounded-[24px] bg-[#050709] p-7 text-white">
      {/* Top Section */}
      <div className="flex items-center gap-5">
        {/* Icon */}
        <div className="flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-full bg-[#160624] shadow-[0_0_0_5px_rgba(192,132,252,0.08)]">
          <img src={image} alt="" />
        </div>

        {/* Title */}
        <h3 className="text-[21px] font-normal leading-[1.15]">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="mt-6 text-[17px] leading-[1.4] text-gray-400">
        {description}
      </p>

      {/* Progress Percentage */}
      <div className="mt-9">
        <div className="mb-2 flex justify-end">
          <span className="text-[16px] font-medium text-white">
            {progress}%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="h-[4px] w-full rounded-full bg-gray-700">
          <div
            className="h-full rounded-full bg-white transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;