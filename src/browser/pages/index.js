import { ChangelogPage } from "./changelog";
import { DebuggerPage } from "./debugger";
import { EmptyPage } from "./empty";
import { NewTabPage } from "./newtab";
import { SettingsPage } from "./settings/index";
import { WelcomePage } from "./welcome";

export default ([
    {
        host: "empty",
        title: "Empty",
        existsOnlyAtRoot: true,
        showSuggestions: false,
        Component: EmptyPage
    },
    {
        host: "new-tab",
        title: "New Tab",
        existsOnlyAtRoot: true,
        showSuggestions: false,
        Component: NewTabPage
    },
    {
        host: "changelog",
        title: "Changelog",
        existsOnlyAtRoot: true,
        showSuggestions: true,
        Component: ChangelogPage
    },
    {
        host: "debugger",
        title: "Debugger",
        existsOnlyAtRoot: true,
        showSuggestions: true,
        Component: DebuggerPage
    },
    {
        host: "settings",
        title: "Settings",
        existsOnlyAtRoot: true,
        showSuggestions: true,
        Component: SettingsPage
    },
    {
        host: "welcome",
        title: "Welcome",
        existsOnlyAtRoot: true,
        showSuggestions: true,
        Component: WelcomePage
    }
]);