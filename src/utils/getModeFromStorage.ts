export const getModeFromStorage = () => {
    const windowGlobal = typeof window !== 'undefined' && window;
    let lStorage = !!windowGlobal ? windowGlobal.localStorage : undefined;
    return !!lStorage?.getItem('offline') ? lStorage?.getItem('offline') !== 'false' : false
}
