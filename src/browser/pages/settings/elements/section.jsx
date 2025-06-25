import "../css/section.css";
export function SettingsSection({ title, children }) {
    return (
        <div className="section">
            <div className="section-header">
                <h2 className="section-title">{title}</h2>
            </div>
            <div className="section-content">
                {children}
            </div>
        </div>
    )
}