import { Select } from 'flowbite-react';
import { FormattedMessage } from 'react-intl';
import { Locale, useLanguageContext } from '../contexts/languageContext/languageContext';

function LanguageSwitch() {
    
    const { setLanguage, language } = useLanguageContext();

    return (
        <div>
            <Select
                data-testid="language-switch"
                id="countries"
                size={1}
                className="p-[0rem]"
                onChange={(e) => setLanguage(e.target.value as Locale)}
                defaultValue={language}
            >
                <option value={'en'} data-testid="switch-to-english">
                    <FormattedMessage id="english-selected" defaultMessage="Englisch" />
                </option>
                <option value={'de'} data-testid="switch-to-german">
                    <FormattedMessage id="german-selected" defaultMessage="Deutsch" />
                </option>
                {/* <option value={'fr'}>
                    <FormattedMessage id="french-selected" defaultMessage="Französisch" />
                </option>
                <option value={'es'}>
                    <FormattedMessage id="spanish-selected" defaultMessage="Spanisch" />
                </option>

                <option value={'la'}>
                    <FormattedMessage id="latin-selected" defaultMessage="Latein" />
                </option> */}
            </Select>
        </div>
    );
}

export default LanguageSwitch;
