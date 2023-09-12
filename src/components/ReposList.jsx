import { useQuery } from "@apollo/client";
import RepoItem, { RepoItemLoading } from "./RepoItem";
import { SEARCH_REPOSITORIES } from "../api/queries";
import { useState } from "react";
import { Search } from "./Icons";

const ReposList = () => {
  const [search, setSearch] = useState();
  const { loading, error, data } = useQuery(SEARCH_REPOSITORIES, {
    variables: { repo: search },
  });
  const repos = data?.search?.edges;
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex justify-between flex-wrap items-center mx-8">
        <h1 className="text-white font-bold text-2xl my-8 mr-24">
          Find a Repositorie !
        </h1>
        <div className="flex items-center bg-slate-600 h-8 border border-slate-500 rounded-sm">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="username/repositorie"
            className="text-white font-bold px-2 outline-none bg-transparent"
          />
          <Search />
        </div>
      </div>
      {loading ? (
        Array(8)
          .fill(0)
          .map((i) => {
            return <RepoItemLoading />;
          })
      ) : repos?.length > 0 ? (
        repos.map((repo) => {
          return <RepoItem repo={repo.node} />;
        })
      ) : (
        <div className="w-[600px] max-sm:w-[400px] flex items-center justify-center h-[400px] border rounded-md">
          <p className="text-gray-300 font-bold text-lg">
            Couldn't find any repositorie
          </p>
        </div>
      )}
    </div>
  );
};
export default ReposList;
