
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import BrushIcon from '@mui/icons-material/Brush';
import WebIcon from '@mui/icons-material/Web';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import GitHubIcon from '@mui/icons-material/GitHub';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import DevicesIcon from '@mui/icons-material/Devices';
import WavingHandIcon from '@mui/icons-material/WavingHand';

const tabLabels = {
    "welcome": "Welcome",
    "sync": "Sync",
    "theming": "Theming",
    "browser": "Browser",
    "about": "About",
    "source": "Source",
    "session": "Session"
}

export function SettingsDrawer({ drawerWidth, hideText, activeTab, updateTab }) {
    const updateTabName = updateTab || (() => null);
    const isBetterRH = (window.windowethToppeth && ("BetterRH" in window.windowethToppeth));

    const defaultSections = ["theming", "browser", "session"];
    const betterrhSections = ["sync", ...defaultSections];

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { top: "auto", left: "auto", width: drawerWidth, boxSizing: 'border-box', color: 'var(--browser-text-primary-color)', backgroundColor: (hideText? "var(--browser-accent-color-dark)" : "var(--browser-accent-color)"), borderRight: 'none' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
            <List sx={{ paddingTop: "0px" }}>
                    {["welcome"].map((text) => (
                    <ListItem key={text} disablePadding sx={{ margin: (hideText? "8px 0px" : ""), marginLeft: (hideText? "7px" : "0px"), borderRadius: (hideText? "50px" : '0px 50px 50px 0px'), overflow: 'hidden', width: (hideText? "fit-content": "100%") }}>
                        <ListItemButton sx={{ paddingTop: '6px', paddingBottom: '6px', [`&.Mui-selected`]: { backgroundColor: (hideText? 'var(--browser-accent-color)' : 'var(--browser-accent-color-dark)') }, [`&.Mui-selected:hover`]: { backgroundColor: (hideText? 'var(--browser-accent-color)' : 'var(--browser-accent-color-dark)') } }} selected={(activeTab === text)} onClick={() => updateTabName(text)}>
                            <ListItemIcon sx={{ marginLeft: (hideText? "0px" : "7px"), minWidth: (hideText? "20px" : "40px"), [`& .MuiSvgIcon-root`]: { width: "20px", height: "20px", color: ((activeTab === text)? "var(--browser-text-primary-color)" : "var(--browser-text-secondary-color)") } }}>
                                {text === "welcome"? <WavingHandIcon /> : <></>}
                            </ListItemIcon>
                            {hideText? <></> : <ListItemText sx={{ ['& .MuiTypography-root']: { fontWeight: "500", fontSize: "14px", color: ((activeTab === text)? (hideText? "var(--browser-text-secondary-color)" : "var(--browser-text-primary-color)") : (!hideText? "var(--browser-text-secondary-color)" : "var(--browser-text-primary-color)")) } }} primary={tabLabels[text]} />}
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
                <div className="menu-separator" style={{ marginBottom: "8px", borderBottom: ("1px solid "+(hideText? "var(--browser-accent-color)" : "var(--browser-accent-color-dark)")) }}></div>
                <List sx={{ paddingTop: "0px" }}>
                    {(isBetterRH? betterrhSections : defaultSections).map((text) => (
                    <ListItem key={text} disablePadding sx={{ margin: (hideText? "8px 0px" : ""), marginLeft: (hideText? "7px" : "0px"), borderRadius: (hideText? "50px" : '0px 50px 50px 0px'), overflow: 'hidden', width: (hideText? "fit-content": "100%") }}>
                        <ListItemButton sx={{ paddingTop: '6px', paddingBottom: '6px', [`&.Mui-selected`]: { backgroundColor: (hideText? 'var(--browser-accent-color)' : 'var(--browser-accent-color-dark)') }, [`&.Mui-selected:hover`]: { backgroundColor: (hideText? 'var(--browser-accent-color)' : 'var(--browser-accent-color-dark)') } }} selected={(activeTab === text)} onClick={() => updateTabName(text)}>
                            <ListItemIcon sx={{ marginLeft: (hideText? "0px" : "7px"), minWidth: (hideText? "20px" : "40px"), [`& .MuiSvgIcon-root`]: { width: "20px", height: "20px", color: ((activeTab === text)? "var(--browser-text-primary-color)" : "var(--browser-text-secondary-color)") } }}>
                                {text === "sync"? <CloudSyncIcon /> : <></>}
                                {text === "theming"? <BrushIcon /> : <></>}
                                {text === "browser"? <WebIcon /> : <></>}
                                {text === "session"? <DevicesIcon /> : <></>}
                            </ListItemIcon>
                            {hideText? <></> : <ListItemText sx={{ ['& .MuiTypography-root']: { fontWeight: "500", fontSize: "14px", color: ((activeTab === text)? (hideText? "var(--browser-text-secondary-color)" : "var(--browser-text-primary-color)") : (!hideText? "var(--browser-text-secondary-color)" : "var(--browser-text-primary-color)")) } }} primary={tabLabels[text]} />}
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
                <div className="menu-separator" style={{ marginBottom: "8px", borderBottom: ("1px solid "+(hideText? "var(--browser-accent-color)" : "var(--browser-accent-color-dark)")) }}></div>
                <List sx={{ paddingTop: "0px" }}>
                    {["about"].map((text) => (
                    <ListItem key={text} disablePadding sx={{ margin: (hideText? "8px 0px" : ""), marginLeft: (hideText? "7px" : "0px"), borderRadius: (hideText? "50px" : '0px 50px 50px 0px'), overflow: 'hidden', width: (hideText? "fit-content": "100%") }}>
                        <ListItemButton sx={{ paddingTop: '6px', paddingBottom: '6px', [`&.Mui-selected`]: { backgroundColor: (hideText? 'var(--browser-accent-color)' : 'var(--browser-accent-color-dark)') }, [`&.Mui-selected:hover`]: { backgroundColor: (hideText? 'var(--browser-accent-color)' : 'var(--browser-accent-color-dark)') } }} selected={(activeTab === text)} onClick={() => updateTabName(text)}>
                            <ListItemIcon sx={{ marginLeft: (hideText? "0px" : "7px"), minWidth: (hideText? "20px" : "40px"), [`& .MuiSvgIcon-root`]: { width: "20px", height: "20px", color: ((activeTab === text)? "var(--browser-text-primary-color)" : "var(--browser-text-secondary-color)") } }}>
                                {text === "about"? <HelpCenterIcon /> : <></>}
                            </ListItemIcon>
                            {hideText? <></> : <ListItemText sx={{ ['& .MuiTypography-root']: { fontWeight: "500", fontSize: "14px", color: ((activeTab === text)? (hideText? "var(--browser-text-secondary-color)" : "var(--browser-text-primary-color)") : (!hideText? "var(--browser-text-secondary-color)" : "var(--browser-text-primary-color)")) } }} primary={tabLabels[text]} />}
                        </ListItemButton>
                    </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}