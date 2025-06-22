import { forwardRef } from "react";

function omit(obj, excludeKeys) {
    if (obj == null) return {};
    var result = {}, key, i, keys = Object.keys(obj);
    for (i = 0; i < keys.length; i++)
        (key = keys[i]), excludeKeys.indexOf(key) >= 0 || (result[key] = obj[key]);
    if (Object.getOwnPropertySymbols) {
        var syms = Object.getOwnPropertySymbols(obj);
        for (i = 0; i < syms.length; i++)
            (key = syms[i]),
                excludeKeys.indexOf(key) >= 0 ||
                    (Object.prototype.propertyIsEnumerable.call(obj, key) && (result[key] = obj[key]));
    }
    return result;
}

function AddTabButton(props, ref) {
    const { title, titleId, ...rest } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fillRule="evenodd"
            className="vector-svg-241070"
            viewBox="0 0 24 24"
            ref={ref}
            aria-labelledby={titleId}
            {...rest}
        >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
                strokeWidth="0px"
                strokeLinecap="round"
                shapeRendering="geometricPrecision"
                d="M 21 12 h -8 v 8 h -3 v -8 H 2 v -3 h 8 V 2 h 3 v 8 h 8 Z"
            />
        </svg>
    );
}

function ABCloakButton(props, ref) {
    const { title, titleId, ...rest } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={48}
            height={48}
            fillRule="evenodd"
            className="vector-svg-241070"
            viewBox="0 0 48 48"
            ref={ref}
            aria-labelledby={titleId}
            {...rest}
        >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
                strokeWidth="0px"
                strokeLinecap="round"
                shapeRendering="geometricPrecision"
                d="M 38 38 H 10 V 10 h 14 V 6 H 10 c -2.21 0 -4 1.79 -4 4 v 28 c 0 2.21 1.79 4 4 4 h 28 c 2.21 0 4 -1.79 4 -4 V 24 h -4 v 14 Z M 28 6 v 4 h 7.17 L 15.51 29.66 l 2.83 2.83 L 38 12.83 V 20 h 4 V 6 H 28 Z"
            />
        </svg>
    );
}

function BackButton(props, ref) {
    const { title, titleId, ...rest } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            fillRule="evenodd"
            className="vector-svg-241070"
            viewBox="0 0 32 32"
            ref={ref}
            aria-labelledby={titleId}
            {...rest}
        >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
                strokeWidth="0px"
                strokeLinecap="round"
                shapeRendering="geometricPrecision"
                d="M 4.22 14.03 C 3.53 14.15 3 14.77 3 15.5 C 3 16.25 3.53 16.86 4.24 16.98 L 4.02 17.19 L 14.36 27.51 C 14.65 27.81 15.05 28 15.5 28 C 16.33 28 17 27.33 17 26.5 C 17 26.05 16.8 25.65 16.49 25.38 L 16.55 25.32 L 8.22 17 L 27.51 17 C 28.33 17 29 16.33 29 15.5 C 29 14.67 28.33 14 27.51 14 L 8.2 14 L 16.55 5.66 C 16.81 5.34 17 4.94 17 4.5 C 17 3.68 16.33 3 15.5 3 C 15.06 3 14.66 3.2 14.39 3.5 L 14.36 3.47 L 4 13.81 Z"
            />
        </svg>
    );
}

function ForwardButton(props, ref) {
    const { title, titleId, ...rest } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            fillRule="evenodd"
            className="vector-svg-241070"
            viewBox="0 0 32 32"
            ref={ref}
            aria-labelledby={titleId}
            {...rest}
        >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
                strokeWidth="0px"
                strokeLinecap="round"
                shapeRendering="geometricPrecision"
                d="M 27.78 14.03 C 28.47 14.15 29 14.77 29 15.5 C 29 16.25 28.47 16.86 27.76 16.98 L 27.98 17.19 L 17.64 27.51 C 17.35 27.81 16.95 28 16.5 28 C 15.67 28 15 27.33 15 26.5 C 15 26.05 15.2 25.65 15.51 25.38 L 15.45 25.32 L 23.78 17 L 4.49 17 C 3.67 17 3 16.33 3 15.5 C 3 14.67 3.67 14 4.49 14 L 23.8 14 L 15.45 5.66 C 15.19 5.34 15 4.94 15 4.5 C 15 3.68 15.67 3 16.5 3 C 16.94 3 17.34 3.2 17.61 3.5 L 17.64 3.47 L 28 13.81 Z"
            />
        </svg>
    );
}

function StopButton(props, ref) {
    const { title, titleId, ...rest } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            fillRule="evenodd"
            className="vector-svg-241070"
            viewBox="0 0 32 32"
            ref={ref}
            aria-labelledby={titleId}
            {...rest}
        >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
                strokeWidth="0px"
                strokeLinecap="round"
                shapeRendering="geometricPrecision"
                d="M 16 18.37 L 6.86 27.51 C 6.21 28.16 5.15 28.16 4.49 27.51 C 3.84 26.85 3.84 25.79 4.49 25.14 L 13.63 16 L 4.49 6.86 C 3.84 6.21 3.84 5.15 4.49 4.49 C 5.15 3.84 6.21 3.84 6.86 4.49 L 16 13.63 L 25.14 4.49 C 25.79 3.84 26.85 3.84 27.51 4.49 C 28.16 5.15 28.16 6.21 27.51 6.86 L 18.37 16 L 27.51 25.14 C 28.16 25.79 28.16 26.85 27.51 27.51 C 26.85 28.16 25.79 28.16 25.14 27.51 Z"
            />
        </svg>
    );
}

