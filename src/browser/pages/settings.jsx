import React, { useState, useEffect, useRef, Fragment } from "react";
import { getSessionContext } from "../SessionContext"


function FaviconPreset({ src, onSelect }) {
    return (
        <img
            draggable="false"
            src={src}
            onClick={() => onSelect(src)}
            style={{ cursor: "pointer", marginRight: 8 }}
            alt=""
        />
    );
}

function FileSelector({ onFile, onError, readAs, accept, style, children }) {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.onchange = function () {
            const fileReader = new FileReader();
            fileReader.onload = function () {
                onFile(fileReader.result);
            };
            fileReader.onerror = function () {
                onError("error occurred while reading the file");
            };
            if (inputRef.current.files[0]) {
                fileReader[readAs](inputRef.current.files[0]);
            }
        };
    }, [onFile, onError, readAs]);

    return (
        <Fragment>
            <input
                ref={inputRef}
                type="file"
                accept={accept}
                style={{ display: "none" }}
            />
            <button
                style={style}
                onClick={() => inputRef.current.click()}
            >
                {children}
            </button>
        </Fragment>
    );
}


export function SettingsPage() {
    const e = getSessionContext();
    const [state, setState] = useState({});
    const [favicon, setFavicon] = useState();
    const [importError, setImportError] = useState(null);
    const [presetError, setPresetError] = useState(null);
    const titleInputRef = useRef();

    useEffect(() => {
        async function fetchData() {
            const n = {};
            n.isShufflingEnabled = await e.isShufflingEnabled();
            const r = await e.getHttpProxySetting();
            if (r)
                n.httpProxySetting =
                    "http://" + (r.proxyAuth ? r.proxyAuth + "@" : "") + r.host;
            n.tabTitle = await e.getTabTitle();
            setFavicon(await e.getTabFavicon());
            const formatTime = (e) =>
                "[" + new Date(e).toLocaleString() + "]";
            const importTime = await e.getProfileImportTime();
            const creationTime = await e.getProfileCreationTime();
            n.profileCreationTime =
                formatTime(creationTime) +
                (importTime ? ", imported on " + formatTime(importTime) : "");
            setState(n);
        }
        fetchData();
        // eslint-disable-next-line
    }, []);

    
    const handlePresetClick = async (src) => {
        if (src === "/favicon.png") src = null;
        await e.setTabFavicon(src);
        setFavicon(src);
    };

    
    const handleTitleInput = async (n) => {
        await e.setTabTitle(n.target.value);
    };

    
    const handleFaviconUpload = async (n) => {
        await e.setTabFavicon(n);
        setFavicon(n);
    };

    
    const handleReset = async () => {
        await e.setTabFavicon(null);
        await e.setTabTitle(null);
        setFavicon(null);
        if (titleInputRef.current) titleInputRef.current.value = "";
    };

    
    const handleShuffling = async (n) => {
        await e.enableShuffling(n.target.checked);
    };

    
    const handleImportProfile = async (n) => {
        try {
            const r = await e.importBrowserProfile(new Uint8Array(n));
            if (r) setImportError(r);
            else window.location.reload();
        } catch (err) {
            console.error(err);
            setImportError("unknown error occurred");
        }
    };

    
    const handleExportProfile = async () => {
        const blob = new Blob([await e.exportBrowserProfile()], {
            type: "application/octet-stream",
        });
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.download = "profile.rf";
        a.href = URL.createObjectURL(blob);
        a.click();
        setTimeout(() => {
            document.body.removeChild(a);
            URL.revokeObjectURL(blob);
        }, 0);
    };

    
    const handleResetEverything = async () => {
        if (
            !window.confirm(
                "Are you sure you want to reset and delete everything?\nTHIS ACTION IS IRREVERSIBLE!!\nBrowser will refresh after reset is complete"
            )
        )
            return;
        try {
            await e.delete();
            localStorage.clear();
            sessionStorage.clear();
            document.cookie.split(";").forEach((cookie) => {
                document.cookie =
                    cookie.split("=")[0] +
                    "=;path=/;expires=Thu, 01 Jan 1970 00:00:01 GMT";
            });
            location.reload();
        } catch (err) {
            alert(
                "an error occurred while trying to reset the browser. please notify the developer about this issue in the discord server, along with a screenshot of the dev console (opened with CTRL + SHIFT + J)"
            );
            console.error(err);
        }
    };

    return (
        <div className="rhpages rhsettings">
            <hr />
            <h2>Customize (actual) tab</h2>
            <h3>Customize look of this browser's favicon or title.</h3>
            <div className="rhsettings-section rhsettings-titlefavicon">
                {presetError && (
                    <p
                        style={{
                            fontWeight: "bold",
                            marginBottom: 10,
                            color: "#cf3b3b",
                        }}
                    >
                        Error while importing profile: {presetError}
                    </p>
                )}
                <div className="rhsettings-titlefavicon-setting">
                    Current title:{" "}
                    <input
                        ref={titleInputRef}
                        placeholder="Rammerhead Browser"
                        defaultValue={state.tabTitle}
                        onInput={handleTitleInput}
                    />
                </div>
                <div className="rhsettings-titlefavicon-setting">
                    Current favicon:{" "}
                    <img draggable="false" src={favicon || "/favicon.png"} alt="" />
                </div>
                <div className="rhsettings-titlefavicon-setting rhsettings-titlefavicon-setting-presets">
                    Presets:
                    <FaviconPreset src="/favicon.png" onSelect={handlePresetClick} />
                    <FaviconPreset
                        src="/static-assets/favicon-presets/google.ico"
                        onSelect={handlePresetClick}
                    />
                    <FaviconPreset
                        src="/static-assets/favicon-presets/drive.png"
                        onSelect={handlePresetClick}
                    />
                    <FaviconPreset
                        src="/static-assets/favicon-presets/docs.ico"
                        onSelect={handlePresetClick}
                    />
                    <FaviconPreset
                        src="/static-assets/favicon-presets/gmail.ico"
                        onSelect={handlePresetClick}
                    />
                    <FaviconPreset
                        src="/static-assets/favicon-presets/microsoft.ico"
                        onSelect={handlePresetClick}
                    />
                    <FaviconPreset
                        src="/static-assets/favicon-presets/microsoft-teams.png"
                        onSelect={handlePresetClick}
                    />
                    <FaviconPreset
                        src="/static-assets/favicon-presets/word.ico"
                        onSelect={handlePresetClick}
                    />
                    <FaviconPreset
                        src="/static-assets/favicon-presets/outlook.ico"
                        onSelect={handlePresetClick}
                    />
                </div>
                <FileSelector
                    onError={setPresetError}
                    style={{ marginLeft: 0, marginTop: 5 }}
                    accept=".ico,.png,.svg,.jpg,.jpeg,.gif"
                    readAs="readAsDataURL"
                    onFile={handleFaviconUpload}
                >
                    Upload favicon
                </FileSelector>
                <button style={{ marginLeft: 0 }} onClick={handleReset}>
                    Reset changes
                </button>
            </div>
            <hr />
            <h2>Other settings</h2>
            <div className="rhsettings-section">
                <input
                    id="rhsettings-shuffling"
                    type="checkbox"
                    defaultChecked={state.isShufflingEnabled}
                    onClick={handleShuffling}
                />
                <label htmlFor="rhsettings-shuffling">Enable URL Shuffling</label>
            </div>
            <hr />
            <h2>Import/export browser profile</h2>
            <h3>Migrate all your site data to here or another device.</h3>
            <div className="rhsettings-section">
                <p style={{ fontWeight: "bold", marginBottom: 2 }}>
                    Note: do NOT share your exported browser profile with anyone
                </p>
                <p
                    style={{
                        fontWeight: "bold",
                        marginBottom: 10,
                        color: "#686868",
                    }}
                >
                    Note 2: importing will automatically restart the browser
                </p>
                {importError && (
                    <p
                        style={{
                            fontWeight: "bold",
                            marginBottom: 10,
                            color: "#cf3b3b",
                        }}
                    >
                        Error while importing profile: {importError}
                    </p>
                )}
                <p>
                    Rammerhead profile created on{" "}
                    <span>{state.profileCreationTime}</span>
                </p>
                <FileSelector
                    onError={setImportError}
                    style={{ marginLeft: 0 }}
                    accept=".rf"
                    readAs="readAsArrayBuffer"
                    onFile={handleImportProfile}
                >
                    Import rammerfile
                </FileSelector>
                <button onClick={handleExportProfile}>Export rammerfile</button>
            </div>
            <hr />
            <h2>Reset this browser</h2>
            <h3>
                Deletes everything, including site data and any Rammerhead settings.
                Make sure you export your rammerfile before you do so!
            </h3>
            <div className="rhsettings-section">
                <button onClick={handleResetEverything}>Reset everything</button>
            </div>
        </div>
    );
}
