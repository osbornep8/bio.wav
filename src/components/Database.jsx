import Section from "./Section";
import { check } from "../assets";
import { collabContent } from "../constants";

const Database = () => {
  return (
    <Section crosses id="db">
      <div className="container lg:flex">
        <div className="max-w-full">
          {/*[25-rem]*/}
          <h2 className="h2 mb-4 md:mb-8">
            A Decentralized Network for Advanced Data Management
          </h2>
          <ul className="sm:grid grid-cols-3 gap-8 max-w-full mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mt-20 mb-3 py-2 pr-2" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-4">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4 ml-[2.5rem]">
                    {item.text}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
};

export default Database;
