import { Star } from "./Icons";

const RepoDetails = ({ name, description, stars }) => {
  return (
    <div className="bg-slate-700 w-full px-36 py-6">
      <div>
        <div>
          <p className="group-hover:underline text-4xl text-blue-600 cursor-pointer text-[20px] font-bold">
            {name}
          </p>
          <p className="text-gray-400 text-lg">{description}</p>
        </div>
        <div className="flex items-center mt-4">
          <p className="text-white font-bold text-[20px] mr-2">{stars}</p>
          <Star />
        </div>
      </div>
    </div>
  );
};
export default RepoDetails;
