import { useParams } from "react-router-dom";
import { Error } from "./Icons";

const IssueDetails = ({ title, state }) => {
  const { repo } = useParams();
  return (
    <div className="bg-slate-700 w-full px-36 py-6">
      <div>
        <div className="flex flex-col gap-4">
          <p className="group-hover:underline text-4xl text-blue-600 text-[20px] font-bold">
            {repo.replace("-", "/")}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <div
            className={`flex items-center mt-4 w-[110px] rounded-full px-2 py-[4px] ${
              state === "CLOSED" ? "bg-red-600" : "bg-green-600"
            }`}
          >
            <Error className={"w-7 h-7 text-white"} />
            <p className="text-white font-bold text-[15px] ml-1">{state}</p>
          </div>
          <p className="text-gray-200 text-lg mt-4">{title}</p>
        </div>
      </div>
    </div>
  );
};
export default IssueDetails;
