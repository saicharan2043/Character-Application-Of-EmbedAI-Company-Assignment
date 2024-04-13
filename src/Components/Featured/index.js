import BigCard from "../BigCard";
import "./index.css";

const Featured = () => {
  return (
    <div className="container-of-Featured">
      <h1 className="text-of-Featured">Featured</h1>
      <ul className="ul-list-of-Featured">
        <BigCard />
        <BigCard />
        <BigCard />
        <BigCard />
        <BigCard />
      </ul>
      <ul className="ul-list-of-tabs">
        <li className="list-of-tabs">Helpers</li>
        <li className="list-of-tabs">Anime Game Characters</li>
        <li className="list-of-tabs">Helpers</li>
        <li className="list-of-tabs">Anime Game Characters</li>
        <li className="list-of-tabs">Helpers</li>
        <li className="list-of-tabs">Anime Game Characters</li>
      </ul>
      <ul className="ul-list-of-Featured">
        <BigCard />
        <BigCard />
        <BigCard />
        <BigCard />
        <BigCard />
      </ul>
    </div>
  );
};

export default Featured;
