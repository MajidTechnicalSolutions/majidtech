import React from "react";

import { GithubIcon } from "../Resources/../Resources/Svgs";
import { TwitterIcon } from "../Resources/../Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";
function Contact() {
  return (
    <section id="Contact" className="w-full flex my-52  h-[43rem]">
      <div className="leftBox flex flex-column w-3/4">
        <small className="text-majidTech uppercase">Have a project in mind?</small>
        <h1 className="text-white text-6xl mb-2 mt-4">Let's Get Started</h1>
        <div className="address py-4">
          <div className="mb-2">3576 Mitchells Glen Ct.</div>
          <span>Ellenwood, GA</span>
        </div>
        <div className="email py-4">
          <div className="mb-2 underline">jamalabdul47@gmail.com</div>{" "}
          <span className="contactNumber"> +1(678)768-5875</span>
        </div>
        <div className="icons flex justify-start max-w-[12rem]">
          <GithubIcon customStyle={{ marginRight: "2rem" }} />
          <TwitterIcon />
        </div>
      </div>
      <div className="rightBox flex flex-column">
        <form className="w-[47rem]">
          <label for="name" className="m-0">
            Full Name
            <input type="text" name="name" placeholder=" Enter name" />
          </label>

          <label for="email" className="m-0">
            Email
            <input type="email" name="email" placeholder="Your email address ..." />
          </label>
          <label for="phone">
            Phone
            <input type="tel" name="phone" placeholder="XXX - XXX - XXXX" />
          </label>
          <label for="interests">
            Interested In
            <select id="interests" name="interests">
              <option value="">Please Select</option>
              <option value="Get a Website built"> Get a Website built </option>
              <option value="Redesign existing site"> Redesign existing site </option>
              <option value="Make changes to existing site"> Make changes to existing site </option>
              <option value="Something else"> Something else </option>
            </select>
          </label>

          <label for="budget">
            Budget
            <select id="budget" name="budget">
              <option value="">Select Range</option>
              <option value="Get a Website built"> Get a Website built </option>
              <option value="Redesign existing site"> Redesign existing site </option>
              <option value="Make changes to existing site"> Make changes to existing site </option>
              <option value="Something else"> Something else </option>
            </select>
          </label>
          <label for="website">
            How did you learn about us?
            <select id="website" name="">
              <option value="">Google</option>
              <option value="Get a Website built"> Get a Website built </option>
              <option value="Redesign existing site"> Redesign existing site </option>
              <option value="Make changes to existing site"> Make changes to existing site </option>
              <option value="Something else"> Something else </option>
            </select>
          </label>
          <div className="flex flex-column  items-end">
            <label className="message" for="message">
              Message
              <textarea className="message" type="text" id="message" name="message">
                Your Message here ...
              </textarea>
            </label>
            <ButtonPrimary
              text="Start a Project"
              destination="Contact"
              type="submit"
              customClass="mt-5"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
