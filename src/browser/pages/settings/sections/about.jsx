import { SettingsSection } from '../elements/section';
import { BrandingElement } from '../elements/section-elements/branding';
import { InfoElement } from '../elements/section-elements/info';
import { LinkElement } from '../elements/section-elements/link';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard';
import RammerheadIcon from '../elements/RammerheadIcon';
import { getSessionContext } from "../../../SessionContext";

export function AboutSection({ browserState }) {
    const e = getSessionContext();
    const isBetterRH = (window && ("BetterRH" in window));
    return (
        <SettingsSection title="About Rammerhead">
            <BrandingElement />
            <InfoElement icon={<WebAssetIcon />} label="Browser Version" sublabel={e.staticAssets.version} />     
            <InfoElement icon={<DeveloperBoardIcon />} label="Rammerhead Version" sublabel={e.staticAssets.openSourceVersion} />
            <LinkElement icon={<RammerheadIcon />} label="Rammerhead Support Server" sublabel="Get help with Rammerhead" link="https://discord.gg/VNT4E7gN5Y" openEmbedded={isBetterRH} />
            {isBetterRH && <LinkElement icon={<RammerheadIcon />} label="Better RH Support" sublabel="Get help with BetterRH" link="https://discord.gg/CantCVrkj9" openEmbedded={isBetterRH} />}
        </SettingsSection>
    )
}