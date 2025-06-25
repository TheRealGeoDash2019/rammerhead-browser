import { useState, useEffect } from "react"; 

export function BrandingElement({ useBRHLogo = false, customTitle = "", customLogo = "" }) {
    const isBetterRH = (window && ("BetterRH" in window)) || useBRHLogo;
    const headerTitle = (customTitle? customTitle : (isBetterRH? "BetterRH Browser" : "Rammerhead Browser"));
    const headerLogo = (customLogo? customLogo : (isBetterRH? "/favicon.png" : "/logo.png"));

    const [mainTitle, setMainTitle] = useState(headerTitle);
    const [mainLogo, setMainLogo] = useState(headerLogo);

    useEffect(() => {
        const isBetterRH = (window && ("BetterRH" in window)) || useBRHLogo;
        const _headerTitle = (customTitle? customTitle : (isBetterRH? "BetterRH Browser" : "Rammerhead Browser"));
        const _headerLogo = (customLogo? customLogo : (isBetterRH? "/favicon.png" : "/logo.png"));
        setMainTitle(_headerTitle);
        setMainLogo(_headerLogo);
        console.log("update");
    }, [useBRHLogo, isBetterRH, customTitle, customLogo]);

    return (
        <div className="section-element extended">
            <img className="product-logo" src={mainLogo} alt="Product Logo" role="presentation" />
            <div className="product-title">{mainTitle}</div>
        </div>
    )
}