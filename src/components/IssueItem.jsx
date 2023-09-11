import { Link } from "react-router-dom";
import { Comment, Error } from "./Icons";

const IssueItem = ({ state, title, description, comments, number }) => {
  return (
    <Link
      to={`/repo/${5}/issue/${number}`}
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
