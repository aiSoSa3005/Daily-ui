import TypeCard from "../../form/components/typecard/TypeCard";
import hero from "../../../../src/assets/hero.png";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const Form = () => {
  const [selectedType, setSelectedType] = useState("");
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      email: "",
      phone: "",
      type: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "First name must be at least 2 characters")
        .required("First name is required"),
      lastName: Yup.string()
        .min(2, "Last name must be at least 2 characters")
        .required("Last name is required"),
      jobTitle: Yup.string()
        .min(2, "Job title must be at least 2 characters")
        .required("Job title is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      phone: Yup.string()
        .min(10, "Phone number must be at least 10 characters")
        .required("Phone number is required"),
      type: Yup.string().required("User type is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  
  const handleSelect = (type: "solo" | "team") => {
    setSelectedType(type);
   formik.setFieldValue("type", type);
  };

  


  return (
    <>
      <div className="w-full h-full flex justify-center items-center md:justify-between md:gap-7">
        <div className="w-[400px] h-[600px] p-4 md:w-[50%]">
          <h1 className="text-xl font-medium md:text-3xl">Chat to our team</h1>
          <p className="text-sm text-gray-500 md:text-xl">
            Need help with something? Want a demo? Get in touch with our
            friendly team and we'll get in touch within 2 hours.
          </p>
          <form onSubmit={formik.handleSubmit} className="flex flex-col gap-3">
            <div className="w-full flex justify-between">
              <input
                className="w-[45%] my-2 border-b-2 border-gray-300 rounded-md p-2 focus: outline-0"
                type="text"
                placeholder="First Name"
                value={formik.values.firstName} 
                name="firstName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
              ) : null}
              <input
                className="w-[45%] my-2 border-b-2 border-gray-300 rounded-md p-2 focus: outline-0"
                type="text"
                placeholder="Last Name"
                value={formik.values.lastName}
                name="lastName"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
              ) : null}
            </div>
            <input
              className="w-full my-2 border-b-2 border-gray-300 rounded-md p-2 focus: outline-0"
              type="text"
              placeholder="Job Title"
              value={formik.values.jobTitle}
              name="jobTitle"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.jobTitle && formik.errors.jobTitle ? (
              <div className="text-red-500 text-sm">{formik.errors.jobTitle}</div>
            ) : null}
            <input
              className="w-full my-2 border-b-2 border-gray-300 rounded-md p-2 focus: outline-0"
              type="email"
              placeholder="Work Email"
              value={formik.values.email}
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
            <input
              className="w-full my-2 border-b-2 border-gray-300 rounded-md p-2 focus: outline-0"
              type="tel"
              placeholder="Phone Number"
              value={formik.values.phone}
              name="phone"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500 text-sm">{formik.errors.phone}</div>
            ) : null}
            <div className="w-full flex flex-col justify-between p-3">
              <TypeCard type="solo" onSelect={handleSelect} extraClass={selectedType === "solo" ? "active" : ""}/>
              <TypeCard type="team" onSelect={handleSelect} extraClass= {selectedType === "team" ? "active" : ""}/>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white rounded-md p-2 mt-4 hover:bg-gray-500 "
            >
              Get in touch
            </button>
          </form>
        </div>
        <div className="hidden md:flex w-[50%] h-[600px] justify-center items-center">
          <img
            src={hero}
            alt="hero"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </>
  );
};

export default Form;
