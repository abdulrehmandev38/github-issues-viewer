import { useParams } from "react-router-dom";
import Paper from "../components/Paper";

const Issue = () => {
  const { repo, issue } = useParams();
  return <Paper></Paper>;
};
export default Issue;
