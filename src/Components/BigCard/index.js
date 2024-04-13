import { IoChatbubbleOutline } from "react-icons/io5";

import "./index.css";

const BigCard = () => {
  return (
    <li className="list-item-of-bigcard">
      <img
        src="https://wallpapers.com/images/featured/cool-profile-picture-87h46gcobjl5e4xu.jpg"
        className="img-of-bigcard"
      />
      <div className="vertical">
        <div className="">
          <h1 className="paragraph-of-bigcard">Diego</h1>
          <p className="description-of-bigcard">By @xpearhead</p>
          <p className="paragraph-of-bigcard">Practice English with Diego</p>
        </div>
        <div className="horizontal">
          <IoChatbubbleOutline className="comment-icon" />
          <p className="description-of-bigcard">137.7k</p>
        </div>
      </div>
    </li>
  );
};
export default BigCard;
