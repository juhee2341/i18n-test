import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import './locales/i18n';

import { Languages, languages } from './locales/i18n';


function App() {

  const {t, i18n} = useTranslation();

  const handleChangeLanguage = (lang: Languages) => {
    console.log(lang);
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App">
      <div className="dropdown">
        <button className="dropbtn"> 
          <span className="dropbtn_icon"></span>
          {t('viewMenu')}
        </button>
        <div className="dropdown-content">
          <a href="#">{t('menu01')}</a>
          <a href="#">{t('menu02')}</a>
          <a href="#">{t('menu03')}</a>
        </div>
      </div>
      <div>
      {
          languages.map((lang) => (
            <button key={lang} onClick={() => handleChangeLanguage(lang)}>
              {t(`language_${lang}`)}
            </button>
          ))
        }
      </div>
    </div>
  );
}

export default App;
