import { useParams } from "react-router-dom";
import Paper from "../components/Paper";
import IssueDetails from "../components/IssueDetails";
import IssueBody, { Comment, IssueBodyLoading } from "../components/IssueBody";
import { useQuery } from "@apollo/client";
import { GET_ISSUE_DETAILS } from "../api/queries";
import { RepoDetailsLoading } from "../components/RepoDetails";

const Issue = () => {
  const { repo, issue } = useParams();
  const [owner, name] = repo.split("-");
  const { loading, error, data } = useQuery(GET_ISSUE_DETAILS, {
    variables: {
      owner,
      name,
      number: parseInt(issue),
    },
  });
  if (loading)
    return (
      <Paper>
        <RepoDetailsLoading />
        <IssueBodyLoading />
        <div className="overflow-y-auto px-4 my-8">
          {Array(8)
            .fill(0)
            .map(() => {
              return <IssueBodyLoading />;
            })}
        </div>
      </Paper>
    );
  const issueData = data?.repository.issue;
  console.log(issueData?.comments);
  return (
    <Paper>
      <IssueDetails
        loading={loading}
        title={issueData?.title}
        state={issueData?.state}
      />
      <IssueBody issue={issueData} />
      <div className="overflow-y-auto px-4 my-8">
        {issueData?.comments.nodes?.map((comment) => {
          return (
            <Comment
              comment={comment.body}
              image={comment.author.avatarUrl}
              author={comment.author.login}
            />
          );
        })}
      </div>
    </Paper>
  );
};
export default Issue;
