import { useEffect, useState } from 'react';
import { SettingsSection } from '../elements/section';
import { BrandingElement } from '../elements/section-elements/branding';
import { InfoElement } from '../elements/section-elements/info';
import { LinkElement } from '../elements/section-elements/link';
import { SwitchElement } from '../elements/section-elements/switch';
import { InputElement } from '../elements/section-elements/input';
import { SelectElement } from '../elements/section-elements/select';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import LinkIcon from '@mui/icons-material/Link';
import { getSessionContext } from "../../../SessionContext";

export function EngineSection() {
    const e = getSessionContext();
    const isBetterRH = (window && ("BetterRH" in window));
    const [seBase, setSEBase] = useState("");
    // eslint-disable-next-line no-unused-vars
    const searchEngineBases = {
        "google": "https://www.google.com/search?q=",
        "brave": "https://search.brave.com/search?q=",
        "bing": "https://www.bing.com/search?q=",
        "duckduckgo": "https://duckduckgo.com/?q="
    }

    const searchEngineNames = {
        "google": "Google Search",
        "brave": "Brave Search",
        "bing": "Bing",
        "duckduckgo": "DuckDuckGo",
    }

    const searchEngineIcons = {
        "google": "https://www.google.com/s2/favicons?domain=google.com&sz=32",
        "brave": "https://www.google.com/s2/favicons?domain=search.brave.com&sz=32",
        "bing": "https://www.google.com/s2/favicons?domain=bing.com&sz=32",
        "duckduckgo": "https://www.google.com/s2/favicons?domain=duckduckgo.com&sz=32"
    }

    const selectOptions = Object.keys(searchEngineBases).map(e => ({ value: searchEngineBases[e], label: searchEngineNames[e], icon: searchEngineIcons[e], default: (e === "google") }))

    const translateSEBase = function(_) {
        const invertedSE = Object.fromEntries(Object.entries(searchEngineBases).map(e => e.reverse()));
        if (!invertedSE[_]) return null;
        return invertedSE[_];
    }

    const setBRHSearchEngine = function(url) {
        if (!isBetterRH) return; // Stub connection
        window.windowethToppeth.BetterRH.searchEngine = url;
        setSEBase(url);
    }

    useEffect(() => {
        let isMounted = true;
        const pullSearchEngine = async function() {
            const searchEngine = await e.getSearchEngine();
            if (isMounted) {
                setSEBase(searchEngine);
            }
        };

        pullSearchEngine();

        // Poll for changes every 500ms
        const interval = setInterval(pullSearchEngine, 500);

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, [e]);

    return (
        <>
            <SettingsSection title="Search Engine">
                <BrandingElement customTitle={searchEngineNames[translateSEBase(seBase)] || "Unknown Engine"} customLogo={new URL((searchEngineIcons[translateSEBase(seBase)] || "/logo.png"), `https://rhsettings.lhost.dev`)} />
                <SelectElement icon={<TravelExploreIcon />} label="Select a Search Engine" options={selectOptions} currentState={(Object.values(searchEngineBases).includes(seBase)? seBase : "https://www.google.com/search?q=")} handleChange={(value) => e.setSearchEngine(value)} />
            </SettingsSection>
        </>
    )
}