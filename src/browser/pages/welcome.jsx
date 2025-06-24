
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

export function WelcomePage({ goToUrl }) {
    return (
        <div className="rhpages">
            <h1>
                Welcome!
            </h1>
            <p style={{ fontSize: 20 }}>
                Rammerhead Browser is the new way to browse the internet, where all of your cookies and data can be easily saved and transfered with one file. Go to <InternalLink goToUrl={goToUrl} href="rh://settings" /> to learn more.
            </p>
        </div>
    );
}