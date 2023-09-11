import { useParams } from "react-router-dom";
import { Star } from "./Icons";
import { useQuery } from "@apollo/client";
import { GET_REPO_DETAILS } from "../api/queries";

const RepoDetailsLoading = () => {
  return (
    <div className="bg-slate-700 w-full px-36 py-6">
      <div>
        <div className="flex flex-col gap-4">
          <div className="bg-gray-300 animate-pulse w-48 rounded-md h-8"></div>
          <div className="bg-gray-300 animate-pulse w-92 rounded-md h-8 "></div>
          <div className="bg-gray-300 animate-pulse w-80 rounded-md h-8"></div>
        </div>
        <div className="flex items-center mt-4">
          <div className="bg-gray-300 animate-pulse w-24 h-8 rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

const RepoDetails = () => {
  const { repo } = useParams();
  const [owner, name] = repo.split("-");
  const { loading, data, error } = useQuery(GET_REPO_DETAILS, {
    variables: {
      owner,
      name,
    },
  });
  if (loading) return <RepoDetailsLoading />;
  return (
    <div className="bg-slate-700 w-full px-36 py-6">
      <div>
        <div className="flex flex-col gap-4">
          <p className="group-hover:underline text-4xl text-blue-600 text-[20px] font-bold">
            {owner + "/" + name}
          </p>
          <p className="text-gray-100 text-lg">
            {data?.repository?.description}
          </p>
        </div>
        <div className="flex items-center mt-4">
          <Star />
          <p className="text-white font-bold text-[15px] ml-1">
            {data?.repository?.stargazerCount}
          </p>
        </div>
      </div>
    </div>
  );
};
export default RepoDetails;
