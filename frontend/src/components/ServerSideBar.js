import "../css/serverSideBar.css";

const ServerSideBar = ({ data }) => {
  return (
    <div className="serverContainer">
      <h3>{data.title}</h3>
    </div>
  );
};
export default ServerSideBar;
