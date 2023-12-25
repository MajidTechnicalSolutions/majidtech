import React, { useState, useEffect } from "react";
import "react-phone-number-input/style.css";
import { formatPhoneNumberIntl, isValidPhoneNumber } from "react-phone-number-input/max";
import { useForm } from "react-hook-form";
import PhoneInput from "react-phone-number-input";

import { GithubIcon } from "../Resources/../Resources/Svgs";
import { TwitterIcon } from "../Resources/../Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";

function Contact() {
  const [value, setValue] = useState();
  const { register, handleSubmit } = useForm();

  // Simple reusable error display, error display update waiting on email validation
  const isValidErrorDisplay = (phone) => (
    <>
      {value ? (
        isValidPhoneNumber(value) ? (
          <span>Valid ✅</span>
        ) : (
          <span>Not Valid 🙅🏾‍♂</span>
        )
      ) : null}
    </>
  );

  const onSubmit = (data) => console.log(data);

  // if input is focused and phone number is valid border is green
  // else if input is focused and number is not valid border is read

  // useEffect(() => {
  //   const isFocusedInput = document.activeElement.childNodes;
  //   console.log("elelemnt active", isFocusedInput);
  //   // if (value){
  //   //   isValidPhoneNumber(value) ?
  //   // }

  //   // value ? isValidPhoneNumber(value)  ? "Valid Phone number ✅" : "Phone Number Not Valid 🙅🏾‍♂️"
  //   //   : "Phone Number Required 📞"
  // }, []);

  // International: {value && formatPhoneNumberIntl(value)}

  // feature work: break ui up into components for readability
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
        <form className="w-[47rem]" onSubmit={handleSubmit(onSubmit)}>
          <label for="name" className="m-0">
            Full Name
            <input
              type="text"
              name="name"
              placeholder=" Enter name"
              {...register("Name", { required: true })}
            />
          </label>

          <label for="email" className="m-0">
            Email
            <input
              type="email"
              name="email"
              placeholder="Your email address ..."
              {...register("email", { required: true })}
            />
          </label>
          <label for="phone">
            Phone
            <PhoneInput
              placeholder="Enter phonae number"
              value={value}
              onChange={setValue}
              international
              countryCallingCodeEditable={false}
              {...register("phone", {
                setValueAs: (v) => formatPhoneNumberIntl(v),
              })}
              error={
                value
                  ? isValidPhoneNumber(value)
                    ? "Valid Phone number ✅"
                    : "Phone Number Not Valid 🙅🏾‍♂️"
                  : "Phone Number Required 📞"
              }
            />
            {isValidErrorDisplay("phone")}
          </label>
          <label for="interests">
            Interested In
            <select id="interests" name="interests" {...register("interests", { required: true })}>
              <option value="Please Select">Please Select</option>
              <option value="Get a Website built"> Build a Custom Website </option>
              <option value="Redesign existing site"> Redesign existing Website </option>
              <option value="Make changes to existing site"> Fix Something Broken </option>
              <option value="Something else"> Something else </option>
            </select>
          </label>
          <label for="budget">
            Budget
            <select id="budget" name="budget" {...register("budget", { required: true })}>
              <option value="Select Range">Select Range</option>
              <option value="Get a Website built"> 0 - 1k </option>
              <option value="Redesign existing site"> 1k - 5k </option>
              <option value="Make changes to existing site"> 5k - 10k </option>
              <option value="Something else"> 10k+ </option>
            </select>
          </label>
          <label for="inbound">
            How did you learn about us?
            <select id="inbound" name="inbound" {...register("inbound", { required: true })}>
              <option value="Please Select">Please Select</option>
              <option value=""> offline </option>
              <option value="Get a Website built"> Google </option>
              <option value="Redesign existing site"> Linkedin </option>
              <option value="Make changes to existing site"> Youtube </option>
              <option value="Something else"> Instagram </option>
            </select>
          </label>
          <div className="flex flex-column  items-end">
            <label className="message" for="message" {...register("message")}>
              Message
              <textarea
                className="message"
                type="text"
                id="message"
                name="message"
                placeholder="Your Message here ..."
              ></textarea>
            </label>
            <ButtonPrimary
              text="Start a Project"
              type="submit"
              customClass="mt-5"
              callBack={handleSubmit(onSubmit)}
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
