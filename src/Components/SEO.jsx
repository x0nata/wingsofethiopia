import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../context/LanguageContext';

const SEO = ({ title, description, keywords, imageUrl }) => {
  const { language } = useLanguage();

  useEffect(() => {
    // Get the default title from the document
    const defaultTitle = title || (language === 'ru' ? 'Крылья Эфиопии - Агентство путешествий' : 'Wings of Ethiopia - Travel Agency');

    // Update document title based on language
    document.title = defaultTitle;
    if (language === 'ru') {
      document.title = title || 'Крылья Эфиопии - Агентство путешествий';
    }

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        description || (language === 'ru'
          ? 'Крылья Эфиопии - Ваше надежное агентство путешествий для исследования красоты Эфиопии'
          : 'Wings of Ethiopia - Your trusted travel agency for exploring the beauty of Ethiopia')
      );
    }

    // Update og:title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        'content',
        title || (language === 'ru' ? 'Крылья Эфиопии - Агентство путешествий' : 'Wings of Ethiopia - Travel Agency')
      );
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    const defaultKeywords = (language === 'ru'
      ? 'Эфиопия, туры, путешествия, Аддис-Абеба, Аксум, Арба-Мынч, история, культура, природа, приключения, туризм, Африка'
      : 'Ethiopia, tours, travel, Addis Ababa, Axum, Arba Minch, history, culture, nature, adventure, tourism, Africa');

    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || defaultKeywords);
    } else {
      const newMetaKeywords = document.createElement('meta');
      newMetaKeywords.setAttribute('name', 'keywords');
      newMetaKeywords.setAttribute('content', keywords || defaultKeywords);
      document.head.appendChild(newMetaKeywords);
    }

    // Update og:description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        'content',
        description || (language === 'ru'
          ? 'Откройте для себя красоту Эфиопии с нашими эксклюзивными турами'
          : 'Discover the beauty of Ethiopia with our exclusive tours')
      );
    }

    // Update og:image
    const ogImage = document.querySelector('meta[property="og:image"]');
    const defaultImageUrl = imageUrl || '/src/assets/favicon.png'; // Default image URL
    if (ogImage) {
      ogImage.setAttribute('content', defaultImageUrl);
    } else {
      const newOgImage = document.createElement('meta');
      newOgImage.setAttribute('property', 'og:image');
      newOgImage.setAttribute('content', defaultImageUrl);
      document.head.appendChild(newOgImage);
    }

    // Update favicon
    let faviconLink = document.querySelector('link[rel="icon"]');
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    faviconLink.setAttribute('href', defaultImageUrl);
 
     // Update html lang attribute
     document.documentElement.lang = language;
 
     // Cleanup function to restore default title when component unmounts
     return () => {
       document.title = defaultTitle;
     };
   }, [language, title, description, keywords, imageUrl]);
 
   return null;
 };
 
 SEO.propTypes = {
   title: PropTypes.string,
   description: PropTypes.string,
   keywords: PropTypes.string,
   imageUrl: PropTypes.string,
 };
 
 export default SEO;