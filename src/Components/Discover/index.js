import { IoSearch } from "react-icons/io5";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";

import ForYou from "../ForYou";
import TryThese from "../TryThese";
import Featured from "../Featured";
import "./index.css";

const Discover = () => {
  return (
    <div className="background-color-discover">
      <div className="greeting-and-search-container">
        <div className="">
          <p className="welcome-back-text">Welcome back,</p>
          <div className="profile-container-discover">
            <div className="profile-discover">
              <p className="first-letter-of-user-discover">S</p>
            </div>
            <p className="user-name">saikiran2043</p>
          </div>
        </div>
        <div className="container-of-search-icon-input">
          <IoSearch className="search-icon" />
          <input
            type="search"
            placeholder="Search for Characters"
            className="input-of-search"
          />
        </div>
      </div>

      <div className="dynamic-ad-container">
        <div className="opacity-container">
          <div className="description-dynamic-container">
            <div className="">
              <p className="title-of-dynamic-ad">What do you want to do</p>
              <h1 className="description-of-dynamic-ad">
                Learn something Knew
              </h1>
            </div>
            <div className="restart-container">
              <PiArrowsCounterClockwiseBold className="icon-of-restart" />
            </div>
          </div>

          <div className="chat-container-dynamic">
            <div className="">
              <div className="profile-of-chat-container">
                <img
                  src="https://wallpapers.com/images/high/cool-profile-picture-kpwjvjw5434qfzo3.webp"
                  className="profile-img"
                  alt="profile"
                />
                <p className="room-and-description-title">Get advice</p>
              </div>
              <p className="room-and-description-title">
                Hey there I'm Trip puzzle ready give you
              </p>
            </div>
            <p className="title-of-dynamic-ad">Reply...</p>
          </div>

          <div className="chat-container-dynamic">
            <div className="">
              <div className="profile-of-chat-container">
                <img
                  src="https://wallpapers.com/images/high/cool-profile-picture-kpwjvjw5434qfzo3.webp"
                  className="profile-img"
                  alt="profile"
                />
                <p className="room-and-description-title">Get advice</p>
              </div>
              <p className="room-and-description-title">
                Hey there I'm Trip puzzle ready give you
              </p>
            </div>
            <p className="title-of-dynamic-ad">Reply...</p>
          </div>
        </div>
      </div>
      <ForYou />
      <TryThese />
      <Featured />
    </div>
  );
};

export default Discover;
