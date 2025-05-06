import "../../src/Home.css";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const Quote = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section className="container mx-auto p-5 mt-10 lg:mt-24">
      <div className="pic">
        <div className="px-2 pt-[23px] sm:pt-[80px] text-center flex flex-col items-center justify-center">
          <h1 className="py-2 sm:text-[30px] text-white font-bold">
            {t.quoteTitle}
          </h1>
          <p className="pb-2 text-[14px] sm:text-[18px] text-Text1 font-light">
            {t.quoteText}
          </p>
          {/* <button className="bg-Orange py-3 px-4 sm:py-5 sm:px-8 text-white font-semibold rounded-lg mt-3">
            Ask For A Quote
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default Quote;
