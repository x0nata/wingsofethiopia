import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";

const NotFoundPage = () => {
  const { language } = useLanguage();
  const t = translations[language].pages.notFound;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-Black text-white">
      <h1 className="text-4xl font-bold mb-4">{t.title}</h1>
      <p className="text-xl mb-8">{t.description}</p>
      <Link
        to="/"
        className="bg-Orange text-white px-6 py-3 rounded-md hover:bg-Orange/80 transition-colors"
      >
        {t.goHome}
      </Link>
    </div>
  );
};

export default NotFoundPage;
