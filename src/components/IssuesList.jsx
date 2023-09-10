import { Error } from "./Icons";
import IssueItem from "./IssueItem";

const IssuesList = () => {
  return (
    <div className="">
      <div className="flex items-start justify-start gap-4">
        <div className="flex items-center justify-center hover:bg-slate-800 cursor-pointer py-3 px-2 border-b-2 border-green-500">
          <Error className="w-7 h-7 text-green-500" />
          <p className="ml-2 font-bold text-white">Open</p>
        </div>
        <div className="flex items-center justify-center hover:bg-slate-800 cursor-pointer py-3 px-2 border-b-2 border-red-500">
          <Error className="w-7 h-7 text-red-500" />
          <p className="ml-2 font-bold text-white">Closed</p>
        </div>
      </div>
      <div className="flex h-[65vh] flex-col items-center gap-4 px-8 hover:px-4 pt-8 overflow-hidden hover:overflow-y-scroll">
        <IssueItem
          title={"Lorem ipsum dolor sit amet consectetur,"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
          comments={123}
        />
        <IssueItem
          title={"Lorem ipsum dolor sit amet consectetur,"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
          comments={123}
        />
        <IssueItem
          title={"Lorem ipsum dolor sit amet consectetur,"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
          comments={123}
        />{" "}
        <IssueItem
          title={"Lorem ipsum dolor sit amet consectetur,"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
          comments={123}
        />{" "}
        <IssueItem
          title={"Lorem ipsum dolor sit amet consectetur,"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
          comments={123}
        />{" "}
        <IssueItem
          title={"Lorem ipsum dolor sit amet consectetur,"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
          comments={123}
        />{" "}
        <IssueItem
          title={"Lorem ipsum dolor sit amet consectetur,"}
          description={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit."
          }
          comments={123}
        />
      </div>
    </div>
  );
};
export default IssuesList;
