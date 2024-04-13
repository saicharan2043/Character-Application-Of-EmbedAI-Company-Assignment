import { IoChatbubbleOutline } from "react-icons/io5";

import "./index.css";

const SmallCard = () => {
  return (
    <li className="list-item-of-smallcard">
      <img
        src="https://cdn-icons-png.flaticon.com/512/2919/2919906.png"
        className="img-of-smallcard"
      />
      <div className="">
        <h1 className="paragraph-of-smallcard">Practice a new language</h1>
        <p className="description-of-smallcard">with HyperGlot</p>
      </div>
    </li>
  );
};
export default SmallCard;
