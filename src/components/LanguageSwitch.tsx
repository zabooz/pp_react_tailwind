import { Select } from 'flowbite-react';
import { Locale, useLanguageContext } from '../contexts/languageContext/languageContext';

import { FormattedMessage } from 'react-intl';

function LanguageSwitch() {
    const { setLanguage } = useLanguageContext();
    return (
        <div>

            <Select id="countries" size={1} className="p-[0rem]" onChange={(e) => setLanguage(e.target.value as Locale)}> 
                <option value={'en'}>
                    <FormattedMessage id="english-selected" defaultMessage="Englisch" />
                </option>
                <option value={'de'}>
                    <FormattedMessage id="german-selected" defaultMessage="Deutsch" />
                </option>
                <option value={'fr'}>
                    <FormattedMessage id="french-selected" defaultMessage="Französisch" />
                </option>
                <option value={'es'}>
                    <FormattedMessage id="spanish-selected" defaultMessage="Spanisch" />
                </option>

                <option value={'la'}>
                    <FormattedMessage id="latin-selected" defaultMessage="Latein" />
                </option>
            </Select>
        </div>
    );
}

export default LanguageSwitch;
