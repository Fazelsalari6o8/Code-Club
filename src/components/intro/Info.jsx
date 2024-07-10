function Info() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-12 w-[302px] bg-[#ffffff19] backdrop-blur-[30px] rounded-2xl py-8 px-6 mt-3 sm:w-36 sm:p-8 sm:mt-0 md:grid-cols-10 lg:grid-cols-8">
        <div className="h-[54px] w-[79px] col-start-1 col-end-6 mb-8 text-center sm:col-start-1 sm:col-end-13">
          <p className="text-primary-200">۲۲۰</p>
          <p className="text-primary-400">مدرس</p>
        </div>

        <div className="h-[54px] w-[79px] col-start-8 col-end-13 mb-8 text-center sm:col-start-1 sm:col-end-13">
          <p className="text-primary-200">۱۲,۵۲۴</p>
          <p className="text-primary-400">دانشجو</p>
        </div>

        <div className="h-[54px] w-[79px] col-start-1 col-end-6 text-center sm:mb-8 sm:col-start-1 sm:col-end-13">
          <p className="text-primary-200">۳۰,۰۰۰</p>
          <p className="text-primary-400 text-nowrap">ساعت آموزش</p>
        </div>

        <div className="h-[54px] w-[79px] col-start-8 col-end-13 text-center sm:col-start-1 sm:col-end-13">
          <p className="text-primary-200">۳۶۰,۰۰۰</p>
          <p className="text-primary-400 text-nowrap">دوره آموزشی</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
