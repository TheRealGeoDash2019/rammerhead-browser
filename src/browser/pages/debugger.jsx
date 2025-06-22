import { getSessionContext } from "../SessionContext"
import Markdown from "react-markdown"

export function DebuggerPage() {
    var e = getSessionContext();

    const markDown = [
        "# 🪲 Debugging Info",
        "",
        `- **🪪 Session ID:** \`${e.id}\``,
        `- **🔏 Signed ID:** \`${e.signedId}\``,
        `- **📦 Database Name:** \`${e.db.name}\``,
        `- **🎟️ Active Speedticket:** \`${e.speedTicketActive? "🟢 Yes" : "🔴 No"}\``
    ].join("\n");

    return (
        <div className="rhpages" style={{userSelect: "none"}}>
            <Markdown>
                {markDown}
            </Markdown>
        </div>
    )
}