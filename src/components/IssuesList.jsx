import { Error } from "./Icons";
import IssueItem, { IssueItemLoading } from "./IssueItem";

const IssuesList = ({ loading, issues }) => {
  return (
    <div className="flex h-[65vh] flex-col items-center gap-4 px-8 hover:px-4 pt-8 overflow-hidden hover:overflow-y-scroll">
      {loading
        ? Array(8)
            .fill(0)
            .map((i) => {
              return <IssueItemLoading />;
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
  );
};
export default IssuesList;
