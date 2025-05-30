import Menu from "./Menu";

import { useState } from "react";

const Header = (props) => {
  const { title, description } = props;

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header className="sticky top-0 bg-white border-b border-slate-200 flex justify-between items-center p-7">
        <div>
          <h1 className="text-2xl font-bold text-slate-950">{title}</h1>
          <p className="text-base font-normal text-slate-800">{description}</p>
        </div>
        <div className="relative">
          <button onClick={() => handleMenuOpen()}>
            <i className="bi bi-list text-2xl"></i>
          </button>
          {menuOpen && <Menu />}
        </div>
      </header>
    </>
  );
};

export default Header;
