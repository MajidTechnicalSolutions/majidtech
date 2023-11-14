import React from "react";

import { FaceBookIcon } from "../Resources/Svgs";
import { GithubIcon } from "../Resources/../Resources/Svgs";
import { TwitterIcon } from "../Resources/../Resources/Svgs";
import { DiscordIcon } from "../Resources/../Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";
function Contact() {
  return (
    <section id="Contact" className="w-full flex my-10 h-[43rem]">
      <div className="leftBox flex flex-column w-3/4">
        <small className="text-majidTech uppercase mb-2 mt-4">Have a project in mind?</small>
        <h1 className="text-white text-5xl mb-2 mt-4">Let's get down to business.</h1>
        <div className="address py-4">
          3576 Mitchells Glen Ct. <div>Ellenwood, GA</div>
        </div>
        <div className="email py-4">
          jamalabdul47@gmail.com <div className="contactNumber"> +1(678)768-5875</div>
        </div>
        <div className="icons flex justify-between max-w-[12rem]">
          <FaceBookIcon />
          <GithubIcon />
          <TwitterIcon />
          <DiscordIcon />
        </div>
      </div>
      <div className="rightBox flex flex-column">
        <form>
          <label for="name">
            Full Name
            <input type="text" name="name" />
          </label>

          <label for="email">
            Email
            <input type="email" name="email" />
          </label>
          <label for="phone">
            Phone
            <input type="tel" name="phone" />
          </label>
          <label for="interests">
            Interested In
            <select id="interests" name="interests">
              <option value="">--Please choose one--</option>
              <option value="Get a Website built"> Get a Website built </option>
              <option value="Redesign existing site"> Redesign existing site </option>
              <option value="Make changes to existing site"> Make changes to existing site </option>
              <option value="Something else"> Something else </option>
            </select>
          </label>

          <label for="budget">
            Budget
            <input type="text" name="budget" />
          </label>
          <label for="website">
            How did you learn about us?
            <input type="text" name="website" />
          </label>
          <div className="flex flex-column  items-end">
            <label className="message" for="message">
              Message
              <input className="message" type="text" name="message" />
            </label>
            <ButtonPrimary
              text="Start a Project"
              destination="Contact"
              type="submit"
              customClass="w-40"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
