export default function ServicesSec() {
  return (
    <section>
      <div className="grid h-64 place-content-center bg-[url('/assets/images/services-bg.jpg')] bg-cover bg-center bg-no-repeat sm:px-4">
        <h2 className="mb-2 text-center text-[2.5rem] font-semibold text-white md:text-[1.75rem]">Our Services</h2>
        <p className="text-center text-base font-normal text-gray-100 md:px-3 sm:text-sm">
          Transform your brand with our innovative digital solutions that captivate and engage your audience.
        </p>
      </div>

      {/* SERVICES */}
      <div className="flex flex-wrap">
        {/* SERVICE 1 */}
        <div className="grid min-w-[21.3rem] flex-1 content-between p-10 ring-1 ring-gray-800 sm:min-h-[21.5rem] sm:p-[1.875rem]">
          <div>
            <div className="flex flex-col sm:mb-6 sm:flex-row sm:items-center sm:gap-3">
              <div className="primary-icon-50 sm:primary-icon-sm mb-7 sm:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 fill-primary-900">
                  <path
                    fillRule="evenodd"
                    d="M20.599 1.5c-.376 0-.743.111-1.055.32l-5.08 3.385a18.747 18.747 0 0 0-3.471 2.987 10.04 10.04 0 0 1 4.815 4.815 18.748 18.748 0 0 0 2.987-3.472l3.386-5.079A1.902 1.902 0 0 0 20.599 1.5Zm-8.3 14.025a18.76 18.76 0 0 0 1.896-1.207 8.026 8.026 0 0 0-4.513-4.513A18.75 18.75 0 0 0 8.475 11.7l-.278.5a5.26 5.26 0 0 1 3.601 3.602l.502-.278ZM6.75 13.5A3.75 3.75 0 0 0 3 17.25a1.5 1.5 0 0 1-1.601 1.497.75.75 0 0 0-.7 1.123 5.25 5.25 0 0 0 9.8-2.62 3.75 3.75 0 0 0-3.75-3.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-2xl font-semibold text-white sm:text-xl">Design</span>
            </div>
            <p className="mb-12 mt-4 text-base font-normal text-gray-100 md:mb-8 sm:text-sm sm:leading-6">
              At SquareUp, our design team is passionate about creating stunning, user-centric designs that captivate your audience and
              elevate your brand. We believe that great design is not just about aesthetics; it&apos;s about creating seamless and intuitive
              user experiences.
            </p>
          </div>
          <a
            href="#"
            className="h-[3.25rem] self-end rounded-md bg-gray-800 p-4 text-center text-sm font-medium text-white hover:bg-gray-700 sm:mt-3"
          >
            Learn More
          </a>
        </div>
        {/* SERVICE 2  */}
        <div className="grid min-w-[21.3rem] flex-1 content-between p-10 ring-1 ring-gray-800 sm:min-h-[21.5rem] sm:p-[1.875rem]">
          <div>
            <div className="flex flex-col sm:mb-6 sm:flex-row sm:items-center sm:gap-3">
              <div className="primary-icon-50 sm:primary-icon-sm mb-7 sm:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 fill-primary-900">
                  <path d="M11.25 5.337c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.036 1.007-1.875 2.25-1.875S15 2.34 15 3.375c0 .369-.128.713-.349 1.003-.215.283-.401.604-.401.959 0 .332.278.598.61.578 1.91-.114 3.79-.342 5.632-.676a.75.75 0 0 1 .878.645 49.17 49.17 0 0 1 .376 5.452.657.657 0 0 1-.66.664c-.354 0-.675-.186-.958-.401a1.647 1.647 0 0 0-1.003-.349c-1.035 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401.31 0 .557.262.534.571a48.774 48.774 0 0 1-.595 4.845.75.75 0 0 1-.61.61c-1.82.317-3.673.533-5.555.642a.58.58 0 0 1-.611-.581c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.035-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959a.641.641 0 0 1-.658.643 49.118 49.118 0 0 1-4.708-.36.75.75 0 0 1-.645-.878c.293-1.614.504-3.257.629-4.924A.53.53 0 0 0 5.337 15c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.036 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.369 0 .713.128 1.003.349.283.215.604.401.959.401a.656.656 0 0 0 .659-.663 47.703 47.703 0 0 0-.31-4.82.75.75 0 0 1 .83-.832c1.343.155 2.703.254 4.077.294a.64.64 0 0 0 .657-.642Z" />
                </svg>
              </div>
              <span className="text-2xl font-semibold text-white sm:text-xl">Engineering</span>
            </div>
            <p className="mb-12 mt-4 text-base font-normal text-gray-100 md:mb-8">
              Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital
              solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your
              specific needs.
            </p>
          </div>
          <a
            href="#"
            className="h-[3.25rem] self-end rounded-md bg-gray-800 p-4 text-center text-sm font-medium text-white hover:bg-gray-700 sm:mt-3"
          >
            Learn More
          </a>
        </div>
        {/* SERVICE 3 */}
        <div className="grid min-w-[21.3rem] flex-1 content-between p-10 ring-1 ring-gray-800 sm:min-h-[21.5rem] sm:p-[1.875rem]">
          <div>
            <div className="flex flex-col sm:mb-6 sm:flex-row sm:items-center sm:gap-3">
              <div className="primary-icon-50 sm:primary-icon-sm mb-7 sm:mb-0">
                <svg viewBox="0 0 27 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-primary-900">
                  <path d="M9.79725 12.0473C9.79725 11.9415 9.85134 11.8463 9.93781 11.7405L14.4041 6.24917C14.7393 5.82595 15.3017 6.11163 15.1071 6.63008L13.6363 10.492H16.3939C16.5994 10.492 16.7833 10.6507 16.7833 10.8412C16.7833 10.947 16.7292 11.0634 16.6318 11.1585L12.1764 16.6392C11.8411 17.0625 11.268 16.7768 11.4627 16.269L12.9442 12.3965H10.1757C9.97029 12.3965 9.79725 12.2484 9.79725 12.0473ZM3.97917 19.7288H22.6878C24.9589 19.7288 26.0835 18.639 26.0835 16.4594V6.22801C26.0835 4.04842 24.9589 2.95862 22.6878 2.95862H21.1954V1.54083C21.1954 0.736705 20.7196 0.25 19.887 0.25H16.6967C15.8748 0.25 15.399 0.736705 15.399 1.54083V2.95862H11.2788V1.54083C11.2788 0.736705 10.8029 0.25 9.97029 0.25H6.78006C5.94737 0.25 5.48235 0.736705 5.48235 1.54083V2.95862H3.97917C1.71899 2.95862 0.583496 4.04842 0.583496 6.22801V16.4594C0.583496 18.639 1.71899 19.7288 3.97917 19.7288Z" />
                </svg>
              </div>
              <span className="text-2xl font-semibold text-white sm:text-xl">Project Management</span>
            </div>
            <p className="mb-12 mt-4 text-base font-normal text-gray-100 md:mb-8">
              Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your
              specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep
              you informed throughout the development process.
            </p>
          </div>
          <a
            href="#"
            className="h-[3.25rem] self-end rounded-md bg-gray-800 p-4 text-center text-sm font-medium text-white hover:bg-gray-700 sm:mt-3"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
