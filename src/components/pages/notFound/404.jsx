// animate.css
import "animate.css";

// images
import notFoundError from "../../../assets/images/not-found-error.png";

function NotFoundPage() {
  return (
    <div
      style={{
        width: "100%",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#1a5444",
        }}
        className="animate__animated animate__pulse animate__infinite"
      >
        <h1>۴۰۴</h1>
        <h3>این صفحه در حال حاضر وجود ندارد</h3>
      </div>
      <img
        src={notFoundError}
        alt="404"
        style={{ width: "350px" }}
        className="animate__animated animate__bounceInUp"
      />
    </div>
  );
}

export default NotFoundPage;
