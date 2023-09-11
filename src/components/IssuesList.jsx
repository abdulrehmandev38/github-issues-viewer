import { Error } from "./Icons";
import IssueItem from "./IssueItem";
import { RepoItemLoading } from "./RepoItem";

const IssuesList = ({ laoding, issues }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-start justify-start gap-4">
        <div className="flex items-center justify-center hover:bg-slate-800 cursor-pointer py-3 px-2 border-b-2 border-green-500">
          <Error className="w-7 h-7 text-green-500" />
          <p className="ml-2 font-bold text-white">Open</p>
        </div>
        <div className="flex items-center justify-center hover:bg-slate-800 cursor-pointer py-3 px-2 border-b-2 border-red-500">
          <Error className="w-7 h-7 text-red-500" />
          <p className="ml-2 font-bold text-white">Closed</p>
        </div>
      </div>
      <div className="flex h-[65vh] flex-col items-center gap-4 px-8 hover:px-4 pt-8 overflow-hidden hover:overflow-y-scroll">
        {laoding
          ? Array(8)
              .fill(0)
              .map((i) => {
                return <RepoItemLoading />;
              })
          : issues?.map((issue) => {
              return (
                <IssueItem
                  state={issue.state}
                  title={
                    issue.title.length < 40
                      ? issue.title
                      : issue.title.slice(0, 40) + "..."
                  }
                  number={issue.number}
                  description={
                    issue.body.length < 70
                      ? issue.body
                      : issue.body.slice(0, 70) + "..."
                  }
                  comments={issue.comments.totalCount}
                />
              );
            })}
      </div>
    </div>
  );
};
export default IssuesList;
