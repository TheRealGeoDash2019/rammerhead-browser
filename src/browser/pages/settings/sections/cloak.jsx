import { useEffect, useState } from 'react';
import { SettingsSection } from '../elements/section';
import { BrandingElement } from '../elements/section-elements/branding';
import { InfoElement } from '../elements/section-elements/info';
import { LinkElement } from '../elements/section-elements/link';
import { SwitchElement } from '../elements/section-elements/switch';
import { InputElement } from '../elements/section-elements/input';
import { SelectElement } from '../elements/section-elements/select';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import LinkIcon from '@mui/icons-material/Link';
import { getSessionContext } from "../../../SessionContext";

export function CloakSection({}) {
    const e = getSessionContext();
    const isBetterRH = (window && ("BetterRH" in window));
    const [_browserName, setBrowserName] = useState("");
    const [_browserFavicon, setBrowserFavicon] = useState("");
    const [_browserHost, setBrowserHost] = useState("");
    // eslint-disable-next-line no-unused-vars

    const favIconShortcuts = {
        "microsoft": "/static-assets/favicon-presets/microsoft.ico",
        "gmail": "/static-assets/favicon-presets/gmail.ico",
        "docs": "/static-assets/favicon-presets/docs.ico",
        "drive": "/static-assets/favicon-presets/drive.png",
        "google": "/static-assets/favicon-presets/google.ico",
        "teams": "/static-assets/favicon-presets/microsoft-teams.png",
        "word": "/static-assets/favicon-presets/word.ico",
        "outlook": "/static-assets/favicon-presets/outlook.ico",
        "custom": "/logo.png"
    }

    const favIconNames = {
        "microsoft": "Microsoft",
        "gmail": "Gmail",
        "docs": "Google Docs",
        "drive": "Google Drive",
        "google": "Google Search",
        "teams": "Microsoft Teams",
        "word": "Microsoft Word",
        "outlook": "Outlook",
        "custom": "Custom (Enter URL Below)"
    }

    const selectOptions = Object.keys(favIconShortcuts).map(e => ({ value: favIconShortcuts[e], label: favIconNames[e], icon: favIconShortcuts[e], default: (e === "custom") }))

    const translateFavIcon = function(_) {
        if (_ === favIconShortcuts["custom"]) return null;
        let temp = _;
        for(const entry of Object.entries(favIconShortcuts)) {
          temp = temp.replace(`%{${entry[0]}}%`, entry[1]);
        }
        return temp;
    }

    useEffect(() => {
        let isMounted = true;
        const pullBrowserCloak = async function() {
            const browserTitle = await e.getTabTitle();
            const browserIcon = await e.getTabFavicon();
            if (isMounted) {
                setBrowserName(browserTitle);
                setBrowserFavicon(browserIcon);
                setBrowserHost(location.host);
            }
        };

        pullBrowserCloak();

        // Poll for changes every 500ms
        const interval = setInterval(pullBrowserCloak, 500);

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, [e]);

    return (
        <>
            <SettingsSection title="Browser Cloak">
                <BrandingElement customTitle={_browserName || _browserHost} customLogo={new URL((_browserFavicon || "/logo.png"), `https://rhsettings.lhost.dev`)} />
                <InputElement icon={<DriveFileRenameOutlineIcon />} label="Browser Tab Title" sublabel="Changes the Rammerhead Browser Title" placeholder="Rammerhead Browser" currentState={_browserName} handleChange={(value) => e.setTabTitle(value)} />
                <SelectElement icon={<InsertEmoticonIcon />} label="Browser Tab Favicon Presets" options={selectOptions} currentState={(Object.values(favIconShortcuts).includes(_browserFavicon)? _browserFavicon : "/logo.png")} handleChange={(value) => e.setTabFavicon(translateFavIcon(value))} />
                <InputElement icon={<LinkIcon />} label="Browser Tab Favicon URL" sublabel="Changes the Rammerhead Browser Favicon" placeholder="Default" currentState={_browserFavicon} handleChange={(value) => e.setTabFavicon(translateFavIcon(value))} />
            </SettingsSection>
        </>
    )
}