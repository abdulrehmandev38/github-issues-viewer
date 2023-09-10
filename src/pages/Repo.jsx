import IssuesList from "../components/IssuesList";
import RepoDetails from "../components/RepoDetails";
import { useParams } from "react-router-dom";
import Paper from "../components/Paper";

const Repo = () => {
  const { repo } = useParams();
  return (
    <Paper>
      <RepoDetails
        name="next/next"
        stars={123}
        description="lorem ipsum dollar nothing to do within"
      />
      <IssuesList />
    </Paper>
  );
};
export default Repo;
