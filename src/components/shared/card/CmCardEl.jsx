// utils
import { e2p } from "../../../utils/replaceNumber.js";
import { getJalaliDate2 } from "../../../utils/dateFormater.js";

// iconsax
import { Add, Minus } from "iconsax-react";

// images
import star from "../../../assets/images/star.svg";

function CmCardEl({ comment }) {
  return (
    <div className="shadow-[0_12px_20px_0_#40d3a926] w-[364px] h-[340px] rounded-2xl p-4">
      {/* start top section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={comment.avatar.url}
            alt="avatar"
            width="60px"
            height="60px"
          />

          <div className="mr-2">
            <p className="text-primary-800">{comment.name}</p>

            <p className="text-text-text2 mt-1 text-xs">
              دوره جامع{" "}
              {comment.course?.title ? comment.course.title : "پایتون"}
            </p>
          </div>
        </div>

        <div>
          <p className="text-text-text2 text-xs">
            {e2p(getJalaliDate2(comment.createDate))}
          </p>

          <p className="flex items-center mt-[6px] text-xs text-text-text5">
            <img src={star} alt="star" style={{ marginLeft: "4px" }} />
            {e2p(comment.rating + " از 5")}
          </p>
        </div>
      </div>
      {/* end top section */}

      {/* start bottom section */}
      <div className="mt-4">
        <p className="h-20 overflow-hidden text-text-text5 text-sm">
          {comment.text}
        </p>

        <div className="mt-4">
          <div>
            {comment.positivePoint.map((item, index) => (
              <p
                key={index}
                className="flex items-center mb-[6px] text-text-text5 text-xs"
              >
                <Add size="18" color="#00c073" className="ml-1" /> {item}
              </p>
            ))}
          </div>

          <div className="mt-3">
            {comment.negativePoint.length > 0 ? (
              comment.negativePoint.map((item, index) => (
                <p
                  key={index}
                  className="flex items-center mb-[6px] text-text-text5 text-xs"
                >
                  <Minus size="18" color="#e23c3c" className="ml-1" />
                  {item}
                </p>
              ))
            ) : (
              <p className="flex items-center text-text-text5 text-xs">
                <Minus size="18" color="#e23c3c" className="ml-1" />
                ندارد
              </p>
            )}
          </div>
        </div>
      </div>
      {/* end bottom section */}
    </div>
  );
}

export default CmCardEl;
