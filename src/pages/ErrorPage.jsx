import { useSearchParams } from "react-router-dom";
import { Error } from "../components/Icons";
import Paper from "../components/Paper";

const ErrorPage = () => {
  const { error } = useSearchParams();
  return (
    <Paper>
      <div className="w-[600px] max-sm:w-[400px] mt-16 flex flex-col items-center justify-center h-[400px] border rounded-md">
        <Error className="w-12 h-12 text-red-600" />
        <p className="text-gray-300 font-bold text-lg">{error}</p>
      </div>
    </Paper>
  );
};
export default ErrorPage;
