import { getSessionContext } from "../SessionContext"
import Markdown from "react-markdown"

export function ChangelogPage() {
    var e = getSessionContext(); // Same as window.rhSession

    return (
        <div className="rhpages">
            <Markdown>
                {e.staticAssets.changelog}
            </Markdown>
        </div>
    )
}