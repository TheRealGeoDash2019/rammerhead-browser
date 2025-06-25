import { SettingsSection } from '../elements/section';
import { BrandingElement } from '../elements/section-elements/branding';
import { InfoElement } from '../elements/section-elements/info';
import { LinkElement } from '../elements/section-elements/link';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SupportIcon from '@mui/icons-material/Support';
import RammerheadIcon from '../elements/RammerheadIcon';
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import SettingsBackupRestoreOutlinedIcon from '@mui/icons-material/SettingsBackupRestoreOutlined';

export function WelcomeSection() {
    const isBetterRH = (window && ("BetterRH" in window));
    // eslint-disable-next-line no-unused-vars
    return (
        <SettingsSection title="Welcome Notice">
            <BrandingElement customTitle="Welcome to the Settings Revamp" customLogo="/logo.png" />
            <InfoElement icon={<AutoAwesomeIcon />} label="The update is here!" sublabel="After a few weeks of development. The awaited revamp to the OG settings are here!" />
            <InfoElement icon={<SupportIcon />} sublabel="Need Support?" />
            <LinkElement icon={<SettingsSuggestOutlinedIcon />} label="For BetterRH/Settings v2" sublabel="Join the Better RH Support Server" link="https://discord.gg/CantCVrkj9" openEmbedded={isBetterRH} />
            <LinkElement icon={<RammerheadIcon />} label="For Rammerhead Browser" sublabel="Join the Rammerhead Support Server" link="https://discord.gg/VNT4E7gN5Y" openEmbedded={isBetterRH} />
        </SettingsSection>
    )
}