// components
import Menu from "./Menu.jsx";
import RegisterBoxItems from "./RegisterBoxItems.jsx";

function DrawerMenu({ open, setOpen }) {
  return (
    <div
      className={`flex-1 fixed top-0 right-0 h-dvh w-dvw md:hidden transition-transform duration-[200ms] ${
        open ? "translate-x-0" : "translate-x-[100%]"
      }`}
      onClick={() => setOpen(false)}
    >
      <div
        className={`bg-white w-[215px] h-full flex flex-col items-center py-[29px] transition-all duration-[200ms] ${
          open
            ? "translate-x-0 shadow-[-1px_0_1000px_900px_#00000027]"
            : "translate-x-[100%] shadow-[0_0_0_0_#00000007]"
        }`}
      >
        <div className="flex items-center">
          <RegisterBoxItems />
        </div>

        <nav className="flex mt-[29px]">
          <Menu />
        </nav>
      </div>
    </div>
  );
}

export default DrawerMenu;
