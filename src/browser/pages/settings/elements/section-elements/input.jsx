import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';

export function InputElement({ label, sublabel = "", placeholder = "", currentState = "", handleChange = null, icon = null }) {
    const iconElement = (icon? (<div className="section-icon">{icon}</div>) : null);
    const [inputState, setInputState] = useState(currentState);
    const changeHandler = ((handleChange && handleChange instanceof Function)? handleChange : (() => null));

    useEffect(() => {
        setInputState(currentState);
    }, [currentState])

    return (
        <div className="section-element input-element">
            <div className="section-element-subcontainer">
                {iconElement}
                <div className="section-labels">
                    <div className="label">{label}</div>
                    {(sublabel && <div className="sublabel">{sublabel}</div>)}
                </div>
            </div>
            <TextField className="section-input" size="small" sx={{ ["& .MuiInputBase-root"]: { color: "var(--browser-text-secondary-color)" } }} hiddenLabel placeholder={placeholder} value={inputState} onInput={(event) => {setInputState(event.target.value);}} onKeyDown={(event) => {
                if (event.keyCode === 13 || event.which === 13) {
                    event.preventDefault();
                    event.target.blur();
                    return changeHandler(event.target.value);
                }
            }} />
        </div>
    )
}