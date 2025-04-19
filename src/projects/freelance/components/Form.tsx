import TypeCard from "../../form/components/typecard/TypeCard";
import hero from "../../../../src/assets/hero.png";
const Form = () => {
  return (
    <>
      <div className="w-full h-full flex justify-center items-center md:justify-between md:gap-7">
        <div className="w-[400px] h-[600px] p-4 md:w-[50%]">
          <h1 className="text-xl font-medium md:text-3xl">Chat to our team</h1>
          <p className="text-sm text-gray-500 md:text-xl">
            Need help with something? Want a demo? Get in touch with our
            friendly team and we'll get in touch within 2 hours.
          </p>
          <form className="flex flex-col gap-3">
            <div className="w-full flex justify-between">
              <input
                className="w-[45%] my-2 border-b-2 border-gray-300 rounded-md p-2 focus: outline-0"
                type="text"
                placeholder="First Name"
              />
              <input
                className="w-[45%] my-2 border-b-2 border-gray-300 rounded-md p-2 focus: outline-0"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <input
              className="w-full my-2 border-b-2 border-gray-300 rounded-md p-2 focus: outline-0"
              type="text"
              placeholder="Job Title"
            />
            <input
              className="w-full my-2 border-b-2 border-gray-300 rounded-md p-2 focus: outline-0"
              type="email"
              placeholder="Work Email"
            />
            <input
              className="w-full my-2 border-b-2 border-gray-300 rounded-md p-2 focus: outline-0"
              type="tel"
              placeholder="Phone Number"
            />
            <div className="w-full flex flex-col justify-between p-3">
              <TypeCard type="solo" />
              <TypeCard type="team" />
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
