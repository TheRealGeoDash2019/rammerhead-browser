import { useEffect, useState } from 'react';
import { SettingsSection } from '../elements/section';
import { BrandingElement } from '../elements/section-elements/branding';
import { InfoElement } from '../elements/section-elements/info';
import { LinkElement } from '../elements/section-elements/link';
import { SwitchElement } from '../elements/section-elements/switch';
import { InputElement } from '../elements/section-elements/input';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';
import LinkIcon from '@mui/icons-material/Link';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { getSessionContext } from "../../../SessionContext";

export function ThemingSection({ themeActive, themeUrl }) {
    const e = getSessionContext();
    const isBetterRH = (window && ("BetterRH" in window));
    // eslint-disable-next-line no-unused-vars
    const [currentTheme, setCurrentTheme] = useState("");
    const [isActive, setIsActive] = useState(false);

    const toggleTheme = async function(_) {
        try {
            const state = Boolean(_);
            const previousState = await e.getTabTheme();
            await e.setTabTheme({
                url: previousState.url,
                enabled: state
            });
        } catch (_) {
            return null;
        }
    }

    const toggleThemeURL = async function(_) {
        try {
            const previousState = await e.getTabTheme();
            await e.setTabTheme({
                url: _,
                enabled: previousState.enabled
            });
        } catch (_) {
            return null;
        }
    };

    useEffect(() => {
        const pullThemeData = async function() {
            const { url: themeUrl, enabled: themeActive } = await e.getTabTheme();
            setCurrentTheme(themeUrl);
            setIsActive(themeActive);
            // setTimeout(() => pullThemeData(), 1500);
        }
        
        pullThemeData();

        return () => {};
    }, [themeActive, themeUrl]);

    const themePlaceholder = (themeActive? "rh://themes/dark" : "rh://themes/light");
    return (
        <>
            <SettingsSection title="Theming">
                <LinkElement icon={<FormatPaintIcon/>} label="View Online Themes" sublabel="Get online theme from here:" link="https://themes.lhost.dev/" openEmbedded={isBetterRH}></LinkElement>
                <SwitchElement icon={<Brightness4Icon />} label="Enable Dark/Custom Theme" sublabel="Enables Dark/Custom Theme on the Host Rammerhead Browser" currentState={isActive} handleChange={(value) => toggleTheme(value)} />
                <InputElement icon={<LinkIcon />} label="Custom Theme URL" sublabel="Custom Theme URL for Rammerhead Browser" placeholder={themePlaceholder} currentState={currentTheme} handleChange={(value) => toggleThemeURL(value)} variant="standard"/>
            </SettingsSection>
        </>
    )
}