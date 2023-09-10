import { useQuery } from "@apollo/client";
import Paper from "../components/Paper";
import ReposList from "../components/ReposList";
import { SEARCH_REPOSITORIES } from "../api/queries";

const Home = () => {
  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
    variables: { repo: "react" },
  });
  console.log(error);
  console.log(data);
  console.log("env=>" + process.env.G_TOKEN);
  return (
    <Paper>
      <ReposList loading={loading} repositories={data?.search?.edges} />
    </Paper>
  );
};
export default Home;
