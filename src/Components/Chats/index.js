import { Link } from "react-router-dom";
import "./index.css";

const Chats = () => {
  return (
    <Link to="/chatdetails" className="Link">
      <li className="chats-list">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt1APn-w2JJ42fIO3AEisbrskQ8o8Sc6Rdxg&usqp=CAU"
          className="profile-of-chats"
          alt="profile"
        />
        <p className="username-of-chat-profile">Vida Life Coach</p>
      </li>
    </Link>
  );
};

export default Chats;
