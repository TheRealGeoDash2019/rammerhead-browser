import { SettingsSection } from '../elements/section';
import { BrandingElement } from '../elements/section-elements/branding';
import { InfoElement } from '../elements/section-elements/info';

export function DebugSection() {
    return (
        <SettingsSection title="Under Construction">
            <BrandingElement />
            <InfoElement label="This section is under construction." sublabel="Come back later" /> 
        </SettingsSection>
    )
}