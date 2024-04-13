import SmallCard from "../SmallCard";
import "./index.css";

const TryThese = () => {
  return (
    <div className="container-of-try-these">
      <h1 className="text-of-try-these">Try these</h1>
      <ul className="ul-list-of-try-these">
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </ul>
    </div>
  );
};

export default TryThese;
