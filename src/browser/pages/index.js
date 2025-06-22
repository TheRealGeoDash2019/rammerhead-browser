import { ChangelogPage } from "./changelog";
import { DebuggerPage } from "./debugger";
import { EmptyPage } from "./empty";
import { NewTabPage } from "./newtab";

export default ([
    {
        host: "empty",
        title: "Empty",
        existsOnlyAtRoot: true,
        Component: EmptyPage
    },
    {
        host: "new-tab",
        title: "New Tab",
        existsOnlyAtRoot: true,
        Component: NewTabPage
    },
    {
        host: "changelog",
        title: "Changelog",
        existsOnlyAtRoot: true,
        Component: ChangelogPage
    },
    {
        host: "debugger",
        title: "Debugger",
        existsOnlyAtRoot: true,
        Component: DebuggerPage
    }
]);