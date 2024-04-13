import BigCard from "../BigCard";
import "./index.css";

const ForYou = () => {
  return (
    <div className="container-of-for-you">
      <h1 className="text-of-for-you">For you</h1>
      <ul className="ul-list-of-for-you">
        <BigCard />
        <BigCard />
        <BigCard />
        <BigCard />
        <BigCard />
      </ul>
    </div>
  );
};

export default ForYou;
