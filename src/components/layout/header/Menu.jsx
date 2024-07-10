// react-router-dom
import { NavLink } from "react-router-dom";

// constant
import { menuItem } from "../../../constants/const.js";

function Menu() {
  return (
    <ul>
      {menuItem.map((item, index) => (
        <li
          key={index}
          className="list-none mb-6 rounded-[50%] relative after:content after:w-0 after:h-[30px] after:inline-block after:bg-primary-500 after:rounded-[50%] after:absolute after:left-1/2 cursor-pointer after:transition-all after:duration-100 hover:after:w-[30px] hover:after:drop-shadow-[-5px 2px 4px bg-primary-500] hover:after:blur-xl"
        >
          <NavLink
            to={item.path}
            className="no-underline text-dark-500 p-[5px]"
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
