import React from "react";
import Section from "./Section";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex flex-col sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption  text-n-4 lg:block text-center">
          &copy;{new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </Section>
  );
};

export default Footer;
