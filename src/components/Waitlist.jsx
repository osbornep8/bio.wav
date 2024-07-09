import { useState } from "react";
import Section from "./Section";
import Heading from "./Heading";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const Waitlist = () => {
  const url = import.meta.env.VITE_MAILCHIMP_URL;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    profession: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e, subscribe) => {
    e.preventDefault();
    const { email, name, profession } = formData;
    subscribe({ EMAIL: email, FNAME: name, PROFN: profession });
  };

  return (
    <Section crosses id="join-waitlist">
      <div className="container shadow-md">
        <Heading title="Join the Waitlist" tag="Sign Up for Early Access" />
        <MailchimpSubscribe
          url={url}
          render={({ subscribe, status, message }) => (
            <>
              {status === "sending" && (
                <p className="text-center text-blue-600">Sending...</p>
              )}
              {status === "error" && (
                <p
                  className="text-center text-red-600"
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )}
              {status === "success" && (
                <p className="text-center text-green-600">
                  Thank you for signing up!
                </p>
              )}
              {status !== "success" && (
                <form
                  className="flex flex-col items-center"
                  onSubmit={(e) => handleSubmit(e, subscribe)}
                >
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-n-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-[20rem] px-4 py-2 mt-2 border rounded-md text-n-8 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-n-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-[20rem] px-4 py-2 mt-2 border rounded-md text-n-8 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="profession" className="block text-n-1">
                      Profession
                    </label>
                    <input
                      type="text"
                      id="profession"
                      name="profession"
                      value={formData.profession}
                      onChange={handleChange}
                      className="w-[20rem] px-4 py-2 mt-2 border rounded-md text-n-8 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                      placeholder="Optional"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-[20rem] mt-4  py-2 px-4 bg-color-7 text-white rounded-md hover:bg-color-9 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  >
                    Sign Up
                  </button>
                </form>
              )}
            </>
          )}
        />
      </div>
    </Section>
  );
};

export default Waitlist;
