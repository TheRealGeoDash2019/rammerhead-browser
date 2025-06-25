import { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';

export function SwitchElement({ label, sublabel = "", currentState = true, handleChange = null, icon = null }) {
    const iconElement = (icon? (<div className="section-icon">{icon}</div>) : null);
    const [enabledState, setEnabledState] = useState(currentState);
    const changeHandler = ((handleChange && handleChange instanceof Function)? handleChange : (() => null));

    useEffect(() => {
        setEnabledState(currentState);
    }, [currentState]);

    return (
        <div className="section-element switch-element selectable" onClick={() => {changeHandler(!enabledState);setEnabledState(!enabledState);}}>
            {iconElement}
            <div className="section-labels">
                <div className="label">{label}</div>
                {(sublabel && <div className="sublabel">{sublabel}</div>)}
            </div>
            <Switch checked={enabledState}/>
        </div>
    )
}