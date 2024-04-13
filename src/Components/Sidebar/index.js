import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import "./index.css";

const Sidebar = () => {
  return (
    <div className="side-bar">
      <div className="top-container">
        <div className="logo-container">
          <h1 className="logo-title">character.ai</h1>
          <MdKeyboardDoubleArrowLeft className="left-arrow-of-logo" />
        </div>
        <button className="create-btn">
          <FaPlus className="plus-icon-of-create-btn" />
          Create
        </button>
        <div className="discover-btn">
          <RiCompassDiscoverFill className="icon-of-discover" />
          <p className="paragraph">Discover</p>
        </div>
        <p className="paragraph">Chats</p>
      </div>
      <div className="bottom-container">
        <button className="try-with-ai-btn">Try C.ai</button>
        <div className="profile-and-logout-container">
          <div className="profile-container">
            <div className="profile">
              <p className="first-letter-of-user">S</p>
            </div>
            <p className="paragraph">saikiran</p>
          </div>
          <IoIosArrowDown className="logout-arrow-icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
