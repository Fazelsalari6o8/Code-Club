// react-router-dom
import { Link } from "react-router-dom";

// iconsax
import { Profile } from "iconsax-react";

function RegisterBoxItems() {
  return (
    <>
      <p>
        <Link
          to="/login"
          className="no-underline text-primary-500 text-base font-medium transition-all duration-[0.3s] hover:text-primary-800"
        >
          ورود
        </Link>
      </p>

      <p className="bg-primary-500 w-9 h-9 p-[6px] my-[6px] mr-6 rounded-lg cursor-pointer transition-all duration-[0.3s] hover:bg-primary-600">
        <Link to="/dashboard">
          <Profile size="24" color="#ecfbf6" />
        </Link>
      </p>
    </>
  );
}

export default RegisterBoxItems;
