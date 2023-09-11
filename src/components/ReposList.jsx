import RepoItem, { RepoItemLoading } from "./RepoItem";

const ReposList = ({ repositories, loading }) => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-white font-bold text-2xl my-8">
        Find a Repositorie !
      </h1>
      {loading
        ? Array(8)
            .fill(0)
            .map((i) => {
              return <RepoItemLoading />;
            })
        : repositories?.map((repo) => {
            return (
              <RepoItem
                id={repo.node.id}
                name={`${repo.node.owner.login}/${repo.node.name}`}
                stars={repo.node.stargazerCount}
                description={repo.node.description.slice(0, 50) + "..."}
              />
            );
          })}
    </div>
  );
};
export default ReposList;
