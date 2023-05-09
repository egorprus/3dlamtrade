import { DEFAULT_URLS } from "./constant";

export const getCurrentFormIndex = () => {
    const currentPath = window.location.pathname;
    return DEFAULT_URLS.indexOf(currentPath);
};