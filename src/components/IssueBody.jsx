export const IssueBodyLoading = () => {
  return (
    <div className="bg-slate-700 w-[1000px] md:w-[800px] sm:w-[500px] max-sm:w-[300px]  p-4 rounded-md mt-4">
      <div className="flex items-center">
        <div
          className="w-14 h-14 rounded-md bg-gray-300 animate-pulse"
          alt=""
        ></div>
        <div className="bg-gray-300 animate-pulse rounded-full w-[1000px] md:w-[800px] sm:w-[400px] max-sm:w-[300px] h-6 mx-6"></div>
      </div>
      <div className="flex flex-col gap-5 my-8">
        <div className="bg-gray-300 animate-pulse rounded-full w-[500px] md:w-[400px] sm:w-[200px] max-sm:w-[300px] h-5"></div>
        <div className="bg-gray-300 animate-pulse rounded-full w-[1000px] md:w-[800px] sm:w-[400px] max-sm:w-[300px] h-5"></div>
        <div className="bg-gray-300 animate-pulse rounded-full w-[600px] md:w-[500px] sm:w-[300px] max-sm:w-[300px] h-5"></div>
        <div className="bg-gray-300 animate-pulse rounded-full w-[800px] md:w-[600px] sm:w-[250px] max-sm:w-[300px] h-5"></div>
      </div>
    </div>
  );
};

const IssueBody = ({ issue }) => {
  return (
    <div className="bg-slate-700 p-4 rounded-md mt-4 w-[1000px] md:w-[800px] sm:w-[500px] max-sm:w-[300px]">
      <div className="flex items-center">
        <img
          src={issue?.author.avatarUrl}
          className="w-14 h-14 rounded-md"
          alt=""
        />
        <p className="text-white font-bold text-xl mx-6">
          {issue?.author.login}
        </p>
      </div>
      <div className="text-white mt-4">{issue?.body}</div>
    </div>
  );
};
export default IssueBody;

export const Comment = ({ comment, author, image }) => {
  return (
    <div className="bg-slate-700 p-4 rounded-md mt-4 w-[1000px] md:w-[800px] sm:w-[500px] max-sm:w-[300px]">
      <div className="flex items-center">
        <img src={image} className="w-12 h-12 rounded-full" alt="" />
        <p className="text-white font-bold text-xl mx-4">{author}</p>
      </div>
      <div className="text-white mt-4">{comment}</div>
    </div>
  );
};
