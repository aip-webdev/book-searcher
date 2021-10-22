let windowGlobal = typeof window !== 'undefined' && window;
let lStorage = !!windowGlobal ? windowGlobal.localStorage : undefined;

export const getModeFromStorage = () => {
    return !!lStorage?.getItem('offline') ? lStorage?.getItem('offline') !== 'false' : false
}

export const setModeToStorage = (mode: string) => {
    lStorage?.setItem('offline', mode);
}
