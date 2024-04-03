/**
 * Prop for setting the theme of the page
 */
export type ThemeProps = {
    themeName: string;
    setThemeName?: (theme: string) => void;
}

export function setTheme({themeName, setThemeName}: ThemeProps) {
    localStorage.setItem("theme", themeName);
    document.documentElement.setAttribute("data-theme", themeName);
    
    if (setThemeName) {
        setThemeName(themeName);
    }
}

export function keepTheme() {
    const themeName = localStorage.getItem("theme");

    if (themeName) {
        setTheme({themeName});
        return themeName;
    }

    const prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme({themeName: prefersDarkTheme.matches ? "theme-dark" : "theme-light"});

    return prefersDarkTheme;
}
