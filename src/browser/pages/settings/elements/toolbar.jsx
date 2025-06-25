export function Toolbar() {
    const isBetterRH = (window && ("BetterRH" in window));
    return (
        <div id="toolbar" autoFocus="" role="banner" narrow-threshold="980">
            <div id="leftContent">
                <div id="leftSpacer">
                    <slot name="product-logo">
                        <picture>
                            <source media="(prefers-color-scheme: dark)" srcSet={isBetterRH? "/favicon.png" : "/logo.png"} />
                            <img id="product-logo" src={isBetterRH? "/favicon.png" : "/logo.png"} role="presentation" />
                        </picture>
                    </slot>
                    <h1>Settings</h1>
                </div>
            </div>
            <div id="centeredContent" className="hidden">
                <div id="search" label="Search settings" clear-label="Clear search" autoFocus="" icon-override="">
                    <div id="background"></div>
                    <div id="stateBackground"></div>
                    <div id="content">
                        <div id="icon-button" title="Search settings" tabIndex="-1" aria-hidden="true" role="button" aria-disabled="false">
                            <div id="icon">
                                <div id="maskedImage"></div>
                                <div id="rhicon">
                                    <svg id="baseSvg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%"}} viewBox="0 0 24 24" className="cr-iconset-svg-icon_" role="none">
                                        <g>
                                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div id="searchTerm">
                            <label id="prompt" htmlFor="searchInput" aria-hidden="true">
                                Search sessions
                            </label>
                            <input id="searchInput" aria-labelledby="prompt" autoCapitalize="off" autoComplete="off" type="search" spellCheck="false" autoFocus="" />
                        </div>
                        <div id="icon-button" title="Clear search" role="button" tabIndex="0" aria-disabled="false" className="searchClear hidden">
                            <div id="icon">
                                <div id="maskedImage"></div>
                                <div id="rhicon">
                                    <svg id="baseSvg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" focusable="false" style={{pointerEvents: "none", display: "block", width: "100%", height: "100%"}} viewBox="0 0 24 24" className="cr-iconset-svg-icon_" role="none">
                                        <g>
                                            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z">
                                            </path>
                                        </g>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="rightContent">
                <div id="rightSpacer"></div>
            </div>
        </div>
    )
}