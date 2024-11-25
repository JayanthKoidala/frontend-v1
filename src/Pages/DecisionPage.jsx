import { Outlet } from "react-router-dom";

const DecisionPage = () => {
  return (
    <>
      <div
        style={{
          color: "#5b5959",
          paddingTop: "0.5rem",
          fontSize: "0.8rem",
          position: "relative",
          right: "25px",
          top: "5px",
        }}
      ></div>
      <div style={{ height: "100%" }}>
        <Outlet />
      </div>
    </>
  );
};

export default DecisionPage;
