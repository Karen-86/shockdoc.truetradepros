"use client";

import React, { useState, useEffect } from "react";
import { Navbar, Footer, InputDemo, TextareaDemo, ButtonDemo } from "@/components/index.js";

import Image from "next/image";
import localData from "@/localData";
import { useGlobalContext } from "@/context";

const { headerImage, kitchenImage, handymanImage, bathroomImage, coverImage, ownerImage, teamImage } = localData.images;
const { leadingLeftIcon, leadingRightIcon, quotesIcon, starIcon } = localData.svgs;

const Template = () => {
  return (
    <>
      <header className="absolute w-full z-2 ">
        <Navbar />
      </header>
      <main className="home-page">
        <ShowcaseSection />
        <RemodelingSection />
        <ApartmentSection />
        <AboutUsSection />
        <Testimonial />
      </main>
      <Footer />
    </>
  );
};

const ShowcaseSection = () => {
  const { sendEmail } = useGlobalContext();

  const [state, setState] = useState({
    name: "",
    submitted_email: "",
    phone: "",
    description: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <header
      id="showcase"
      className="showcase md:min-h-[100vh]  pt-[170px] py-[2rem] flex items-center  relative mb-[50px] lg:mb-[100px]"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.1)] z-1   shadow-[inset_0px_50px_100px_rgba(0,0,0,0.5)]"></div>
      <Image width="4825" height="3225" src={headerImage} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
      {/* <img src={headerImage} alt="" className="absolute top-0 left-0 w-full h-full object-cover" /> */}
      {/* <h1 className="text-6xl mt-[calc(-100px+2rem)]">Header</h1> */}
      <div className="container  max-w-[1536px]">
        <div className="showcase-content flex flex-col lg:flex-row items-center relative z-2">
          <h1 className=" text-[7vw] lg:text-[5vw]    mb-[2rem] text-center lg:text-left leading-[1.1] lg:max-w-[500px] 4xl:!max-w-full font-sans font-bold text-white text-shadow-lg ">
            The Shock Doc LLC, Lic # U.24843
          </h1>
          <div className="lg:absolute 4xl:!relative lg:right-0 top-auto bottom-auto lg:mb-[-70px]  bg-success text-white max-w-[480px]  py-9 px-6 shadow-md ">
            <h2 className="text-[0.9rem] lg:text-[1.35rem] font-bold mb-[1rem]  font-sans uppercase leading-[1.2] ">
              Expert Asheville Handyman Services for the Home or Business
            </h2>
            <h3 className="text-left text-[1rem] lg:text-[1.25rem] font-medium mb-[1rem]  font-sans   ">
              Schedule a Service or Request a FREE Estimate Now:
            </h3>
            <form
              className=" text-left"
              id="contact-form-2 "
              action="#/"
              method="POST"
              onSubmit={(e) => {
                // EXTRA start
                const form = e.target as any;

                const name = form.name?.value?.trim();
                const submittedEmail = form.submitted_email?.value?.trim();
                const phone = form.phone?.value?.trim();
                const description = form.description?.value?.trim();
                const image = form.image?.defaultValue;

                const CONTENT =
                  (name ? `<p><strong>Name</strong>: ${name}</p>` : "") +
                  (submittedEmail ? `<p><strong>Email</strong>: ${submittedEmail}</p>` : "") +
                  (phone ? `<p><strong>Phone</strong>: ${phone}</p>` : "") +
                  (description ? `<p><strong>Description</strong>: ${description}</p>` : "") +
                  (image ? `<img src="${image}" width='90' height='90' />` : "");
                form.CONTENT.value = CONTENT;
                // EXTRA end

                sendEmail({
                  event: e,
                  service: "service_m0znoir",
                  template: "template_u1lzg8d",
                  form: e.target,
                  public_key: "XROQkLsbKgfMPUjh6",
                  setIsLoading: setIsLoading,
                });
              }}
            >
              <InputDemo
                placeholder="Jane"
                className="mb-5"
                inputClassName="py-[1.2rem] rounded-[0] bg-white text-dark"
                name="name"
                type="text"
                label="Your Name"
                required={true}
                value={state.name}
                callback={(e) => handleOnChange(e)}
              />
              <InputDemo
                placeholder="jane@company.com"
                className="mb-5"
                inputClassName="py-[1.2rem] rounded-[0] bg-white text-dark"
                name="submitted_email"
                type="text"
                label="Your Email"
                required={true}
                value={state.submitted_email}
                callback={(e) => handleOnChange(e)}
              />
              <InputDemo
                placeholder="‪(999) 999-9999"
                className="mb-5"
                inputClassName="py-[1.2rem] rounded-[0] bg-white text-dark"
                name="phone"
                type="tel"
                label="Your Phone"
                required={true}
                value={state.phone}
                callback={(e) => handleOnChange(e)}
              />

              <TextareaDemo
                label="Describe your project"
                placeholder="Your answer"
                className="mb-5"
                textareaClassName="py-[0.5rem] min-h-[100px]  rounded-[0] bg-white text-dark"
                name="description"
                type="text"
                // required={true}
                value={state.description}
                callback={(e) => handleOnChange(e)}
              />

              <input
                type="text"
                name="image"
                defaultValue="https://shelltedpete.vercel.app/assets/images/logo.jpg"
                className="hidden"
              />
              <input type="text" name="CONTENT" className="hidden" />
              <input type="text" name="to_email" defaultValue="info@shelltedpete.com" className="hidden" />
              <ButtonDemo disabled={isLoading} text="Submit" className="!mr-auto py-5" />
            </form>
          </div>
        </div>
      </div>
    </header>
  );
};

