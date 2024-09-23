export default function FaqSec() {
  return (
    <section>
      <div className="grid h-64 place-content-center bg-[url('/assets/images/faq-bg.jpg')] bg-cover bg-center bg-no-repeat sm:px-4">
        <h2 className="mb-2 text-center text-[2.5rem] font-semibold text-white sm:text-[1.75rem]">Frequently Asked Questions</h2>
        <p className="max-w-3xl text-center text-base font-normal text-gray-100 sm:text-sm">
          Still you have any questions? Contact our Team via hello@squareup.com
        </p>
      </div>
      {/* ACCORDION SECTION  */}
      <div className="flex ring-1 ring-gray-800">
        {/* LEFT ACCORDION  */}
        <div className="w-1/2 md:w-full">
          {/* ITEM 1  */}
          <div className="px-[2.5rem] py-[1.875rem] ring-1 ring-gray-800 lg:px-6">
            <div className="flex items-center">
              <input type="radio" id="faq-r-1" name="faq-button" className="faq-radio appearance-none" defaultChecked />
              <div className="primary-icon-50 lg:primary-icon-sm mr-6">
                <span className="text-2xl font-medium text-white lg:text-[1.25rem]">01</span>
              </div>
              <div className="faq-title-wrapper flex w-full items-center justify-between">
                <h1 className="text-lg font-medium text-white lg:text-base">What services does SquareUp provide?</h1>
                <label className="cursor-pointer" htmlFor="faq-r-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 fill-white transition-all"
                  >
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                  </svg>
                </label>
              </div>
            </div>
            <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
              <p className="ml-20 text-base font-normal text-gray-100 lg:text-sm md:ml-0 sm:mt-4">
                SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience
                design, web development, mobile app development, custom software development, branding and identity, and more.
              </p>
            </div>
          </div>
          {/* ITEM 2  */}
          <div className="px-[2.5rem] py-[1.875rem] ring-1 ring-gray-800 lg:px-6">
            <div className="flex items-center">
              <input type="radio" id="faq-r-2" name="faq-button" className="faq-radio appearance-none" />
              <div className="primary-icon-50 lg:primary-icon-sm mr-6">
                <span className="text-2xl font-medium text-white lg:*:text-[1.25rem]">02</span>
              </div>
              <div className="faq-title-wrapper flex w-full items-center justify-between">
                <h1 className="text-lg font-medium text-white lg:text-base">How can SquareUp help my business?</h1>
                <label className="cursor-pointer" htmlFor="faq-r-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 fill-white transition-all"
                  >
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                  </svg>
                </label>
              </div>
            </div>
            <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
              <p className="ml-20 text-base font-normal text-gray-100 lg:text-sm md:ml-0 sm:mt-4">
                SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience
                design, web development, mobile app development, custom software development, branding and identity, and more.
              </p>
            </div>
          </div>
          {/* ITEM 3  */}
          <div className="px-[2.5rem] py-[1.875rem] ring-1 ring-gray-800 lg:px-6">
            <div className="flex items-center">
              <input type="radio" id="faq-r-3" name="faq-button" className="faq-radio appearance-none" />
              <div className="primary-icon-50 lg:primary-icon-sm mr-6">
                <span className="text-2xl font-medium text-white lg:*:text-[1.25rem]">03</span>
              </div>
              <div className="faq-title-wrapper flex w-full items-center justify-between">
                <h1 className="text-lg font-medium text-white lg:text-base">What industries does SquareUp work with?</h1>
                <label className="cursor-pointer" htmlFor="faq-r-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 fill-white transition-all"
                  >
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                  </svg>
                </label>
              </div>
            </div>
            <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
              <p className="ml-20 text-base font-normal text-gray-100 lg:text-sm md:ml-0 sm:mt-4">
                SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience
                design, web development, mobile app development, custom software development, branding and identity, and more.
              </p>
            </div>
          </div>
          {/* ITEM 4  */}
          <div className="px-[2.5rem] py-[1.875rem] ring-1 ring-gray-800 lg:px-6">
            <div className="flex items-center">
              <input type="radio" id="faq-r-4" name="faq-button" className="faq-radio appearance-none" />
              <div className="primary-icon-50 lg:primary-icon-sm mr-6">
                <span className="text-2xl font-medium text-white lg:*:text-[1.25rem]">04</span>
              </div>
              <div className="faq-title-wrapper flex w-full items-center justify-between">
                <h1 className="text-lg font-medium text-white lg:text-base">How long does it take to complete a project with SquareUp?</h1>
                <label className="cursor-pointer" htmlFor="faq-r-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 fill-white transition-all"
                  >
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                  </svg>
                </label>
              </div>
            </div>
            <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
              <p className="ml-20 text-base font-normal text-gray-100 lg:text-sm md:ml-0 sm:mt-4">
                SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience
                design, web development, mobile app development, custom software development, branding and identity, and more.
              </p>
            </div>
          </div>
        </div>
        {/* RIGHT ACCORDION */}
        <div className="w-1/2 md:hidden">
          {/* ITEM 1  */}
          <div className="px-[2.5rem] py-[1.875rem] ring-1 ring-gray-800 lg:px-6">
            <div className="flex items-start">
              <input type="radio" id="faq-r-5" name="faq-button2" className="faq-radio appearance-none" />
              <div className="primary-icon-50 lg:primary-icon-sm mr-6">
                <span className="text-2xl font-medium text-white lg:text-[1.25rem]">05</span>
              </div>
              <div className="faq-title-wrapper flex w-full items-center justify-between">
                <h1 className="text-lg font-medium text-white lg:text-base">
                  Do you offer ongoing support and maintenance after the project is completed?
                </h1>
                <label className="cursor-pointer" htmlFor="faq-r-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 fill-white transition-all"
                  >
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                  </svg>
                </label>
              </div>
            </div>
            <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
              <p className="ml-20 text-base font-normal text-gray-100 lg:text-sm md:ml-0">
                SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience
                design, web development, mobile app development, custom software development, branding and identity, and more.
              </p>
            </div>
          </div>
          {/* ITEM 2  */}
          <div className="px-[2.5rem] py-[1.875rem] ring-1 ring-gray-800 lg:px-6">
            <div className="flex items-start">
              <input type="radio" id="faq-r-6" name="faq-button2" className="faq-radio appearance-none" />
              <div className="primary-icon-50 lg:primary-icon-sm mr-6">
                <span className="text-2xl font-medium text-white lg:text-[1.25rem]">06</span>
              </div>
              <div className="faq-title-wrapper flex w-full items-center justify-between">
                <h1 className="text-lg font-medium text-white lg:text-base">
                  Can you work with existing design or development frameworks?
                </h1>
                <label className="cursor-pointer" htmlFor="faq-r-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 fill-white transition-all"
                  >
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                  </svg>
                </label>
              </div>
            </div>
            <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
              <p className="ml-20 text-base font-normal text-gray-100 lg:text-sm md:ml-0">
                SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience
                design, web development, mobile app development, custom software development, branding and identity, and more.
              </p>
            </div>
          </div>
          {/* ITEM 3 */}
          <div className="px-[2.5rem] py-[1.875rem] ring-1 ring-gray-800 lg:px-6">
            <div className="flex items-start">
              <input type="radio" id="faq-r-7" name="faq-button2" className="faq-radio appearance-none" />
              <div className="primary-icon-50 lg:primary-icon-sm mr-6">
                <span className="text-2xl font-medium text-white lg:text-[1.25rem]">07</span>
              </div>
              <div className="faq-title-wrapper flex w-full items-center justify-between">
                <h1 className="text-lg font-medium text-white lg:text-base">How involved will I be in the project development process?</h1>
                <label className="cursor-pointer" htmlFor="faq-r-7">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 fill-white transition-all"
                  >
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                  </svg>
                </label>
              </div>
            </div>
            <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
              <p className="ml-20 text-base font-normal text-gray-100 lg:text-sm md:ml-0">
                SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience
                design, web development, mobile app development, custom software development, branding and identity, and more.
              </p>
            </div>
          </div>
          {/* ITEM 4 */}
          <div className="px-[2.5rem] py-[1.875rem] ring-1 ring-gray-800 lg:px-6">
            <div className="flex items-start">
              <input type="radio" id="faq-r-8" name="faq-button2" className="faq-radio appearance-none" />
              <div className="primary-icon-50 lg:primary-icon-sm mr-6">
                <span className="text-2xl font-medium text-white lg:text-[1.25rem]">08</span>
              </div>
              <div className="faq-title-wrapper flex w-full items-center justify-between">
                <h1 className="text-lg font-medium text-white lg:text-base">Can you help with website or app maintenance and updates?</h1>
                <label className="cursor-pointer" htmlFor="faq-r-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5 fill-white transition-all"
                  >
                    <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
                  </svg>
                </label>
              </div>
            </div>
            <div className="accordion-content h-0 overflow-hidden transition-all duration-300">
              <p className="ml-20 text-base font-normal text-gray-100 lg:text-sm md:ml-0">
                SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience
                design, web development, mobile app development, custom software development, branding and identity, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
