import LaunchIcon from '@mui/icons-material/Launch';

export function LinkElement({ label, sublabel = "", link = "", openEmbedded = false, redirect = false, icon = null }) {
    const iconElement = (icon? (<div className="section-icon">{icon}</div>) : null);

    function openLink(url) {
        if (!url) return;
        try {
            if (openEmbedded) {
                globalThis.openBrowserLink(url, !redirect);
            } else {
                globalThis.openExternalLink(url);
            }
        } catch {
            if (redirect === true) {
                window.location.href = url;
            } else {
                window.open(url);
            }
        };
    }

    return (
        <div className="section-element link-element selectable" onClick={() => openLink(link)}>
            {iconElement}
            <div className="section-labels">
                <div className="label">{label}</div>
                {(sublabel && <div className="sublabel">{sublabel}</div>)}
            </div>
            <LaunchIcon />
        </div>
    )
}