import React, {useEffect, useState} from "react";
import {useAppStore} from "./useAppStore";
import {setPageNumber} from "../context/actions";

export default function useScrollEventToLoadData(ref: React.RefObject<HTMLElement>) {
    const windowGlobal = typeof window !== 'undefined' && window;
    let doc = !!windowGlobal ? windowGlobal.document : undefined;
    const htmlEl = doc?.getRootNode().childNodes[1];
    const [{ offlineMode, pageNumber, booksData}, dispatch] = useAppStore();
    const [heightWithoutList, setHeightWithoutList] = useState(322)

    useEffect(()=> {
        let listHeight = ref?.current?.clientHeight ;
        if (booksData.count > 10 && pageNumber === 1) {
            // @ts-ignore
            setHeightWithoutList(htmlEl.offsetHeight - listHeight/pageNumber);
            setTimeout(() => {
                // @ts-ignore
                !!listHeight && !offlineMode ? htmlEl.style.height = `${htmlEl.offsetHeight - listHeight/pageNumber + (listHeight/10/pageNumber)*booksData.count}px`:
                    // @ts-ignore
                    htmlEl.style.height = `${5000}px`
            }, 0);
        }

        async function handleScroll() {
            if (!!listHeight) {
                // @ts-ignore
                if((heightWithoutList + listHeight - htmlEl.clientHeight - window.scrollY) <= 0) {
                    if (booksData.hasMore && !booksData.loading) {
                        dispatch(setPageNumber(pageNumber + 1));
                    }
                }
            }
        }


        document.addEventListener('scroll', handleScroll);

        return() => {
            document.removeEventListener('scroll', handleScroll);
        }

    })

    return [pageNumber]
}
