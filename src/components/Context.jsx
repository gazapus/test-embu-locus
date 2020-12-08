import { useState, createContext } from 'react';
export const ThemeContext = createContext();

function ContextGenerator({ children }) {
    const [userData, setUserData] = useState({});

    return (
        <ThemeContext.Provider value={{ userData, setUserData }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ContextGenerator;