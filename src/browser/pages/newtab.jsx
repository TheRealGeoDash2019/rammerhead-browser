<<<<<<< HEAD
export function NewTabPage() {
    return (
        <div className="rhpages">
            <h2 style={{ fontWeight: "normal" }}>
                New Tab
            </h2>
=======
import { useRef } from "react";
import { getSessionContext } from "../SessionContext"

function InternalLink(props) {
    var t = props.goToUrl,
        n = props.href,
        r = props.text;
    return (
        <a href={n} onClick={(e) => {e.preventDefault(),t(n);}}>
            {r || n}
        </a>
    );
}

function correctUrl(e) {
    return e
        ? /^javascript:/i.test(e)
            ? e
            : (/^(?:[a-z0-9]+):\/\//i.test(e) ||
                    (e = "http://" + e),
                /^(?:[a-z0-9]+):\/\/[^/]+$/i.test(e) && (e += "/"),
                (e = (e = e.replace(
                    /(^[a-z0-9]+:\/\/[^/]+)/i,
                    function (e, t) {
                        return t.toLowerCase();
                    }
                )).replace(
                    /^rammerhead:\/\/([A-Za-z0-9]?)/,
                    "rh://$1"
                )))
        : "";
}

function createIframe(e, t) {
    e.document.documentElement.innerHTML =
        '<body style="margin: 0;"><iframe src="'.concat(
            t.replace(/"/g, '\\"'),
            '" style="width: 100vw; height: 100vh; margin: 0; border: 0;" sandbox="allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-same-origin allow-scripts"></iframe></body>'
        );
}

export function NewTabPage({ goToUrl }) {
    var n = getSessionContext(), // Same as window.rhSession
        i = useRef(),
        // [hasActiveSpeedticket /* var u */, toggleActiveSpeedticket /* var l */] = useState(n.speedTicketActive),
        // hasSpeedTicketError = (hasActiveSpeedticket && !n.speedTicketErr),
        // [tempHideFlagState /* var d */, setTempHideFlag /* var h */] = useState(!!window.rhTempHidePanel),
        launchUrl = async function (r) {
        if (i.current && i.current.value) {
            var o = correctUrl(i.current.value);
            if (r === "in-browser") {
                goToUrl(o);
            } else if (r === "ab-cloaked") {
                var win = window.open();
                var url = await n.getFullProxyUrl(o);
                createIframe(win, url);
            } else if (r === "open-direct") {
                var directUrl = await n.getFullProxyUrl(o);
                window.open.call(window, directUrl, "_blank", "noopener");
            } else {
                throw new TypeError("unknown type: " + r);
            }
        }
    };
    return (
        <div className="rhpages rhnewtab">
            <div className="rhnewtab-header">
                <div>

                </div>
                <img src="/logo.png" width="300px"></img>
                <div style={{ justifySelf: "end" }}>

                </div>
            </div>
            <p className="rhnewtab-msg">
                Click on the URL bar to start searching.
            </p>
            <div className="rhnewtab-oldui-container">
                <p className="rhnewtab-oldui-msg">
                    or input your URL directly: 
                </p>
                <input ref={i} type="text" placeholder="https://www.google.com" spellCheck={false} />
                <div className="rhnewtab-oldui-btn-container">
                    <span onClick={() => launchUrl("in-browser")}>Open in-browser</span>
                    <span onClick={() => launchUrl("ab-cloaked")}>Open AB cloaked</span>
                    <span onClick={() => launchUrl("open-direct")}>Open direct</span>
                </div>
            </div>
            <p className="rhnewtab-discord">
                Join the <a href="https://discord.gg/CantCVrkj9" target="_blank" rel="noreferrer">discord server</a> for help or just chill.
            </p>
            <div className="rhnewtab-version-container">
                <p className="rhnewtab-version-number">
                    Browser version: v{n.staticAssets.version}
                </p>
                <p className="rhnewtab-version-number">
                    Rammerhead version: v{n.staticAssets.openSourceVersion}
                </p>
                <p>
                    (view browser changelog <InternalLink goToUrl={goToUrl} href="rh://changelog" text="here" />)
                </p>
                <p>
                    (view Rammerhead changelog <a target="_blank" rel="noreferrer" href="https://github.com/binary-person/rammerhead/blob/master/CHANGELOG.md">here</a>)
                </p>
            </div>
>>>>>>> 75540cf (Uhhhh)
        </div>
    )
}