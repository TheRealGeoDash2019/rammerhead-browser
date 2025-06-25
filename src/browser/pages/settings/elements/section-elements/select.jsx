import { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export function SelectElement({ 
    label, 
    sublabel = "",
    options = null, 
    currentState = null, 
    handleChange = null, 
    icon = null }) {
    const iconElement = (icon? (<div className="section-icon">{icon}</div>) : null);
    const [selectState, setSelectState] = useState(currentState);
    const changeHandler = ((handleChange && handleChange instanceof Function)? handleChange : (() => null));

    const parsedOptions = ((options && options instanceof Array)? options : []).filter(e => (e && e.label && e.value));

    useEffect(() => {
        setSelectState(currentState)
    }, [currentState]);

    return (
        <div className="section-element select-element">
            <div className="section-element-subcontainer">
                {iconElement}
                <div className="section-labels">
                    <div className="label">{label}</div>
                    {(sublabel && <div className="sublabel">{sublabel}</div>)}
                </div>
            </div>
            <Select
                className="section-select"
                value={selectState}
                defaultValue={parsedOptions.find(e => !!(e?.default))?.value}
                size="small"
                onChange={(event) => {changeHandler(event.target.value),setSelectState(event.target.value);}}
                sx={{ ["&.MuiInputBase-root"]: { color: "var(--browser-text-secondary-color)" }, ["& > .MuiSelect-select.MuiSelect-outlined"]: { display: "flex", flexDirection: "row", alignItems: "center" } }}
            >
                {parsedOptions.map(e => (
                    <MenuItem key={e.value} value={e.value} sx={{ display: "flex", flexDirection: "row", alignItem: "center" }}>
                        {e.icon && <img src={e.icon} style={{ maxWidth: "20px", maxHeight:"20px", marginRight: "12px" }} />}
                        {e.label}
                    </MenuItem>
                ))}
            </Select>
        </div>
    )
}