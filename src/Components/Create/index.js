import { Component } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { RiBook2Line } from "react-icons/ri";
import { PiPencilLine } from "react-icons/pi";

import "./index.css";

class Create extends Component {
  state = {};

  render() {
    return (
      <div className="background-color-of-create">
        <div className="container-backbtn-and-view-book">
          <MdOutlineKeyboardArrowLeft className="back-arrow-btn" />
          <div className="book-container">
            <RiBook2Line className="book-icon" />
            <p className="title-of-view-character-text">View Character Book</p>
          </div>
        </div>

        <div className="user-details-form">
          <div className="profile-container-of-create">
            <div className="container-of-pen-icon">
              <PiPencilLine className="pen-icon" />
            </div>
          </div>
          <label className="label">Character name</label>
          <input
            type="text"
            placeholder="e.g. Albert Einstenin"
            className="input"
          />
          <label className="label">Tagline</label>
          <input
            type="text"
            placeholder="Add a short  tagline of you Character"
            className="input"
          />
          <label className="label">Description</label>
          <textarea
            rows={50}
            cols={100}
            placeholder="How would your Character describe themselves?"
            className="text-area"
          ></textarea>
        </div>

        <button className="create-character-btn">Create character</button>
      </div>
    );
  }
}

export default Create;
