import { ChangelogPage } from "./changelog";
import { DebuggerPage } from "./debugger";
import { EmptyPage } from "./empty";
import { NewTabPage } from "./newtab";
<<<<<<< HEAD
=======
import { SettingsPage } from "./settings";
import { WelcomePage } from "./welcome";
>>>>>>> 75540cf (Uhhhh)

export default ([
    {
        host: "empty",
        title: "Empty",
        existsOnlyAtRoot: true,
<<<<<<< HEAD
=======
        showSuggestions: false,
>>>>>>> 75540cf (Uhhhh)
        Component: EmptyPage
    },
    {
        host: "new-tab",
        title: "New Tab",
        existsOnlyAtRoot: true,
<<<<<<< HEAD
=======
        showSuggestions: false,
>>>>>>> 75540cf (Uhhhh)
        Component: NewTabPage
    },
    {
        host: "changelog",
        title: "Changelog",
        existsOnlyAtRoot: true,
<<<<<<< HEAD
=======
        showSuggestions: true,
>>>>>>> 75540cf (Uhhhh)
        Component: ChangelogPage
    },
    {
        host: "debugger",
        title: "Debugger",
        existsOnlyAtRoot: true,
<<<<<<< HEAD
        Component: DebuggerPage
=======
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
>>>>>>> 75540cf (Uhhhh)
    }
]);