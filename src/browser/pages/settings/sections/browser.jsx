import { useEffect, useState } from 'react';
import { SettingsSection } from '../elements/section';
import { BrandingElement } from '../elements/section-elements/branding';
import { InfoElement } from '../elements/section-elements/info';
import { LinkElement } from '../elements/section-elements/link';
import { SwitchElement } from '../elements/section-elements/switch';
import { InputElement } from '../elements/section-elements/input';
import { SelectElement } from '../elements/section-elements/select';
import { InternalLinkElement } from '../elements/section-elements/internal-link';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LinkIcon from '@mui/icons-material/Link';
import { getSessionContext } from "../../../SessionContext";

export function BrowserSection({ browserName, browserFavicon, browserHost, setTab, currentTab }) {
    const e = getSessionContext();
    const isBetterRH = (window && ("BetterRH" in window));
    const [_browserName, setBrowserName] = useState(browserName);
    const [_browserFavicon, setBrowserFavicon] = useState(browserFavicon);
    const [_browserHost, setBrowserHost] = useState(browserHost);
    // eslint-disable-next-line no-unused-vars
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
            <SettingsSection title="Browser Configuration">
                <BrandingElement customTitle={_browserName||_browserHost} customLogo={new URL((_browserFavicon || "/logo.png"), `https://rhsettings.lhost.dev`)} />
                <InternalLinkElement icon={<VisibilityOffIcon />} label="Change Browser Tab Cloak" sublabel="Change the way how Rammerhead looks from the Tab List" sectionName="cloak" setTabFunction={setTab}></InternalLinkElement>
                <InternalLinkElement icon={<TravelExploreIcon />} label="Change Search Engine" sectionName="engine" setTabFunction={setTab}></InternalLinkElement>
            </SettingsSection>
        </>
    )
}