export default function FooterSec() {
  return (
    <footer className="border-t border-gray-800 px-[5%]">
      {/* TOP SECTION */}
      <div className="flex items-center justify-between py-10 md:flex-col md:gap-[1.875rem]">
        <a href="#" className="shrink-0 cursor-pointer">
          <img src="/assets/images/Logo.png" alt="website logo footer" />
        </a>
        <ul className="flex flex-wrap items-center justify-center font-semibold text-white">
          <li className="mx-1 cursor-pointer rounded-md px-5 py-3 text-sm hover:bg-gray-800">
            <a href="#">Home</a>
          </li>
          <li className="mx-1 cursor-pointer rounded-md px-5 py-3 text-sm hover:bg-gray-800">
            <a href="#">Services</a>
          </li>
          <li className="mx-1 cursor-pointer rounded-md px-5 py-3 text-sm hover:bg-gray-800">
            <a href="#">Work</a>
          </li>
          <li className="mx-1 cursor-pointer rounded-md px-5 py-3 text-sm hover:bg-gray-800">
            <a href="#">Process</a>
          </li>
          <li className="mx-1 cursor-pointer rounded-md px-5 py-3 text-sm hover:bg-gray-800">
            <a href="#">About</a>
          </li>
          <li className="mx-1 cursor-pointer rounded-md px-5 py-3 text-sm hover:bg-gray-800">
            <a href="#">Careers</a>
          </li>
        </ul>
        <div className="flex items-center gap-[0.625rem] rounded-lg border border-gray-800 p-[0.625rem] md:flex-col md:gap-4 sm:w-full">
          <span className="mx-[0.625rem] font-medium text-white md:text-base">Stay Connected</span>
          <div className="flex items-center gap-[0.625rem]">
            <a href="#" className="footer-icon inline-block">
              <i>
                <svg className="h-5 w-5 fill-primary-900" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" />
                </svg>
              </i>
            </a>
            <a href="#" className="footer-icon inline-block">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-primary-900" viewBox="0,0,256,256">
                  <g transform="translate(-23.04,-23.04) scale(1.18,1.18)">
                    <g transform="scale(5.12,5.12)">
                      <path d="M11,4c-3.866,0 -7,3.134 -7,7v28c0,3.866 3.134,7 7,7h28c3.866,0 7,-3.134 7,-7v-28c0,-3.866 -3.134,-7 -7,-7zM13.08594,13h7.9375l5.63672,8.00977l6.83984,-8.00977h2.5l-8.21094,9.61328l10.125,14.38672h-7.93555l-6.54102,-9.29297l-7.9375,9.29297h-2.5l9.30859,-10.89648zM16.91406,15l14.10742,20h3.06445l-14.10742,-20z"></path>
                    </g>
                  </g>
                </svg>
              </i>
            </a>
            <a href="#" className="footer-icon inline-block">
              <i>
                <svg className="h-5 w-5 fill-primary-900" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.5195 0H1.47656C0.660156 0 0 0.644531 0 1.44141V18.5547C0 19.3516 0.660156 20 1.47656 20H18.5195C19.3359 20 20 19.3516 20 18.5586V1.44141C20 0.644531 19.3359 0 18.5195 0ZM5.93359 17.043H2.96484V7.49609H5.93359V17.043ZM4.44922 6.19531C3.49609 6.19531 2.72656 5.42578 2.72656 4.47656C2.72656 3.52734 3.49609 2.75781 4.44922 2.75781C5.39844 2.75781 6.16797 3.52734 6.16797 4.47656C6.16797 5.42187 5.39844 6.19531 4.44922 6.19531ZM17.043 17.043H14.0781V12.4023C14.0781 11.2969 14.0586 9.87109 12.5352 9.87109C10.9922 9.87109 10.7578 11.0781 10.7578 12.3242V17.043H7.79688V7.49609H10.6406V8.80078H10.6797C11.0742 8.05078 12.043 7.25781 13.4844 7.25781C16.4883 7.25781 17.043 9.23438 17.043 11.8047V17.043V17.043Z" />
                </svg>
              </i>
            </a>
          </div>
        </div>
      </div>
      {/* CONTACT INFO */}
      <div className="flex items-center justify-between gap-6 border-t border-gray-800 py-10 md:flex-col md:items-stretch">
        <div className="flex items-center gap-6 md:flex-col">
          <div className="border-b border-gray-800 pb-[1.25rem] md:w-full">
            <a href="#" className="flex items-center gap-2 text-white md:justify-center">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 fill-primary-900">
                  <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                  <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
                </svg>
              </i>
              hello@squareup.com
            </a>
          </div>
          <div className="border-b border-gray-800 pb-[1.25rem] md:w-full">
            <a href="#" className="flex items-center gap-2 text-white md:justify-center">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 fill-primary-900">
                  <path
                    fillRule="evenodd"
                    d="M2 3.5A1.5 1.5 0 0 1 3.5 2h1.148a1.5 1.5 0 0 1 1.465 1.175l.716 3.223a1.5 1.5 0 0 1-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 0 0 6.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 0 1 1.767-1.052l3.223.716A1.5 1.5 0 0 1 18 15.352V16.5a1.5 1.5 0 0 1-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 0 1 2.43 8.326 13.019 13.019 0 0 1 2 5V3.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </i>
              +91 91813 23 2309
            </a>
          </div>
          <div className="border-b border-gray-800 pb-[1.25rem] md:w-full">
            <a href="#" className="flex items-center gap-2 text-white md:justify-center">
              <i>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5 fill-primary-900">
                  <path
                    fillRule="evenodd"
                    d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </i>
              Somewhere in the World
            </a>
          </div>
        </div>
        <span className="text-center text-sm text-gray-300"> © 2024 SquareUp. All rights reserved. </span>
      </div>
    </footer>
  );
}
