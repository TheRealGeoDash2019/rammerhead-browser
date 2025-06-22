import React from 'react';

export const SessionContext = React.createContext();

export function getSessionContext() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return React.useContext(SessionContext);
}