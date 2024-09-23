export const CompanyList = () => {
  return (
    <>
      <div className="platforms relative flex justify-center">
        <span className="absolute inline-block -translate-y-1/2 rounded-full border border-gray-800 bg-gray-900 px-6 py-[0.875rem] text-sm font-medium text-primary-100">
          Trusted By 250+ Companies
        </span>
      </div>
      <div className="flex justify-around border-b border-gray-800 py-12 sm:flex-wrap sm:justify-stretch sm:py-0">
        <div className="grid flex-1 place-content-center text-center ring-gray-800 sm:min-w-36 sm:px-9 sm:py-8 sm:ring-1">
          <img src="/assets/images/zapier-logo.png" alt="zapier logo" />
        </div>
        <div className="grid flex-1 place-content-center ring-gray-800 sm:min-w-36 sm:px-9 sm:py-8 sm:ring-1">
          <img src="/assets/images/spotify-logo.png" alt="spotify logo" />
        </div>
        <div className="grid flex-1 place-content-center ring-gray-800 sm:min-w-36 sm:px-9 sm:py-8 sm:ring-1">
          <img src="/assets/images/zoom-logo.png" alt="zoom logo" />
        </div>
        <div className="grid flex-1 place-content-center ring-gray-800 sm:min-w-36 sm:px-9 sm:py-8 sm:ring-1">
          <img src="/assets/images/slack-logo.png" alt="slack logo" />
        </div>
        <div className="grid flex-1 place-content-center ring-gray-800 sm:min-w-36 sm:px-9 sm:py-8 sm:ring-1">
          <img src="/assets/images/amazon-logo.png" alt="amazon logo" />
        </div>
        <div className="grid flex-1 place-content-center ring-gray-800 sm:min-w-36 sm:px-9 sm:py-8 sm:ring-1">
          <img src="/assets/images/adobe-logo.png" alt="adobe logo" />
        </div>
      </div>
    </>
  );
};