function ReloadButton(props, ref) {
    const { title, titleId, ...rest } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            fillRule="evenodd"
            className="vector-svg-241070"
            viewBox="0 0 32 32"
            ref={ref}
            aria-labelledby={titleId}
            {...rest}
        >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
                strokeWidth="0px"
                strokeLinecap="round"
                shapeRendering="geometricPrecision"
                d="M 25.1 20.15 L 25.08 20.14 C 23.51 23.59 20.04 26 16 26 C 10.48 26 6 21.52 6 16 C 6 10.48 10.48 6 16 6 C 19.02 6 21.72 7.34 23.55 9.45 L 23.55 9.45 L 19 14 L 25.8 14 L 28.83 14 L 30 14 L 30 3 L 25.67 7.33 C 23.3 4.67 19.85 3 16 3 C 8.82 3 3 8.82 3 16 C 3 23.18 8.82 29 16 29 C 21.27 29 25.8 25.86 27.84 21.34 C 27.96 21.13 28.03 20.88 28.03 20.61 C 28.03 19.78 27.36 19.11 26.53 19.11 C 25.87 19.11 25.3 19.55 25.1 20.15 Z"
            />
        </svg>
    );
}

function DefaultSearchIcon(props, ref) {
    const { title, titleId, ...rest } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            fillRule="evenodd"
            className="vector-svg-241070"
            viewBox="0 0 20 20"
            ref={ref}
            aria-labelledby={titleId}
            {...rest}
        >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
                strokeWidth="0px"
                strokeLinecap="round"
                shapeRendering="geometricPrecision"
                d="M 9 14 h 2 v -4 H 9 v 4 Z m 1 -12 c -4.42 0 -8 3.58 -8 8 c 0 4.42 3.58 8 8 8 c 4.42 0 8 -3.58 8 -8 c 0 -4.42 -3.58 -8 -8 -8 Z m 0 14 c -3.31 0 -6 -2.69 -6 -6 c 0 -3.31 2.69 -6 6 -6 c 3.31 0 6 2.69 6 6 c 0 3.31 -2.69 6 -6 6 Z M 9 8 h 2 V 6 H 9 v 2 Z"
            />
        </svg>
    );
}

function InternalIcon(props, ref) {
    const { title, titleId, ...rest } = props;
    return (
        <svg
            viewBox="0 0 24 24"
            width={24}
            height={24}
            xmlns="http://www.w3.org/2000/svg"
            ref={ref}
            aria-labelledby={titleId}
            {...rest}
        >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
                d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zM4 12h4.4c3.407.022 4.922 1.73 4.543 5.127H9.488v2.47a8.004 8.004 0 0 0 10.498-8.083C19.327 12.504 18.332 13 17 13c-2.137 0-3.206-.916-3.206-2.75h-3.748c-.274-2.728.683-4.092 2.87-4.092 0-.975.327-1.597.811-1.97A8.004 8.004 0 0 0 4 12z"
            />
        </svg>
    );
}

function SearchIcon(props, ref) {
    const { title, titleId, ...rest } = props;
    return (
        <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            ref={ref}
            aria-labelledby={titleId}
            {...rest}
        >
            {title ? <title id={titleId}>{title}</title> : null}
            <path
                d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"
            />
        </svg>
    );
}

function PadlockIcon(e, t) {
    var n = e.title,
        i = e.titleId,
        o = omit(e, ["title", "titleId"]);
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            fillRule="evenodd"
            className="vector-svg-241070"
            viewBox="0 0 32 32"
            ref={t}
            aria-labelledby={i}
            {...o}
        >
            {n ? <title id={i}>{n}</title> : null}
            <path
                strokeWidth="0px"
                strokeLinecap="round"
                shapeRendering="geometricPrecision"
                d="M 21 12 v -2 c 0 -2.76 -2.24 -5 -5 -5 c -2.76 0.02 -5 2.24 -5 5 v 2 h -0.5 c -0.83 0 -1.5 0.67 -1.5 1.5 v 9 c 0 0.83 0.67 1.5 1.5 1.5 h 11 c 0.83 0 1.5 -0.67 1.5 -1.5 v -9 c 0 -0.83 -0.67 -1.5 -1.5 -1.5 H 21 Z m -8 0.02 v -2.02 C 13 8.34 14.34 7 16 7 c 1.66 0 3 1.34 3 3 v 2.02 h -6 Z"
            />
        </svg>
    );
}

const da = forwardRef(AddTabButton),
    Pe = forwardRef(ABCloakButton),
    ce = forwardRef(BackButton),
    ge = forwardRef(ForwardButton),
    Te = forwardRef(StopButton),
    Ee = forwardRef(ReloadButton),
    $e = forwardRef(DefaultSearchIcon),
    st = forwardRef(InternalIcon),
    ht = forwardRef(SearchIcon),
    Ue = forwardRef(PadlockIcon);

export const uiIcons = {
    addTabButton: da,
    abCloakButton: Pe,
    backButton: ce,
    forwardButton: ge,
    stopButton: Te,
    reloadButton: Ee,
    defaultSearchIcon: $e,
    internalIcon: st,
    searchIcon: ht,
    padlockIcon: Ue,
};