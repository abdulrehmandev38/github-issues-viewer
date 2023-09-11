import IssuesList from "../components/IssuesList";
import RepoDetails from "../components/RepoDetails";
import { useParams } from "react-router-dom";
import Paper from "../components/Paper";
import { useQuery } from "@apollo/client";
import { GET_ISSUES } from "../api/queries";
import { Error } from "../components/Icons";

const Repo = () => {
  const { repo } = useParams();
  const { loading, error, data } = useQuery(GET_ISSUES, {
    variables: { owner: repo.split("-")[0], name: repo.split("-")[1] },
  });
  return (
    <Paper>
      <RepoDetails
        name="next/next"
        stars={123}
        description="lorem ipsum dollar nothing to do within"
      />
      <div className="flex items-start justify-start gap-4 w-full px-24 mb-2">
        <div className="flex items-center justify-center hover:bg-slate-800 cursor-pointer py-3 px-2 border-b-2 border-green-500">
          <Error className="w-7 h-7 text-green-500" />
          <p className="ml-2 font-bold text-white">Open</p>
        </div>
        <div className="flex items-center justify-center hover:bg-slate-800 cursor-pointer py-3 px-2 border-b-2 border-red-500">
          <Error className="w-7 h-7 text-red-500" />
          <p className="ml-2 font-bold text-white">Closed</p>
        </div>
      </div>
      <IssuesList loading={loading} issues={data?.repository?.issues?.nodes} />
    </Paper>
  );
};
export default Repo;
