import React, { useState } from "react";
import { toast } from "sonner";
// styling for react phone # input
import "react-phone-number-input/style.css";
// isValidPhoneNumber: checks if phone number is valid returns a boolean
import { isValidPhoneNumber } from "react-phone-number-input/max";
// react-hook-form for input state management and validation
import { useForm, Controller } from "react-hook-form";
// input field for phone #'s
import PhoneInput from "react-phone-number-input";


import { GithubIcon } from "../utils/Resources/Svgs";
import { TwitterIcon } from "../utils/Resources/Svgs";
import { ButtonPrimary } from "../utils/buttons";
import { LinkedinIcon } from "../utils/Resources/Svgs";

import "./Contact.css"; 


function Contact() {
  const { register, handleSubmit, control, formState: { errors }, reset } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // handling form submission with Resend
  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Show loading toast
    const loadingToast = toast.loading("Sending your message...", {
      description: "Please wait while we process your request.",
    });

    try {
      const response = await fetch(`http://localhost:8000/contact`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (response.ok) {
        toast.dismiss(loadingToast);
        toast.success("Message sent successfully! 🚀", {
          description: "Thank you for reaching out. We'll get back to you soon!",
          duration: 5000,
          action: {
            label: "Close",
            onClick: () => {},
          },
        });
        reset(); // Clear the form
      } else {
        toast.dismiss(loadingToast);
        toast.error("Failed to send message", {
          description: result.message || "Please try again later.",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.dismiss(loadingToast);
      toast.error("Something went wrong", {
        description: "Please check your connection and try again.",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // will be executed in the event of a error on the form
  const onError = (error) => {
    console.error("Error Submitting Form", error);
    // Consider adding user feedback here
  };

  const Form = () => (
    <form
      className="w-full"
      name="contact-form"
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <label htmlFor="name" className="m-0 w-6/12 h-[86px] text-[#FD5A1E] uppercase mt-8 px-4 py-0">
        Full Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter name"
          className="w-full h-14 bg-[black] text-[#D7D7D8] mt-4 p-4 rounded-md border-[1.5px] border-solid border-silverDark"
          {...register("name", { required: true })}
        />
        {errors.name && <span className="text-red-500">Name is required</span>}
      </label>

      <label htmlFor="email" className="m-0 w-6/12 h-[86px] text-[#FD5A1E] uppercase mt-8 px-4 py-0">
        Email
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Your email address ..."
          className="w-full h-14 bg-[black] text-[#D7D7D8] mt-4 p-4 rounded-md border-[1.5px] border-solid border-silverDark"
          {...register("email", { 
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
        />
        {errors.email && <span className="text-red-500">{errors.email.message || "Email is required"}</span>}
      </label>

      <label htmlFor="phone" className="w-6/12 h-[86px] text-[#FD5A1E] uppercase mt-8 px-4 py-0">
        Phone
        <Controller
          name="phone"
          control={control}
          rules={{
            required: "Phone number is required",
            validate: (value) => isValidPhoneNumber(value) || "Invalid phone number"
          }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              id="phone"
              placeholder="Enter Phone number"
              value={value}
              onChange={onChange}
              international
              countryCallingCodeEditable={false}
              defaultCountry="US"
              labels={{
                countrySelectAriaLabel: "Country",
                phoneInputAriaLabel: "Phone number"
              }}
            />
          )}
        />
        {errors.phone && <span className="text-red-500">{errors.phone.message}</span>}
      </label>

      <label htmlFor="interests" className="w-6/12 h-[86px] text-[#FD5A1E] uppercase mt-8 px-4 py-0">
        Interested In
        <select
          id="interests"
          name="interests"
          className="w-full h-14 bg-[black] text-[#D7D7D8] mt-4 pl-4 rounded-md border-[1.5px] border-solid border-silverDark"
          {...register("interests", { required: true })}
        >
          <option value="Please Select">Please Select</option>
          <option value="Get a Website built"> Build a Custom Website </option>
          <option value="Redesign existing site"> Redesign existing Website </option>
          <option value="Make changes to existing site"> Fix Something Broken </option>
          <option value="Something else"> Something else </option>
        </select>
      </label>
      <label htmlFor="budget" className="w-6/12 h-[86px] text-[#FD5A1E] uppercase mt-8 px-4 py-0">
        Budget
        <select
          id="budget"
          name="budget"
          className="w-full h-14 bg-[black] text-[#D7D7D8] mt-4 pl-4 rounded-md border-[1.5px] border-solid border-silverDark"
          {...register("budget", { required: true })}
        >
          <option value="Select Range">Select Range</option>
          <option value="Get a Website built"> 0 - 1k </option>
          <option value="Redesign existing site"> 1k - 5k </option>
          <option value="Make changes to existing site"> 5k - 10k </option>
          <option value="Something else"> 10k+ </option>
        </select>
      </label>
      <label htmlFor="inbound" className="w-6/12 h-[86px] text-[#FD5A1E] uppercase mt-8 px-4 py-0">
        How did you learn about us?
        <select
          id="inbound"
          name="inbound"
          className="w-full h-14 bg-[black] text-[#D7D7D8] mt-4 pl-4 rounded-md border-[1.5px] border-solid border-silverDark"
          {...register("inbound")}
        >
          <option value="Please Select">Please Select</option>
          <option value=""> offline </option>
          <option value="Get a Website built"> Google </option>
          <option value="Redesign existing site"> Linkedin </option>
          <option value="Make changes to existing site"> Youtube </option>
          <option value="Something else"> Instagram </option>
        </select>
      </label>
      <div className="flex flex-column  items-end">
        <label
          className="message w-full h-[184px] text-[#FD5A1E] uppercase mt-8 px-4 py-0"
          htmlFor="message"
          {...register("message")}
        >
          Message
          <textarea
            className="message h-full w-full bg-[black] text-[#D7D7D8] mt-4 p-4 rounded-md border-[1.5px] border-solid border-silverDark"
            type="text"
            id="message"
            name="message"
            placeholder="Your Message here ..."
          ></textarea>
        </label>
      </div>
      <ButtonPrimary
        text={isSubmitting ? "Sending..." : "Start a Project"}
        type="submit"
        customClass={`mt-24 ml-5 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        callBack={handleSubmit(onSubmit)}
      />
    </form>
  );

  return (
    <section id="Contact" className="w-full flex flex-col lg:flex-row">
      <div className="leftBox flex flex-column w-3/4 px-4 mb-24 xl:p-0">
        <small className="text-majidTech uppercase">Have a project in mind?</small>
        <h1 className="text-white text-6xl mb-2 mt-4">Let's Get Started</h1>
        <div className="address py-4">
          <div className="mb-2">158 FAIRVIEW RD STE B</div>
          <span>Ellenwood, GA</span>
        </div>
        <div className="email py-4">
          <div className="mb-2 underline">majidtechnicalsolutions@gmail.com</div>{" "}
          <span className="contactNumber"> +1(678)768-5875</span>
        </div>
        <div className="icons flex justify-start max-w-[12rem]">
          <a href="https://www.linkedin.com/in/jamal-majid-0ab9ab177/#/">
            <LinkedinIcon customStyle={{ marginRight: "2rem" }} />
          </a>
          <a href="https://github.com/jamalabd">
            <GithubIcon customStyle={{ marginRight: "2rem" }} />
          </a>
          <a href="https://twitter.com/_jamalMajid">
            <TwitterIcon />{" "}
          </a>
        </div>
      </div>
      <div className="rightBox flex flex-column">
        <Form />
      </div>
    </section>
  );
}

export default Contact;
