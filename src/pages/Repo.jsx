import IssuesList from "../components/IssuesList";
import RepoDetails from "../components/RepoDetails";
import { useParams } from "react-router-dom";
import Paper from "../components/Paper";
import { useQuery } from "@apollo/client";
import { GET_ISSUES } from "../api/queries";

const Repo = () => {
  const { repo } = useParams();
  const { laoding, error, data } = useQuery(GET_ISSUES, {
    variables: { owner: repo.split("-")[0], name: repo.split("-")[1] },
  });
  return (
    <Paper>
      <RepoDetails
        name="next/next"
        stars={123}
        description="lorem ipsum dollar nothing to do within"
      />
      <IssuesList laoding={laoding} issues={data?.repository?.issues?.nodes} />
    </Paper>
  );
};
export default Repo;
