import React from "react";

const Contacts = () => {
  return (
    <>
      <div className="h-fit w-fit mx-auto my-2">
        <div className="container bg-gray-600 h-full w-[100%] p-4 pt-6 md:p-6 lg:p-12">
          <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
          <form className="max-w-md">
            <label className="block my-2 text-2xl" htmlFor="name">
              Name
              <input
                type="text"
                id="name"
                className="w-full p-2 pl-10 my-2 text-sm text-gray-700"
                placeholder="Your name"
              />
            </label>
            <label className="block my-2 text-2xl" htmlFor="email">
              Email
              <input
                type="email"
                id="email"
                className="w-full p-2 pl-10 my-2 text-sm text-gray-700"
                placeholder="your@email.com"
              />
            </label>
            <label className="block my-2 text-2xl" htmlFor="message">
              Message
              <textarea
                id="message"
                className="w-full p-2 pl-10 my-2 text-sm text-gray-700"
                placeholder="Your message"
              />
            </label>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
            >
              Send Message
            </button>
          </form>
          <p className="text-sm text-white   mt-4">
            You can also reach us at{" "}
            <a href="mailto:info@example.com">info@example.com</a> or call us at{" "}
            <a href="tel:+1234567890">+1234567890</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Contacts;
