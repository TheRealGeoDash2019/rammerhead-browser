import React, { useState, useEffect } from "react";
import { Toolbar } from './elements/toolbar';
import { SettingsDrawer } from './elements/drawer';
import { Container, Box } from '@mui/material';
import { AboutSection } from './sections/about';
import { DebugSection } from './sections/debug';
import { SyncSection } from './sections/sync';
import { ThemingSection } from './sections/theming';
import { CloakSection } from './sections/cloak';
import { BrowserSection } from './sections/browser';
import { EngineSection } from './sections/engine';
import { SessionSection } from './sections/session';
import { WelcomeSection } from './sections/welcome';
import { getSessionContext } from "../../SessionContext";
import './css/index.css'

const useMatchMedia = (mediaQuery, initialValue) => {
    const [isMatching, setIsMatching] = useState(initialValue)
    useEffect(() => {
        const watcher = window.matchMedia(mediaQuery)
        setIsMatching(watcher.matches)
        const listener = (matches) => {
            setIsMatching(matches.matches)
        }
        if (watcher.addEventListener) {
            watcher.addEventListener('change', listener)
        } else {
            watcher.addListener(listener)
        }
        return () => {
            if (watcher.removeEventListener) {
                return watcher.removeEventListener('change', listener)
            } else {
                return watcher.removeListener(listener)
            }
        }
    }, [mediaQuery])

    return isMatching
};

function getAppropriateSection(tabName, props = {}) {
  if (tabName === "about") {
    return (<AboutSection {...props} />);
  } else if (tabName === "sync") {
    return (<SyncSection {...props} />);
  } else if (tabName === "theming") {
    return (<ThemingSection {...props} />);
  } else if (tabName === "browser") {
    return (<BrowserSection {...props} />);
  } else if (tabName === "cloak") {
    return (<CloakSection {...props} />);
  } else if (tabName === "engine") {
    return (<EngineSection {...props} />);
  } else if (tabName === "session") {
    return (<SessionSection {...props} />);
  } else if (tabName === "welcome") {
    return (<WelcomeSection {...props} />);
  } else {
    return (<DebugSection {...props} />);
  }
}

export function SettingsPage() {
    // const e = getSessionContext();
    const drawerWidth = (useMatchMedia("(min-width:800px)", true)? 250 : 66);
    const hideText = !useMatchMedia("(min-width:800px)", true);
    const systemTabs = ["welcome", "sync", "theming", "browser", "session", "about"];
    const [currentTab, setTab] = useState("welcome");

    return (
        <div className="rhpages brhsettings">
            <Toolbar />
            <SettingsDrawer drawerWidth={drawerWidth} hideText={hideText} tabList={systemTabs} activeTab={currentTab} updateTab={setTab} />
            <Box className="settings-root" component="main" sx={{ display: "flex", flexDirection: "column", alignItems: "center", position: "absolute", padding: "8px", height: "calc(100vh - 56px)", width: ("calc(100vw - "+drawerWidth+"px)"), maxWidth: ("calc(100% - "+drawerWidth+"px)"), boxSizing: "border-box", marginTop: "56px", marginRight: ("0px"), marginLeft: (drawerWidth + "px") }}>
                {getAppropriateSection(currentTab, {
                    setTab,
                    currentTab
                })}
            </Box>
            <Box className="right-side" sx={{ height: "100vh", marginLeft: (`calc(100vw - ${drawerWidth}px)`), width: (drawerWidth + "px"), maxWidth: (drawerWidth + "px") }}></Box>
        </div>
    )
}
