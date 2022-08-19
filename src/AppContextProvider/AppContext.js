import { createContext } from "react";

const ActionContext = createContext(null);
const UserContext = createContext(null);
const LogContext = createContext(null);
const ThemeContext = createContext(null);

export const AppContext = {
    Actions: ActionContext,
    User: UserContext,
    Logs: LogContext,
    Themes: ThemeContext,
}