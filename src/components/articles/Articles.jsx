// Apollo
import { useQuery } from "@apollo/client";

// react-router-dom
import { Link } from "react-router-dom";

// sanitize
import sanitize from "sanitize-html";

// components
import Loader from "../shared/loader/Loader.jsx";
import Error from "../shared/error/Error.jsx";
import Title from "../shared/title/Title.jsx";
import Button from "../shared/button/Button.jsx";
import Tags from "./tags/Tags.jsx";

// iconsax
import { ArrowLeft, Eye } from "iconsax-react";

// utils
import { e2p } from "../../utils/replaceNumber.js";
import { getJalaliDate } from "../../utils/dateFormater.js";

// queries
import { GET_ARTICLES_INFO } from "../../graphql/queries.js";

// styles
import styles from "./Articles.module.css";

function Articles() {
  const { loading, data, error } = useQuery(GET_ARTICLES_INFO);

  return (
    <div className="max-w-7xl mx-auto mt-16 px-6">
      <Title text="مقالات" />

      {loading ? (
        <Loader />
      ) : error ? (
        <Error />
      ) : (
        data && (
          <div className="flex flex-col gap-6 mt-8 md:items-center lg:flex-row lg:gap-10">
            {/* start right section */}
            <div className="bg-secondary-50 w-auto h-[330px] p-4 rounded-2xl shadow-[0_5.03px_9.42px_0_#40d3a926] md:w-[608px] md:h-[494px] md:rounded-[32px] md:shadow-lg md:shadow-[#40d3a926] lg:p-6">
              <div className="flex justify-center">
                <img
                  src={data.articles[0].cover1.url}
                  alt="cover 1"
                  className={`rounded-2xl max-md:w-[350px] max-md:h-32 max-md:rounded-lg ${styles.cover1}`}
                />
              </div>

              <div className="flex items-center justify-between text-xs mt-4 md:text-sm md:mt-6">
                <p className="text-primary-500">
                  {getJalaliDate(data.articles[0].createDate)}
                </p>

                <p className="flex items-center">
                  <Eye
                    size="18"
                    color="#40d3a9"
                    className="w-[18px] h-[18px] ml-1 max-md:w-[11.31px] max-md:h-[11.31px]"
                  />
                  {e2p(data.articles[0].seen)}
                </p>
              </div>

              <h4 className="text-text-text5 text-base font-bold mt-2 md:text-lg md:mt-6">
                {data.articles[0].title}
              </h4>

              <p
                dangerouslySetInnerHTML={{
                  __html: sanitize(data.articles[0].textContent.html),
                }}
                className="h-[60px] text-xs overflow-hidden mt-[6px] md:h-20 md:mt-4"
              ></p>

              <div className="flex items-center justify-between mt-3 text-xs md:mt-6">
                <ul className="flex">
                  {data.articles[0].tag.map((item, index) => (
                    <Tags item={item} key={index} />
                  ))}
                </ul>

                <Link to="/" className="text-secondary-700 flex items-center">
                  مشاهده بیشتر
                  <ArrowLeft size="18" className="mr-1" />
                </Link>
              </div>
            </div>
            {/* end right section */}

            {/* start left section */}
            <div>
              {/* start left top section */}
              <div className="bg-secondary-50 flex flex-col items-center rounded-2xl p-4 shadow-[0_5.03px_9.42px_0_#40d3a926] md:flex-row md:rounded-[32px] md:py-4 md:px-6 md:shadow-lg md:shadow-[#40d3a926]">
                <img
                  src={data.articles[1].cover1.url}
                  alt="cover 2"
                  className="max-md:hidden"
                />
                <img
                  src={data.articles[1].cover2.url}
                  alt="cover 2"
                  className={`md:hidden ${styles.cover2M}`}
                />

                <div className="w-full md:mr-6">
                  <div className="flex flex-row-reverse items-center justify-between text-xs mt-4 md:flex-row md:text-sm md:mt-0">
                    <p className="flex items-center">
                      <Eye
                        size="18"
                        color="#40d3a9"
                        className="w-[18px] h-[18px] ml-1 max-md:w-[11.31px] max-md:h-[11.31px]"
                      />
                      {e2p(data.articles[1].seen)}
                    </p>

                    <div className="text-primary-500">
                      {getJalaliDate(data.articles[1].createDate)}
                    </div>
                  </div>

                  <h4 className="text-text-text5 font-bold mt-4 md:text-sm">
                    {data.articles[1].title}
                  </h4>

                  <p
                    className="text-text-text5 h-20 text-xs overflow-hidden mt-4"
                    dangerouslySetInnerHTML={{
                      __html: sanitize(data.articles[1].textContent.html),
                    }}
                  ></p>

                  <div className="flex items-center justify-between text-xs mt-4">
                    <ul className="flex">
                      {data.articles[1].tag.map((item, index) => (
                        <Tags item={item} key={index} />
                      ))}
                    </ul>

                    <Link
                      to="/"
                      className="flex items-center text-secondary-700"
                    >
                      مشاهده بیشتر
                      <ArrowLeft size="18" className="mr-1" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* end left top section */}

              {/* start left bottom section */}
              <div className="bg-secondary-50 flex flex-col items-center rounded-2xl mt-6 p-4 shadow-[0_5.03px_9.42px_0_#40d3a926] md:flex-row md:rounded-[32px] md:py-4 md:px-6 md:shadow-lg md:shadow-[#40d3a926]">
                <img
                  src={data.articles[2].cover1.url}
                  alt="cover 3"
                  className={`max-md:hidden`}
                />
                <img
                  src={data.articles[2].cover2.url}
                  alt="cover 3"
                  className={`md:hidden ${styles.cover3M}`}
                />

                <div className="w-full md:mr-6">
                  <div className="flex flex-row-reverse items-center justify-between text-xs mt-4 md:flex-row md:text-sm md:mt-0">
                    <p className="flex items-center">
                      <Eye
                        size="18"
                        color="#40d3a9"
                        className="w-[18px] h-[18px] ml-1 max-md:w-[11.31px] max-md:h-[11.31px]"
                      />
                      {e2p(data.articles[2].seen)}
                    </p>

                    <p className="text-primary-500">
                      {getJalaliDate(data.articles[2].createDate)}
                    </p>
                  </div>

                  <h4 className="text-text-text5 font-bold mt-2 md:text-sm md:mt-4">
                    {data.articles[2].title}
                  </h4>

                  <p
                    className="text-text-text5 h-20 text-xs overflow-hidden mt-4"
                    dangerouslySetInnerHTML={{
                      __html: sanitize(data.articles[2].textContent.html),
                    }}
                  ></p>

                  <div className="flex items-center justify-between text-xs mt-3 md:mt-4">
                    <ul className="flex">
                      {data.articles[2].tag.map((item, index) => (
                        <Tags item={item} key={index} />
                      ))}
                    </ul>

                    <Link
                      to="/"
                      className="flex items-center text-secondary-700"
                    >
                      مشاهده بیشتر
                      <ArrowLeft size="18" className="mr-1" />
                    </Link>
                  </div>
                </div>
              </div>
              {/* end left bottom section */}
            </div>
            {/* end left section */}
          </div>
        )
      )}

      <div className="text-center mt-4 md:mt-8">
        <Button text="مشاهده همه" link="articles" />
      </div>
    </div>
  );
}

export default Articles;
