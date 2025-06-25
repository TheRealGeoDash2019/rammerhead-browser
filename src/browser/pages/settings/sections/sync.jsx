import { useEffect, useState } from 'react';
import { SettingsSection } from '../elements/section';
import { BrandingElement } from '../elements/section-elements/branding';
import { InfoElement } from '../elements/section-elements/info';
import { LinkElement } from '../elements/section-elements/link';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import SyncDisabledIcon from '@mui/icons-material/SyncDisabled';
import BuildIcon from '@mui/icons-material/Build';

export function SyncSection({ browserState }) {
    const [accountInfo, setAccountInfo] = useState(null);
    const isBetterRH = (window && ("BetterRH" in window));
    useEffect(() => {
        async function getInfo() {
            if (!("windowethToppeth" in window)) return setAccountInfo("⚠️ RH Patches not detected :(");
            if (!window.windowethToppeth) return setAccountInfo("⚠️ RH Patches not detected :(");
            if (!("BetterRH" in window.windowethToppeth)) return setAccountInfo("⚠️ Better RH not detected :(");
            const { BetterRH } = window.windowethToppeth;
            const accountInfo = await BetterRH.Sync.accountInfo().catch(() => null);
            if (!accountInfo) setAccountInfo("🚫 Not Synced to an Account");
            else {
                setAccountInfo(("🔁 Syncing to: " + accountInfo.username))
            }
        };
        if (!accountInfo) {
            getInfo();
        }
    }, []);
    // eslint-disable-next-line no-unused-vars
    const [profileCreationDate, browserVersion, rammerheadVersion, rammerheadRegion] = (browserState? browserState.split("|") : ["Unknown", "Unknown", "Unknown", "Unknown"]);
    return (
        <SettingsSection title="Sync">
            <BrandingElement customLogo="/sync.png" customTitle="Rammerhead Sync" />
            <InfoElement icon={(accountInfo?.startsWith?.("🔁")? <CloudSyncIcon /> : <SyncDisabledIcon />)} label="Synced Account" sublabel={accountInfo} />
            <LinkElement icon={<BuildIcon />} label="Manage Sync" link="https://sync.lhost.dev" openEmbedded={isBetterRH} />
        </SettingsSection>
    )
}