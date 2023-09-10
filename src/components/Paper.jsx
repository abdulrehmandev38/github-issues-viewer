const Paper = ({ children }) => {
  return (
    <div className="bg-slate-600 w-full overflow-hidden h-[92vh] flex flex-col justify-start items-center">
      {children}
    </div>
  );
};
export default Paper;
