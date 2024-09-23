import ChooseSec from "../../components/HomePage/ChooseSec/ChooseSec";
import ClientSec from "../../components/HomePage/ClientsSec/ClientSec";
import { CompanyList } from "../../components/HomePage/CompanyList/CompanyList";
import FaqSec from "../../components/HomePage/FaqSec/FaqSec";
import FooterSec from "../../components/FooterSec/FooterSec";
import FormSec from "../../components/HomePage/FormSec/FormSec";
import { Header } from "../../components/Header/Header";
import { Navbar } from "../../components/Navbar/Navbar";
import ServicesSec from "../../components/HomePage/ServicesSec/ServicesSec";

export const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-px w-full bg-gray-800"></div>
      <Header />
      <main className="mx-auto max-w-[90%] border-l border-r border-gray-800 bg-gray-900 bg-opacity-20 sm:mx-4 sm:max-w-full">
        <CompanyList />
        <ServicesSec />
        <ChooseSec />
        <ClientSec />
        <FaqSec />
        <FormSec />
        <FooterSec />
      </main>
    </>
  );
};
