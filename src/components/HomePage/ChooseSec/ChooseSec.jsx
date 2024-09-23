export default function ChooseSec() {
  return (
    <section>
      <div className="grid h-64 place-content-center bg-[url('/assets/images/why-sec-bg.jpg')] bg-cover bg-center bg-no-repeat sm:px-4">
        <h2 className="mb-2 text-center text-[2.5rem] font-semibold text-white md:text-[1.75rem]">Why Choose SquareUp?</h2>
        <p className="md:px3 text-center text-base font-normal text-gray-100 sm:text-sm">
          Experience excellence in digital craftsmanship with our team of skilled professionals dedicated to delivering exceptional results.
        </p>
      </div>
      {/* ITEMS */}
      <div className="flex flex-wrap">
        {/* ITEM 1 */}
        <div className="min-w-96 flex-1 basis-1/2 p-[3.75rem] ring-1 ring-gray-800 md:p-10 sm:min-w-[17rem] sm:p-[1.875rem]">
          <div className="mb-7 flex items-center gap-4 sm:mb-6">
            <div className="primary-icon-50">
              <svg viewBox="0 0 30 30" fill="currentColor" xmlns="http://www.w3.org/2000/svg " className="h-6 w-6 fill-primary-900">
                <path d="M15.2724 28.8254C19.5359 28.8254 22.9758 25.3855 22.9758 21.1341C22.9758 16.8705 19.5359 13.4307 15.2724 13.4307C11.021 13.4307 7.58106 16.8705 7.58106 21.1341C7.58106 25.3855 11.021 28.8254 15.2724 28.8254ZM13.08 25.0948C12.6198 25.4339 12.1353 25.0827 12.317 24.5498L13.1891 21.9456L10.9604 20.3589C10.5365 20.044 10.6697 19.4505 11.2511 19.4505L13.9885 19.4747L14.8242 16.8585C14.9938 16.3255 15.5751 16.3255 15.7448 16.8585L16.5805 19.4747L19.3179 19.4505C19.8993 19.4505 20.0204 20.0561 19.6086 20.3468L17.3799 21.9456L18.252 24.5498C18.4337 25.0827 17.9492 25.4339 17.4889 25.0948L15.2845 23.4838L13.08 25.0948ZM7.89598 15.3686C9.08299 13.8666 10.7182 12.7281 12.5956 12.1709L7.10868 2.31153L3.92313 7.16857C3.70511 7.48349 3.693 7.83475 3.8868 8.14966L7.89598 15.3686ZM12.5592 8.04065H17.9977L21.6919 1.5H8.86497L12.5592 8.04065ZM17.9613 12.1709C19.8509 12.7281 21.4739 13.8666 22.6609 15.3686L26.6822 8.14966C26.8639 7.83475 26.8518 7.48349 26.6338 7.16857L23.4482 2.31153L17.9613 12.1709Z" />
              </svg>
            </div>
            <span className="text-xl font-medium text-white">Expertise</span>
          </div>
          <p className="text-base font-normal text-gray-100">
            Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with
            the latest industry trends and best practices to deliver cutting-edge solutions.
          </p>
        </div>
        {/* ITEM 2 */}
        <div className="min-w-96 flex-1 basis-1/2 p-[3.75rem] ring-1 ring-gray-800 md:p-10 sm:min-w-[17rem] sm:p-[1.875rem]">
          <div className="mb-7 flex items-center gap-4 sm:mb-6">
            <div className="primary-icon-50">
              <svg viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-primary-900">
                <path d="M12.2834 21.8952H22.9502C24.2825 21.8952 24.7577 21.5194 24.7577 20.7845C24.7577 18.63 22.0168 15.6571 17.6125 15.6571C13.2168 15.6571 10.4759 18.63 10.4759 20.7845C10.4759 21.5194 10.9511 21.8952 12.2834 21.8952ZM17.621 14.1623C19.4455 14.1623 21.0154 12.5589 21.0154 10.4712C21.0154 8.40857 19.4371 6.88037 17.621 6.88037C15.805 6.88037 14.2266 8.44198 14.2266 10.4879C14.2266 12.5589 15.7965 14.1623 17.621 14.1623ZM3.11853 21.8952H9.56789C8.68532 20.6342 9.76305 18.0956 11.5875 16.7093C10.6455 16.0914 9.43204 15.632 7.8452 15.632C4.01804 15.632 1.625 18.4129 1.625 20.7261C1.625 21.4777 2.0493 21.8952 3.11853 21.8952ZM7.85369 14.3544C9.43204 14.3544 10.8068 12.9514 10.8068 11.1393C10.8068 9.34387 9.42357 8.01608 7.85369 8.01608C6.27531 8.01608 4.88361 9.37727 4.89209 11.156C4.89209 12.9514 6.26682 14.3544 7.85369 14.3544ZM23.9006 13.9118C24.1892 14.1038 24.588 14.0454 24.8171 13.7197C25.4705 12.8762 25.8609 11.632 25.8609 10.3543C25.8609 9.07664 25.4705 7.84072 24.8171 6.98894C24.588 6.66325 24.1892 6.60479 23.9006 6.79686C23.5612 7.03069 23.5018 7.44823 23.7733 7.79062C24.2655 8.45868 24.5455 9.38562 24.5455 10.3543C24.5455 11.323 24.257 12.2416 23.7733 12.918C23.5103 13.2687 23.5612 13.6696 23.9006 13.9118ZM27.0489 16.0914C27.3629 16.3001 27.7532 16.225 27.9824 15.9077C29.0686 14.4379 29.705 12.417 29.705 10.3543C29.705 8.29166 29.0771 6.25406 27.9824 4.80101C27.7532 4.48368 27.3629 4.40852 27.0489 4.61729C26.735 4.82607 26.6841 5.21856 26.9301 5.56094C27.8551 6.84697 28.3897 8.57559 28.3897 10.3543C28.3897 12.1331 27.8381 13.8533 26.9301 15.1477C26.6925 15.4901 26.735 15.8826 27.0489 16.0914Z" />
              </svg>
            </div>
            <span className="text-xl font-medium text-white">Client-Centric Approach</span>
          </div>
          <p className="text-base font-normal text-gray-100">
            We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to
            meet your specific requirements. Your success is our success.
          </p>
        </div>
        {/* ITEM 3  */}
        <div className="min-w-96 flex-1 basis-1/2 p-[3.75rem] ring-1 ring-gray-800 md:p-10 sm:min-w-[17rem] sm:p-[1.875rem]">
          <div className="mb-7 flex items-center gap-4 sm:mb-6">
            <div className="primary-icon-50">
              <svg viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-primary-900">
                <path d="M14.728 27.495C14.9281 27.495 15.2407 27.4198 15.5533 27.2573C22.6678 23.5312 24.9561 21.6682 24.9561 17.1794V7.75158C24.9561 6.4637 24.4058 6.05108 23.3556 5.61345C21.8927 5.01327 17.2163 3.31277 15.7658 2.81263C15.4282 2.70009 15.0781 2.63757 14.728 2.63757C14.3779 2.63757 14.0278 2.7126 13.7027 2.81263C12.2398 3.28777 7.5634 5.02578 6.10047 5.61345C5.06267 6.03858 4.5 6.4637 4.5 7.75158V17.1794C4.5 21.6682 6.91321 23.3187 13.9028 27.2573C14.2279 27.4324 14.528 27.495 14.728 27.495ZM9.08885 15.4788C9.08885 15.3288 9.16387 15.1412 9.30142 14.9787L16.366 6.1136C16.9037 5.4384 17.804 5.88854 17.4789 6.72628L15.1532 12.9781H19.5169C19.8545 12.9781 20.1046 13.2156 20.1046 13.5533C20.1046 13.7034 20.0296 13.8909 19.8921 14.0534L12.8275 22.9186C12.2898 23.5938 11.402 23.1436 11.7146 22.3184L14.0528 16.054H9.67653C9.35144 16.054 9.08885 15.8164 9.08885 15.4788Z" />
              </svg>
            </div>
            <span className="text-xl font-medium text-white">Results-Driven Solutions</span>
          </div>
          <p className="text-base font-normal text-gray-100">
            Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive
            business growth, enhance user experiences, and provide a competitive advantage.
          </p>
        </div>
        {/* ITEM 4 */}
        <div className="min-w-96 flex-1 basis-1/2 p-[3.75rem] ring-1 ring-gray-800 md:p-10 sm:min-w-[17rem] sm:p-[1.875rem]">
          <div className="mb-7 flex items-center gap-4 sm:mb-6">
            <div className="primary-icon-50">
              <svg viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 fill-primary-900">
                <path d="M7.1281 20.8667L7.43498 22.0942C7.82369 23.69 8.67272 24.5084 10.3605 24.5084H21.3774C23.0755 24.5084 23.9143 23.7105 24.3132 22.0942L24.6201 20.8667H7.1281ZM6.79054 19.4653H24.9678L26.8909 11.5888L26.0521 11.1081L21.3365 14.5451C20.9887 14.7906 20.7534 14.6985 20.559 14.4224L16.1196 7.71198L15.6286 7.69152L11.1482 14.453C10.9743 14.719 10.7697 14.8008 10.4219 14.5553L5.79831 11.1797L4.8163 11.4354L6.79054 19.4653ZM5.19478 13.6347C6.54504 13.6347 7.62933 12.5402 7.62933 11.1797C7.62933 9.84988 6.54504 8.74512 5.19478 8.74512C3.84453 8.74512 2.75 9.83965 2.75 11.1797C2.75 12.5402 3.85475 13.6347 5.19478 13.6347ZM15.8741 9.37933C17.2141 9.37933 18.3086 8.28481 18.3086 6.93455C18.3086 5.60475 17.2141 4.5 15.8741 4.5C14.5136 4.5 13.4293 5.59453 13.4293 6.93455C13.4293 8.28481 14.5238 9.37933 15.8741 9.37933ZM26.5431 13.6347C27.8832 13.6347 28.9879 12.5402 28.9879 11.1797C28.9879 9.83965 27.8934 8.74512 26.5431 8.74512C25.2032 8.74512 24.1086 9.84988 24.1086 11.1797C24.1086 12.5402 25.2032 13.6347 26.5431 13.6347Z" />
              </svg>
            </div>
            <span className="text-xl font-medium text-white">Collaborative Partnership</span>
          </div>
          <p className="text-base font-normal text-gray-100">
            We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support,
            maintenance, and updates to ensure your digital products continue to thrive.
          </p>
        </div>
      </div>
    </section>
  );
}
