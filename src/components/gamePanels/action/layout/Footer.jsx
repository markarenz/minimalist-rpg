import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { flagFr, flagUs } from '../../../../img';

const Footer = ({ updateLang, selectedLang }) => {
  const y = new Date().getFullYear();
  const langOptions = [
    { lang: 'en', flag: flagUs, title: 'US English' },
    { lang: 'fr', flag: flagFr, title: 'French' },
  ];
  const baseClasses =
    'w-4 h-4 relative after:absolute  after:-bottom-1 after:h-1 after:bg-primary after:transition:all after:duration-200';
  const selectedClass = 'after:left-0 after:w-full opacity-100';
  const notSelectedClass = 'after:left-1/2 after:w-0 opacity-50';
  return (
    <footer className="bg-gray-800 text-white text-sm">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex justify-between">
          <div>
            <div>
              &copy;{y} <FormattedMessage id="copyright" />
            </div>
          </div>
          <div className="px-1 py-1 bg-gray-500 rounded-sm">
            {langOptions.map((l, idx) => (
              <button
                type="button"
                key={`langSelect_${l.lang}`}
                onClick={() => updateLang(l.lang)}
                title={l.title}
                className={`${baseClasses} ${idx > 0 ? 'ml-2' : ''} ${
                  selectedLang === l.lang ? selectedClass : notSelectedClass
                }`}
              >
                <img src={l.flag} alt={l.title} className="border-[1px] border-gray-700" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
Footer.propTypes = {
  selectedLang: PropTypes.string.isRequired,
  updateLang: PropTypes.func.isRequired,
};
export default Footer;
