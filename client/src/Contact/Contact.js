import React, { useState } from "react";
// styling for react phone # input
import "react-phone-number-input/style.css";
// formatPhoneNumberIntl: E.164 format to human readable +12133734253 -> +1 213 373 4253
// isValidPhoneNumber: checks if phone number is valid returns a boolean
import { formatPhoneNumberIntl, isValidPhoneNumber } from "react-phone-number-input/max";
// react-hook-form for input state management and validation
import { useForm } from "react-hook-form";
// input field for phone #'s
import PhoneInput from "react-phone-number-input";
// converts object into form data
import { serialize } from "object-to-formdata";

import { GithubIcon } from "../Resources/../Resources/Svgs";
import { TwitterIcon } from "../Resources/../Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";

function Contact() {
  const [value, setValue] = useState();
  const { register, handleSubmit } = useForm();
  const url = process.env.REACT_APP_WEBAPP_URL;

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

  // handling form submission
  const onSubmit = async (data) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        body: new serialize(data),
      });

      const returnedData = await response.json();
      if (!returnedData.ok) {
        console.log(returnedData.description);
        return;
      }
    } catch (error) {
      console.log("Error Submitting Form to Google Sheets", error);
    }
  };

  // will be executed in the event of a error on the form
  const onError = (error) => console.log("Error Submitting Form", error);

  const Form = () => (
    <form
      action={url}
      method="post"
      className="w-[47rem]"
      name="contact-form"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <label for="name" className="m-0">
        Full Name
        <input
          type="text"
          name="name"
          placeholder=" Enter name"
          {...register("name", { required: true })}
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
          placeholder="Enter Phone number"
          value={value}
          onChange={setValue}
          international
          name="phone"
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
        {isValidErrorDisplay()}
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
        <select id="inbound" name="inbound" {...register("inbound")}>
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
  );

  return (
    <section id="Contact" className="w-full flex my-52  h-[43rem]">
      <div className="leftBox flex flex-column w-3/4">
        <small className="text-majidTech uppercase">Have a project in mind?</small>
        <h1 className="text-white text-6xl mb-2 mt-4">Let's Get Started</h1>
        <div className="address py-4">
          <div className="mb-2">158 FAIRVIEW RD STE B</div>
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
        <Form />
      </div>
    </section>
  );
}

export default Contact;
