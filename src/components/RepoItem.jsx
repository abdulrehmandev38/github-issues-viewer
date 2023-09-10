import { Link } from "react-router-dom";
import { Star } from "./Icons";

const RepoItem = ({ id, name, stars, description }) => {
  return (
    <Link
      to={"/repo/5"}
      className="flex group items-center border-[1px] border-gray-300  hover:border-slate-700 justify-between w-[600px] px-[15px] py-[8px] hover:bg-slate-700 rounded-md hover:shadow-lg cursor-pointer"
    >
      <div>
        <p className="group-hover:underline text-blue-600 cursor-pointer text-[20px] font-bold">
          {name}
        </p>
        <p className="text-gray-400">{description}</p>
      </div>
      <div className="flex items-center">
        <p className="text-white font-bold text-[20px] mr-2">{stars}</p>
        <Star />
      </div>
    </Link>
  );
};
export default RepoItem;
