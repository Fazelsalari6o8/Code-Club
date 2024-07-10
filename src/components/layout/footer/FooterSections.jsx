// react-router-dom
import { Link } from "react-router-dom";

function FooterSections({ sectionTitle, items }) {
  return (
    <>
      <h4 className="text-lg font-semibold text-primary-800">{sectionTitle}</h4>

      {items && (
        <ul
          className={`list-none mt-3 ${
            sectionTitle === "شبکه های اجتماعی" &&
            "max-sm:flex max-sm:items-center"
          }`}
        >
          {items.map((item, index) => (
            <li
              key={index + new Date().getTime()}
              className={`mb-2 ${
                sectionTitle === "شبکه های اجتماعی" && "max-sm:ml-2"
              }`}
            >
              <Link
                to={item.link}
                className="text-dark-500 transition-all duration-200 ease-linear before:content before:ml-1 before:inline-block before:w-0 before:h-3 before:bg-primary-500 before:rounded-[50%] before:transition-all before:duration-200 before:ease-linear before:hover:w-3 hover:text-primary-700"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default FooterSections;
