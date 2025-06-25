import LaunchIcon from '@mui/icons-material/Launch';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export function InternalLinkElement({ label, sublabel = "", sectionName = "", icon = null, setTabFunction = (() => null) }) {
    const iconElement = (icon? (<div className="section-icon">{icon}</div>) : null);
    const setTab = ((setTabFunction instanceof Function)? setTabFunction : () => null);

    return (
        <div className="section-element link-element selectable" onClick={() => setTab(sectionName)}>
            {iconElement}
            <div className="section-labels">
                <div className="label">{label}</div>
                {(sublabel && <div className="sublabel">{sublabel}</div>)}
            </div>
            <KeyboardArrowRightIcon />
        </div>
    )
}