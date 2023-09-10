import { Link } from "react-router-dom";
import { Comment, Error } from "./Icons";

const IssueItem = ({ title, description, comments }) => {
  return (
    <Link
      to={"/repo/5/issue/5"}
      className="px-2 py-4 border-2 cursor-pointer border-slate-400 hover:bg-slate-800 flex items-center rounded-md w-[700px] justify-between"
    >
      <div className="flex gap-4 items-center">
        <Error className="w-10 h-10 text-red-500" />
        <div>
          <p className="text-xl text-white font-bold">{title}</p>
          <p className="text-gray-300 mt-1">{description} </p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="mr-2 text-gray-300 font-bold">{comments}</p>
        <Comment />
      </div>
    </Link>
  );
};
export default IssueItem;
