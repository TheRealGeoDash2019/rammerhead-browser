import { SettingsSection } from '../elements/section';
import { BrandingElement } from '../elements/section-elements/branding';
import { InfoElement } from '../elements/section-elements/info';
import { LinkElement } from '../elements/section-elements/link';
import { ButtonElement } from '../elements/section-elements/button';
import { useEffect, useState } from 'react';
import PublicIcon from '@mui/icons-material/Public';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WarningIcon from '@mui/icons-material/Warning';
import { getSessionContext } from "../../../SessionContext";

export function SessionSection({ browserState }) {
    const e = getSessionContext();
    const isBetterRH = (window && ("BetterRH" in window));
    // eslint-disable-next-line no-unused-vars
    const [errorMessage, setErrorMessage] = useState("");
    const [rammerheadRegion, setRammerheadRegion] = useState("Unknown");
    const [profileCreationDate, setProfileCreationDate] = useState("Unknown");

    async function exportProfile() {
        const exportedProfile = await e.exportBrowserProfile();
        const n = new Blob([exportedProfile], {
          type: "application/octet-stream"   
        });
        const r = document.createElement("a");
        r.download = "profile.rf";
        r.href = URL.createObjectURL(n);
        r.onclick = function() {
          setTimeout((function() {
            URL.revokeObjectURL(n)
          }));
        };
        r.click();
    }

    function importProfile(dataOverride = null) {
        return new Promise((resv, rej) => {
          try {
            return showOpenFilePicker({
              multiple: false,
              accept: ".rf"
            }).then(async files => {
              if (files && files[0]) {
                const fileInfo = await files[0].getFile();
                const fileContent = await fileInfo.arrayBuffer();
                return resv(new Uint8Array(fileContent));
              }
            }).catch(err => {
              return rej("Something Broke")
            })
          } catch {
            return rej("Missing APIs")
          }
        });
    };

    const handleImport = function() {
        return importProfile().then(bytes => {
            e.importBrowserProfile(bytes).then((err) => {
                if (!err) window.location.reload();
                else {
                    setErrorMessage("Error whilst Importing: " + err);
                    setTimeout(() => {
                        setErrorMessage("");
                    }, 3500);
                }
            })
        });
    }

    useEffect(() => {
        let isMounted = true;
        const pullBrowserInfo = async function() {
            const profileCreated = await e.getProfileCreationTime();
            if (isMounted) {
                setProfileCreationDate((new Date(profileCreated)).toString());
                setRammerheadRegion(e.region);
            }
        };

        pullBrowserInfo();

        // Poll for changes every 500ms
        const interval = setInterval(pullBrowserInfo, 500);

        return () => {
            isMounted = false;
            clearInterval(interval);
        };
    }, [e]);

    return (
        <>
            <SettingsSection title="Session">
                <BrandingElement customTitle="Session Info" />
                <InfoElement icon={<PublicIcon />} label="Browser Region" sublabel={rammerheadRegion} />
                <InfoElement icon={<CalendarMonthIcon />} label="Session Creation Date" sublabel={profileCreationDate} />
                <ButtonElement label="Import a Rammerhead Session" sublabel={errorMessage} buttonLabel="Import" onClick={() => handleImport()} />
                <ButtonElement label="Export your Rammerhead Session" buttonLabel="Export" onClick={() => exportProfile()} />
                <InfoElement icon={<WarningIcon />} sublabel="Danger Zone" />
                <ButtonElement label="Reset Browser and Session" sublabel={`WARNING: This action is irreversable!`} buttonLabel="Reset" onClick={() => window?.resetBrowser?.()} />
            </SettingsSection>
        </>
    )
}