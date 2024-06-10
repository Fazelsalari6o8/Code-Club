// const
import { monthList, monthNumber } from "../constants/const.js";

// return date in this format 👉🏻 year number month name day number
const getJalaliDate = (timeInput) => {
  const date = new Date(timeInput);
  const localeDate = date.toLocaleDateString("fa-IR");
  const splitedDate = localeDate.split("/");

  // year
  const year = splitedDate[0];

  // month name
  const month = splitedDate[1];
  const monthIndex = monthNumber.find((item) => {
    const keys = Object.keys(item);
    if (keys[0] === month) {
      return Object.values(item[month]);
    }
  });
  const monthName = monthList[monthIndex[month] - 1];

  // day
  const day = splitedDate[2];

  return `${day} ${monthName} ${year}`;
};

export { getJalaliDate };
