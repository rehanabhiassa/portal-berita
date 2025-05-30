const Menu = (props) => {
  return (
    <>
      <ul className="absolute right-1 top-16 bg-slate-100 border-2 border-slate-300 w-36 p-4 rounded-lg shadow-sm flex flex-col gap-2">
        <li>
          <a href="/home" className="text-base font-medium text-slate-800">
            Home
          </a>
        </li>
        <li>
          <a href="/profile" className="text-base font-medium text-slate-800">
            Profile
          </a>
        </li>
      </ul>
    </>
  );
};

export default Menu;
