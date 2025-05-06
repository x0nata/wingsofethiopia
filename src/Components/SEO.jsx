import { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations/translations';

const SEO = () => {
  const { language } = useLanguage();
  const t = translations[language];

  useEffect(() => {
    // Get the default title from the document
    const defaultTitle = document.title;

    // Update document title based on language
    if (language === 'ru') {
      document.title = 'Крылья Эфиопии - Агентство путешествий';
    } else {
      document.title = defaultTitle; // Keep the default English title
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        language === 'ru'
          ? 'Крылья Эфиопии - Ваше надежное агентство путешествий для исследования красоты Эфиопии'
          : 'Wings of Ethiopia - Your trusted travel agency for exploring the beauty of Ethiopia'
      );
    }

    // Update og:title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        'content',
        language === 'ru' ? 'Крылья Эфиопии - Агентство путешествий' : defaultTitle
      );
    }

    // Update og:description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        'content',
        language === 'ru'
          ? 'Откройте для себя красоту Эфиопии с нашими эксклюзивными турами'
          : 'Discover the beauty of Ethiopia with our exclusive tours'
      );
    }

    // Update html lang attribute
    document.documentElement.lang = language;

    // Cleanup function to restore default title when component unmounts
    return () => {
      document.title = defaultTitle;
    };
  }, [language]);

  return null;
};

export default SEO; 