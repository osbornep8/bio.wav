import Section from "./Section";
import Heading from "./Heading";
import {
  service4,
  service5,
  service6,
  service7,
  service8,
  service9,
  check,
} from "../assets";
import {
  bioWavServices,
  bioWavServices2,
  bioWavServices3,
  bioWavServices4,
  bioWavServices5,
  bioWavServices6,
} from "../constants";

const Services = () => {
  return (
    <Section crosses id="platform">
      <div className="container">
        <Heading
          title="Elevate Your Research"
          tag="Harness the power of AI-driven healthcare innovations"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg shadow-lg flex flex-col text-center items-center">
            <div className="mb-4">
              <img src={service4} alt="Upload Icon" className="w-12 h-12" />
            </div>
            <h5 className="h5 mb-4">Data Acquisition</h5>
            <p className="body-2 mb-[3rem] text-n-3 ">
              Import your own or access available datasets from our global
              repository. Our platform supports multiple data formats for
              various modalities such as MRI, CT, EEG, and more.
            </p>

            <ul className="body-2">
              {bioWavServices.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start py-4 border-t border-n-6"
                >
                  <img width={24} height={24} src={check} />
                  <p className="ml-4">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-10 rounded-lg shadow-lg flex flex-col text-center items-center">
            <div className="mb-4">
              <img
                src={service5}
                alt="Pre-process Icon"
                className="w-12 h-12"
              />
            </div>
            <h5 className="h5 mb-4">Preprocessing</h5>
            <p className="body-2 mb-[3rem]  text-n-3">
              Utilize a range of tools and APIs to clean and prepare your data.
              This ranges from filtering, artifact removal, normalization, and
              much more
            </p>
            <ul className="body-2">
              {bioWavServices2.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start py-4 border-t border-n-6"
                >
                  <img width={24} height={24} src={check} />
                  <p className="ml-4">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-lg shadow-lg flex flex-col text-center items-center">
            <div className="mb-4">
              <img src={service6} alt="Analyze Icon" className="w-12 h-12" />
            </div>
            <h5 className="h5 mb-4">Model Development</h5>
            <p className="body-2 mb-[3rem] text-n-3">
              Build or utilize pre-trained models for classification,
              segmentation, discovery, and automation. Customize your analysis
              with user-friendly tools and templates.
            </p>
            <ul className="body-2">
              {bioWavServices3.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start py-4 border-t border-n-6"
                >
                  <img width={24} height={24} src={check} />
                  <p className="ml-4">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-lg shadow-lg flex flex-col text-center items-center">
            <div className="mb-4">
              <img src={service7} alt="Visualize Icon" className="w-12 h-12" />
            </div>
            <h5 className="h5 mb-4">Visualization</h5>
            <p className="body-2 mb-[3rem] text-n-3">
              Evaluate your model and results with robust performance metrics
              and interactive visualizations.
            </p>
            <ul className="body-2">
              {bioWavServices4.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start py-4 border-t border-n-6"
                >
                  <img width={24} height={24} src={check} />
                  <p className="ml-4">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-lg shadow-lg flex flex-col text-center items-center">
            <div className="mb-4">
              <img
                src={service8}
                alt="Collaborate Icon"
                className="w-12 h-12"
              />
            </div>
            <h5 className="h5 mb-4">Collaborate</h5>
            <p className="body-2 mb-[3rem] text-n-3">
              Work with peers and find your community to share and build your
              projects on our secure platform.
            </p>
            <ul className="body-2">
              {bioWavServices5.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start py-4 border-t border-n-6"
                >
                  <img width={24} height={24} src={check} />
                  <p className="ml-4">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-lg shadow-lg flex flex-col text-center items-center">
            <div className="mb-4">
              <img src={service9} alt="Export Icon" className="w-12 h-12" />
            </div>
            <h5 className="h5 mb-4">Export</h5>
            <p className="body-2 mb-[3rem] text-n-3">
              Deploy your models for production or export the results for
              research publications.
            </p>
            <ul className="body-2">
              {bioWavServices6.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start py-4 border-t border-n-6"
                >
                  <img width={24} height={24} src={check} />
                  <p className="ml-4">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Services;
