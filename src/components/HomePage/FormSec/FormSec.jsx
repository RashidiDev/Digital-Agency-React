import { useState } from "react";

export default function FormSec() {
  const [rangeValue1, setRangeValue1] = useState(10);
  const [rangeValue2, setRangeValue2] = useState(50);

  const rangeInput1Handler = (e) => {
    let targetvalue = e.target.value;
    if (rangeValue2 - targetvalue <= 0) {
      return;
    }
    setRangeValue1(targetvalue);
  };

  const rangeInput2Handler = (e) => {
    let targetvalue = e.target.value;
    if (rangeValue1 - targetvalue >= 0) {
      return;
    }
    setRangeValue2(targetvalue);
  };

  return (
    <section id="contactUs">
      <div className="grid h-[30rem] place-content-center justify-items-center gap-10 bg-[url('/assets/images/contact-bg.jpg')] bg-cover bg-center bg-no-repeat sm:px-4">
        <img src="/assets/images/Abstract logo.png" alt="website logo" className="aspect-square w-[3.75rem]" />
        <div>
          <h2 className="mb-2 text-center text-[1.875rem] font-semibold text-white sm:text-2xl">
            Thank you for your Interest in SquareUp.
          </h2>
          <p className="max-w-3xl text-center text-base font-normal text-gray-100 sm:text-sm">
            We would love to hear from you and discuss how we can help bring your digital ideas to life. Here are the different ways you can
            get in touch with us.
          </p>
        </div>
        <a href="#" className="w-fit rounded-md bg-primary-900 px-6 py-[0.875rem] text-sm font-medium text-gray-900 hover:bg-primary-700">
          Start Project
        </a>
      </div>

      {/* FORM */}
      <form action="#" className="mx-auto grid max-w-[53rem] gap-[1.875rem] border border-gray-800 p-[3.75rem] md:p-[1.5rem]">
        <div className="flex justify-stretch gap-[1.875rem] md:flex-col">
          <div className="max-w-[53%] flex-grow rounded-md border border-gray-800 bg-[#1e1e1e] px-[1.875rem] py-5 md:max-w-full">
            <label htmlFor="name" className="mb-4 block text-lg font-medium text-white sm:text-base">
              Full Name
            </label>
            <input
              className="w-full border-b border-gray-700 bg-[#1e1e1e] pb-1 text-base font-normal text-white outline-none placeholder:text-gray-400"
              type="text"
              name="contacts"
              id="name"
              placeholder="Type here"
              required
            />
          </div>
          <div className="max-w-[47%] flex-grow rounded-md border border-gray-800 bg-[#1e1e1e] px-[1.875rem] py-5 md:max-w-full">
            <label htmlFor="email" className="mb-4 block text-lg font-medium text-white sm:text-base">
              Email
            </label>
            <input
              type="email"
              name="contacts"
              id="email"
              className="w-full border-b border-gray-700 bg-[#1e1e1e] pb-1 text-base font-normal text-white outline-none placeholder:text-gray-400"
              placeholder="Type here"
              required
            />
          </div>
        </div>

        {/* CHECKBOX SECTION  */}
        <div className="rounded-md border border-gray-800 bg-[#1e1e1e] px-[1.875rem] py-5">
          <span className="mb-4 block text-lg font-medium text-white sm:text-base" htmlFor="contactOptions">
            Why are you contacting us?
          </span>
          <div className="grid grid-cols-2 grid-rows-2 justify-items-start gap-y-6 sm:grid-cols-1">
            {/* CHECKBOX 1 */}
            <div className="flex items-center gap-[0.625rem]">
              <label
                htmlFor="contactOption1"
                className="relative inline-block h-7 w-7 cursor-pointer select-none rounded border border-gray-700 bg-gray-800"
              >
                <input type="checkbox" name="contacts" id="contactOption1" className="form-check-input peer hidden" />
                {/* cehck icon */}
                <span className="form-input-check-i absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 fill-primary-900">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </label>
              <span className="font-normal text-primary-100">Web Design</span>
            </div>
            {/* CHECKBOX 2 */}
            <div className="flex items-center gap-[0.625rem]">
              <label
                htmlFor="contactOption2"
                className="relative inline-block h-7 w-7 cursor-pointer select-none rounded border border-gray-700 bg-gray-800"
              >
                <input type="checkbox" name="contacts" id="contactOption2" className="form-check-input peer hidden" />
                {/* check icon */}
                <span className="form-input-check-i absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 fill-primary-900">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </label>
              <span className="font-normal text-primary-100">Collaboration</span>
            </div>
            {/* CHECKBOX 3 */}
            <div className="flex items-center gap-[0.625rem]">
              <label
                htmlFor="contactOption3"
                className="relative inline-block h-7 w-7 cursor-pointer select-none rounded border border-gray-700 bg-gray-800"
              >
                <input type="checkbox" name="contacts" id="contactOption3" className="form-check-input peer hidden" />
                {/* check icon */}
                <span className="form-input-check-i absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 fill-primary-900">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </label>
              <span className="font-normal text-primary-100">Moblie App Design</span>
            </div>
            {/* CHECKBOX 4 */}
            <div className="flex items-center gap-[0.625rem]">
              <label
                htmlFor="contactOption4"
                className="relative inline-block h-7 w-7 cursor-pointer select-none rounded border border-gray-700 bg-gray-800"
              >
                <input type="checkbox" name="contacts" id="contactOption4" className="form-check-input peer hidden" />
                {/* check icon */}
                <span className="form-input-check-i absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 peer-checked:opacity-100">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 fill-primary-900">
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </label>
              <span className="font-normal text-primary-100">Others</span>
            </div>
          </div>
        </div>

        <div className="rounded-md border border-gray-800 bg-[#1e1e1e] px-[1.875rem] py-5">
          <label className="mb-4 block text-lg font-medium text-white" htmlFor="budgetSelect1">
            Your Budget
          </label>
          <span className="font-normal text-gray-100">Slide to indicate your budget range</span>
          <div className="relative mt-[1.875rem]">
            <input
              onChange={rangeInput1Handler}
              type="range"
              name="contacts"
              id="budgetSelect1"
              value={rangeValue1}
              max="90"
              step="10"
              className="range-input absolute left-0 top-0 w-full"
            />
            <input
              onChange={rangeInput2Handler}
              type="range"
              name="contacts"
              id="budgetSelect2"
              value={rangeValue2}
              max="90"
              step="10"
              className="range-input absolute left-0 top-0 w-full"
            />
          </div>
        </div>
        <div className="rounded-md border border-gray-800 bg-[#1e1e1e] px-[1.875rem] py-5">
          <label className="mb-4 block text-lg font-medium text-white" htmlFor="message">
            Your Message
          </label>
          <textarea
            name="contacts"
            id="message"
            rows="2"
            placeholder="Type here"
            className="w-full border-b border-gray-700 bg-[#1e1e1e] pb-1 text-base font-normal text-white outline-none placeholder:text-gray-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="justify-self-center rounded-md bg-primary-900 px-9 py-[0.875rem] text-sm font-medium text-gray-900 hover:bg-primary-700 sm:w-auto sm:justify-self-stretch"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
