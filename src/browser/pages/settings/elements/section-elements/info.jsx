export function InfoElement({ label, sublabel = "", icon = null }) {
    const iconElement = (icon? (<div className="section-icon">{icon}</div>) : null);
    return (
        <div className="section-element info-element">
            {iconElement}
            <div className="section-labels">
                <div className="label">{label}</div>
                {(sublabel && <div className="sublabel">{sublabel}</div>)}
            </div>
        </div>
    )
}