// images
import vector from "../../../../assets/images/aboutUsImages/Vector.svg";

function WhyCodeClubCard({ title, text, id }) {
  return (
    <div
      className={`flex items-center w-[269px] h-[239.11px] relative mb-6 md:mb-0 ${
        id % 2 !== 0 && "md:mt-11"
      }`}
    >
      <img src={vector} alt="bgpic" className="absolute top-0 left-0 z-[-1]" />
      <div>
        <p className="text-lg font-bold text-text-text0 text-center">{title}</p>

        <p className="text-sm text-primary-800 text-center mt-2">{text}</p>
      </div>
    </div>
  );
}

export default WhyCodeClubCard;
