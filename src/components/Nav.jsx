import { Bug, Search } from "./Icons";

const Nav = () => {
  return (
    <div className="w-full bg-slate-700 h-[8vh] flex items-center justify-between px-4">
      <div className="flex items-center">
        <Bug />
        <h1 className="font-bold text-white">Github Issues Viewer</h1>
      </div>
      <div className="flex items-center bg-slate-600 h-8 border border-slate-500 rounded-sm">
        <input
          type="text"
          placeholder="username/repositorie"
          className="text-white font-bold px-2 outline-none bg-transparent"
        />
        <Search />
      </div>
    </div>
  );
};
export default Nav;
