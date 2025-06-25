import Button from '@mui/material/Button';

export function ButtonElement({ label, sublabel = "", buttonLabel = "Action", disabled = false, onClick = null, icon = null }) {
    const iconElement = (icon? (<div className="section-icon">{icon}</div>) : null);
    const changeHandler = ((onClick && onClick instanceof Function)? onClick : (() => null));

    return (
        <div className="section-element button-element">
            {iconElement}
            <div className="section-labels">
                <div className="label">{label}</div>
                {(sublabel && <div className="sublabel">{sublabel}</div>)}
            </div>
            <Button disabled={disabled} variant="text" onClick={() => {changeHandler();}}>{buttonLabel}</Button>
        </div>
    )
}