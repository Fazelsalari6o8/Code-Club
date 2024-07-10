// react-router-dom
import { Link } from "react-router-dom";

// components
import RegisterBoxItems from "./RegisterBoxItems";

// iconsax
import { HambergerMenu, ShoppingCart } from "iconsax-react";

function RegisterBox({ setOpen }) {
  return (
    <div className="h-12 flex items-center justify-between">
      <p
        className="flex items-center cursor-pointer ml-6 md:hidden"
        onClick={() => setOpen(true)}
      >
        <HambergerMenu size="24" color="#35816c" />
      </p>

      <p className="flex items-center ml-6">
        <Link to="/cart" style={{ display: "flex" }}>
          <ShoppingCart size="24" color="#267f65" />
        </Link>
      </p>

      <div className="hidden md:flex items-center">
        <RegisterBoxItems />
      </div>
    </div>
  );
}

export default RegisterBox;
