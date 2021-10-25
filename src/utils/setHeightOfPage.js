export const setHeightOfPage = (height) => {
    const windowGlobal = typeof window !== 'undefined' && window;
    let doc = !!windowGlobal ? windowGlobal.document : undefined;
    let html = doc.getRootNode().childNodes[1]
    html.style.height = `${height}px`;
    return html.style.height;
}
