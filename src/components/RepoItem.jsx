import { Link } from "react-router-dom";
import { Star } from "./Icons";
import { useStateContext } from "../context";

export const RepoItemLoading = () => {
  return (
    <div className="flex group items-center justify-between w-[600px] animate-pulse bg-slate-700 h-[80px] max-sm:w-[400px] md:w-[800px] rounded-md px-[15px] py-[8px]">
      <div>
        <div className="bg-gray-500 animate-pulse w-32 h-4 rounded-md"></div>
        <div className="bg-gray-500 animate-pulse w-80 h-4 mt-2 rounded-md"></div>
      </div>
      <div className="flex items-center">
        <div className="bg-gray-500 animate-pulse w-16 h-8 mt-2 rounded-md"></div>
      </div>
    </div>
  );
};

const RepoItem = ({ repo }) => {
  const { setRepo } = useStateContext();
  const name = `${repo.owner.login}/${repo.name}`;
  return (
    <Link
      onClick={() => setRepo(repo)}
      to={"/repo/" + name.replace("/", "-")}
      className="flex group items-center border-[1px] border-gray-500  hover:border-slate-700 justify-between w-[600px] max-sm:w-[400px] md:w-[800px] px-[15px] py-[8px] hover:bg-slate-700 rounded-md hover:shadow-lg cursor-pointer"
    >
      <div>
        <p className="group-hover:underline text-blue-400 cursor-pointer text-[20px] font-bold">
          {name}
        </p>
        <p className="text-gray-100">
          {repo.description?.length > 50
            ? repo.description.slice(0, 50) + "..."
            : repo.description}
        </p>
      </div>
      <div className="flex items-center">
        <Star />
        <p className="text-white font-bold text-[15px] ml-2">
          {repo.stargazerCount}
        </p>
      </div>
    </Link>
  );
};
export default RepoItem;
