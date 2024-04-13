import { RxDotsHorizontal } from "react-icons/rx";
import { IoMdSend } from "react-icons/io";
import "./index.css";

const ChatDetails = () => {
  return (
    <div className="background-color-of-chatdetails">
      <div className="header-container">
        <div className="profile-container-of-header">
          <img
            src="https://i.pinimg.com/564x/7c/46/5d/7c465d16ef4c6e793899ec9a749e9531.jpg"
            className="profile-img-of-header"
            alt="profile"
          />
          <div className="">
            <h1 className="username-of-header">Vida Life Coach</h1>
            <p className="user-description">By @MarieLovesMatcha</p>
          </div>
        </div>
        <div className="three-dots-container">
          <RxDotsHorizontal className="three-dots" />
        </div>
      </div>
      <div className="body-container">
        <img
          src="https://i.pinimg.com/564x/7c/46/5d/7c465d16ef4c6e793899ec9a749e9531.jpg"
          className="profile-img-of-body"
          alt="profile"
        />
        <p className="title-of-body">Vida Life Coach</p>
        <p className="description-of-body">
          Empathetic life coach who is kind and wise
        </p>
        <p className="username-of-body">By @MarieLovesMatcha</p>
      </div>
      <div className="message-container">
        <input
          type="text"
          placeholder="Message Vida Life Coach"
          className="input-of-message"
        />
        <div className="send-container">
          <IoMdSend className="send-icon" />
        </div>
      </div>
    </div>
  );
};

export default ChatDetails;
