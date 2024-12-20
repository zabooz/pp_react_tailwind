//eslint-disable
import { Footer } from 'flowbite-react';
import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { footerMessages } from './lang/footer.message';
import { useSlideContext } from '../contexts/slideProvider/slideContext';
function FooterCom() {
    const [visible, setVisible] = useState(true);
    const { startAnimation } = useSlideContext();
    const intl = useIntl();
    useEffect(() => {
        // Wenn die Animation startet, Footer ausblenden
        if (startAnimation) {
            setVisible(false);
            setTimeout(() => {
                setVisible(true);
            }, 2000);
        }
    }, [startAnimation]);

    return (
        <Footer
            container
            // eslint-disable-next-line
            className={`!text-[#9ca3af] dark:bg-slate-700 rounded-none mt-5 ${startAnimation ? '!dark:bg-slate-800' : visible ? 'dark:bg-slate-700' : 'dark:bg-slate-800'
            }`}
        >   
        {/* eslint-disable-next-line */}
            <div className={`w-full ${startAnimation ? '!hidden' : visible ? '!block' : '!hidden'}`}>
                <div className="grid w-full">
                    <div></div>
                    <div className="flex flex-wrap items-center justify-evenly">
                        <div>
                            <Footer.LinkGroup col className="!text-[#9ca3af]">
                                <Link to={'/about-us'}>{intl.formatMessage(footerMessages.aboutUs)}</Link>
                                <Link to={'/project'}>{intl.formatMessage(footerMessages.project)}</Link>
                                <a href="legacyDesign\index.html">{intl.formatMessage(footerMessages.legacyDesign)}</a>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.LinkGroup col className="!text-[#9ca3af]">
                                <Footer.Link href="https://github.com/zabooz">
                                    {intl.formatMessage(footerMessages.github)}
                                </Footer.Link>
                                <Footer.Link href="#">{intl.formatMessage(footerMessages.discord)}</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.LinkGroup col className="!text-[#9ca3af]">
                                <Link to={'/impressum'}>{intl.formatMessage(footerMessages.impressum)}</Link>
                                <Link to={'/privacy-policy'}>{intl.formatMessage(footerMessages.privacyPolicy)}</Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
            </div>
        </Footer>
    );
}
export default FooterCom;
//eslint-enable
