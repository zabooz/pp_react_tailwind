import { FormattedMessage } from 'react-intl';
import { useBruteForceContext } from '../../../contexts/bruteForceContext/bruteForceContext';

function MojoAllResultsLink() {
    const { setOpenResultModal } = useBruteForceContext();

    return (
        <span
            onClick={() => setOpenResultModal(true)}
            className="cursor-pointer font-bold text-gray-400 underline lg:hidden  hover:text-[#0891b2d9]  underline-offset-4"
        >
            <FormattedMessage id="passwordTesting.mojo.allResultsLink" defaultMessage="Siehe alle Ergebnisse!" />
        </span>
    );
}

export default MojoAllResultsLink;
