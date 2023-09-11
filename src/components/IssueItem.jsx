import { Link, useParams } from "react-router-dom";
import { Comment, Error } from "./Icons";

export const IssueItemLoading = () => {
  return (
    <div className="px-2 py-4 border-2 cursor-pointer border-slate-400 flex items-center rounded-md w-[700px] justify-between">
      <div className="flex gap-4 items-center">
        <div className="w-9 h-9 rounded-full bg-gray-300 animate-pulse"></div>
        <div>
          <div className="bg-gray-300 animate-pulse rounded-md w-36 h-6 mb-3"></div>
          <div className="bg-gray-300 animate-pulse rounded-md w-80 h-4"> </div>
        </div>
      </div>
      <div className="flex items-center justify-center mx-2">
        <div className="bg-gray-300 animate-pulse rounded-md w-16 h-6"></div>
      </div>
    </div>
  );
};

const IssueItem = ({ state, title, description, comments, number }) => {
  const { repo } = useParams();
  return (
    <Link
      to={`/repo/${repo}/issue/${number}`}
      className="px-2 py-4 border-2 cursor-pointer border-slate-400 hover:bg-slate-800 flex items-center rounded-md w-[700px] justify-between"
    >
      <div className="flex gap-4 items-center">
        <Error
          className={`w-9 h-9 ${
            state === "CLOSED" ? "text-red-500" : "text-green-500"
          }`}
        />
        <div>
          <div className="flex items-center">
            <p className="text-xl text-white font-bold">{title}</p>
            <p className="text-xl text-gray-400 font-bold ml-2">#{number}</p>
          </div>
          <p className="text-gray-300 text-sm mt-1">{description} </p>
        </div>
      </div>
      <div className="flex items-center justify-center mx-2">
        <Comment />
        <p className="ml-2 text-gray-300 font-bold">{comments}</p>
      </div>
    </Link>
  );
};
export default IssueItem;