const RemodelingSection = () => {
  return (
    <section className="remodeling" id="services">
      <div className="container">
        <h5 className="border-b block border-dark mb-10 max-w-fit mx-auto">
          <a target="_blank" href="sms:+19805331889" className="font-bold">
            contact us by text ‪(980) 533-1889
          </a>
        </h5>
        <div className="group grid lg:grid-cols-3 gap-[30px]  justify-center">
          <div className="remodel max-w-[500px]">
            <div className="remodel-cover relative w-full h-0 pt-[56.25%] shadow rounded-md overflow-hidden mb-[1rem]">
              <Image
                width={1000}
                height={1000}
                src={bathroomImage}
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <h4 className="text-lg  mb-1">Bathroom Remodel</h4>
            <p className="text-secondary mb-5">Our bathroom (shower + bath) remodeling services in Asheville NC include:</p>
            <ul className=" max-w-[400px] ml-4">
              <li className="mb-3 text-secondary flex gap-2">
                <div className=" dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Ceiling Upgrades: </strong>
                  Installation of moisture-resistant materials and modern finishes.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className=" dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Flooring Replacement: </strong>
                  Durable, waterproof flooring options like tiles, luxury vinyl, or stone.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className=" dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Wall Renovation: </strong>
                  Fresh paint, elegant tiling, and moisture-protective wall paneling.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className=" dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Lighting Enhancements: </strong>
                  Layered lighting solutions for functionality and ambiance.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className=" dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Sink Installation: </strong>
                  Upgrading to stylish, functional sinks that fit your space and needs.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className=" dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Shower Remodel: </strong>
                  Custom showers with modern fixtures, glass doors, and stylish tiles.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className=" dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Toilet Replacement: </strong>
                  Installing efficient, comfortable toilets that fit your bathroom’s design.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className=" dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Flood Damage Restoration: </strong>
                  Comprehensive repairs to restore and modernize damaged spaces.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className=" dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  We offer full-service remodeling to create a beautiful, functional bathroom tailored to your style and
                  preferences.
                </div>
              </li>
            </ul>
          </div>

          <div className="remodel max-w-[500px]">
            <div className="remodel-cover relative w-full h-0 pt-[56.25%] shadow rounded-md overflow-hidden mb-[1rem]">
              <Image
                width={1000}
                height={1000}
                src={handymanImage}
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <h4 className="text-lg mb-1">Handyman Services</h4>
            <p className="text-secondary mb-5">We offer handyman services in Asheville NC such as:</p>
            <ul className="max-w-[400px] mx-auto">
              <li className="mb-3 text-secondary flex gap-2">
                <div className="dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  {" "}
                  <strong className="text-dark">Deck building and repair</strong>
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className="dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Ceiling Upgrades: </strong>
                  Installation of durable, moisture-resistant materials and sleek finishes.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className="dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Flooring Replacement: </strong>
                  Options like hardwood, tile, or luxury vinyl for a durable and stylish foundation.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className="dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Wall Renovation: </strong>
                  Fresh paint, custom backsplashes, and innovative wall treatments to elevate your space.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className="dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Lighting Enhancements: </strong>
                  Layered lighting solutions that improve both functionality and ambiance.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className="dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Sink Installation: </strong>
                  Upgrading to modern, functional sinks with stylish designs to match your kitchen or bathroom.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className="dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Cabinetry & Countertops: </strong>
                  Custom cabinetry and high-quality countertops for improved storage and style.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className="dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Flood Damage Restoration: </strong>
                  Expert repairs to restore and modernize spaces affected by water damage.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className="dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Painting Services: </strong>
                  Interior and exterior painting for various areas of the home, including bedrooms, living rooms, kitchens,
                  bathrooms, and trim, for a fresh and polished look.
                </div>
              </li>
            </ul>
          </div>

          <div className="remodel max-w-[500px]">
            <div className="remodel-cover relative w-full h-0 pt-[56.25%] shadow rounded-md overflow-hidden mb-[1rem]">
              <Image
                width={1000}
                height={1000}
                src={kitchenImage}
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
            </div>
            <h4 className="text-lg mb-1">Kitchen Remodel</h4>
            <p className="text-secondary mb-5">Our kitchen remodeling services in Asheville NC include:</p>
            <ul className="max-w-[400px] mx-auto">
              <li className="mb-3 text-secondary flex gap-2">
                <div className="dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Ceiling Upgrades: </strong>
                  Installation of durable, moisture-resistant materials and sleek finishes.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className="dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Flooring Replacement: </strong>
                  Options like hardwood, tile, or luxury vinyl for a durable and stylish foundation.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className="dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Wall Renovation: </strong>
                  Fresh paint, custom backsplashes, and innovative wall treatments to elevate your space.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className="dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Lighting Enhancements: </strong>
                  Layered lighting solutions that improve both functionality and ambiance.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className="dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Sink Installation: </strong>
                  Upgrading to modern, functional sinks with stylish designs to match your kitchen's aesthetic.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className="dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Cabinetry & Countertops: </strong>
                  Custom cabinetry and high-quality countertops for improved storage and style.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className="dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Appliance Installation: </strong>
                  Installing new, energy-efficient appliances to enhance your kitchen's functionality.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className="dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  <strong className="text-dark">Flood Damage Restoration: </strong>
                  Expert repairs to restore and modernize spaces affected by water damage.
                </div>
              </li>
              <li className="mb-3 text-secondary flex gap-2">
                <div className="dot w-1 h-1 bg-dark mt-2 rounded"></div>
                <div className="flex-1">
                  We provide comprehensive remodeling services to transform your kitchen into a beautiful, functional space
                  designed to meet your needs.
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-7 gap-y-10 flex-wrap justify-center max-w-[500px] mx-auto mt-[100px] mb-[30px] ">
          <div className="flex items-center font-sans   justify-between max-w-[180px] w-full">
            <div className="h-[80px]">{leadingLeftIcon}</div>
            <div className="text-center  ">
              <div className=" text-sm text-gray-500 mb-1">Top Quality</div>
              <div className="font-bold uppercase text-sm text-secondary text-nowrap">Trusted Brand</div>
              <div className="text-gray-500 text-sm">2025</div>
            </div>
            <div className="h-[80px]">{leadingRightIcon}</div>
          </div>

          <div className="flex items-center font-sans   justify-between max-w-[180px] w-full">
            <div className="h-[80px]">{leadingLeftIcon}</div>
            <div className="text-center  ">
              <div className=" text-sm text-gray-500 mb-1">Elite Build</div>
              <div className="font-bold uppercase text-sm text-secondary text-nowrap">Mark of Trust</div>
              <div className="text-gray-500 text-sm">2025</div>
            </div>
            <div className="h-[80px]">{leadingRightIcon}</div>
          </div>

          <div className="flex items-center font-sans   justify-between max-w-[180px] w-full">
            <div className="h-[80px]">{leadingLeftIcon}</div>
            <div className="text-center  ">
              <div className=" text-sm text-gray-500 mb-1">Pure Craft</div>
              <div className="font-bold uppercase text-sm text-secondary text-nowrap">Choice of Experts</div>
              <div className="text-gray-500 text-sm">2025</div>
            </div>
            <div className="h-[80px]">{leadingRightIcon}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ApartmentSection = () => {
  return (
    <section className="apratment md:!min-h-[100vh] !h-0 md:!h-auto !pt-[100%] md:!pt-[0]  relative" id="apartment">
      <Image width={4825} height={3225} src={coverImage} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />
    </section>
  );
};

const AboutUsSection = () => {
  return (
    <section className="about-us" id="about-us">
      <div className="container md:max-w-[1280px]">
        <div className="group">
          <div className="grid md:grid-cols-[1.5fr_1fr] items-center gap-x-[10%]">
            <div className="max-w-[500px] relative ">
              <div className="h-[110px] absolute top-[-20px] z-[-1] left-0 text-[rgba(227,233,239,.7)]">{quotesIcon}</div>
              <h4 className="text-2xl font-bold font-sans mb-5">Message From The Owner</h4>
              <p>
                <strong>Hi, I’m Dmitriy Fadyukhin, </strong> the founder and owner of
                <strong> Shelltedpete. </strong> I named my construction company after my kids: Shell, Ted and Pete.
                <br />
                <br />I look forward to working with you and your family on any home improvement project, from deck building to
                flooring to bathroom and kitchen remodel projects.
                <br />
                <br />
                <strong>Reach out anytime.</strong>
              </p>
              <br />
              <h6 className="text-right text-sm mr-2 italic">Dmitriy Fadyukin, Owner & Project Lead</h6>
            </div>

            <div>
              <div className="rounded-md overflow-hidden relative h-0 pt-[110%] w-full ">
                <Image
                  width={1000}
                  height={1000}
                  src={ownerImage}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <div className="hidden md:block">
          <div className="hidden md:block">
            <div className="w-full h-px bg-[rgba(227,233,239,.9)]"></div>
          </div>
          <br />
          <br />
          <br />
          <br />
        </div>

        <div className="group">
          <div className="grid md:grid-cols-[1.5fr_1fr] items-center gap-x-[10%] mb-2">
            <div className="max-w-[500px] relative md:order-2">
              <div className="h-[110px] absolute top-[-20px] z-[-1] left-0 text-[rgba(227,233,239,.7)]">{quotesIcon}</div>
              <h4 className="text-2xl font-bold font-sans mb-5">Meet Our Crew</h4>
              <p>
                <strong>
                  Our Crew is hardworking, great with customers, well-mannered, respectful, and dedicated to high quality work.{" "}
                </strong>
                <br />
                <br />
                We take pride in each project and always strive for excellence. From start to finish, you can trust that our team
                will handle your home improvement needs with care and expertise.
              </p>
            </div>
            <div className=" md:order-1">
              <div className="rounded-md overflow-hidden relative h-0 pt-[60%] w-full ">
                <Image
                  width={1000}
                  height={1000}
                  src={teamImage}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonial = () => {
  return (
    <section className="">
      {/* <div className="line absolute h-px w-full bg-[rgba(227,233,239,1)] top-[50%] transform-[translateY(-50%)]"></div> */}
      <div className="container">
        <h2 className="text-2xl  font-sans  mb-5 text-center font-bold ">
          Google Reviews for Shelltedpete – Asheville Handyman Services
        </h2>
        <div className="testimonial  shadow relative bg-[#151515] text-white   mx-auto px-8 sm:px-15 py-15 lg:py-28">
          <div className="testimonial-content max-w-[800px] mx-auto">
            <div className="stars flex justify-center  mb-5">
              <div className="w-[20px] fill-success">{starIcon}</div>
              <div className="w-[20px] fill-success">{starIcon}</div>
              <div className="w-[20px] fill-success">{starIcon}</div>
              <div className="w-[20px] fill-success">{starIcon}</div>
              <div className="w-[20px] fill-success">{starIcon}</div>
            </div>
            <h3 className="text-center font-bold text-[1.2rem] tracking-wide mb-5">"Great Service"</h3>
            <p className="testimonial-text text-center mb-3">
              {/* <div className="h-[18px]  top-[-20px] z-[-1] left-0 text-white mb-2">{quotesIcon}</div> */}
              Dmitriy is a highly skilled professional capable of completing a variety of jobs. He is a great communicator, shows
              up on time, keeps a tidy work space and is transparent with his pricing. My clients have all been pleased with his
              work.
            </p>
            <br />
            <h2 className="text-center font-thin text-success">Stacey Enos</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Template;
