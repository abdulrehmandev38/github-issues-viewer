import RepoItem from "./RepoItem";

const ReposList = ({ repositories, loading }) => {
  if (loading) return <p>WHoop</p>;
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-white font-bold text-2xl my-8">
        Find a Repositorie !
      </h1>
      {repositories?.map((repo) => {
        return (
          <RepoItem
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
