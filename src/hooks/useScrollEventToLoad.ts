import React, {useEffect} from "react";
import {useAppStore} from "./useAppStore";
import {setPageNumber} from "../context/actions";
import {setHeightOfPage} from "../utils/setHeightOfPage";
import {getWindowGlobal} from "../utils/getWindowGlobal";

export default function useScrollEventToLoad(ref: React.RefObject<HTMLElement>) {
    const windowGlobal = getWindowGlobal();
    const [{ pageNumber, booksData }, dispatch] = useAppStore();

    useEffect(() => {
       if (ref.current?.parentElement && windowGlobal && !booksData.loading && booksData.hasMore) {
           if (booksData.count === 0) {
               setPageNumber(1);
               setHeightOfPage(windowGlobal.document.body.clientHeight);
               return windowGlobal.scroll(0, 0);
           }
           if (pageNumber === 1 && booksData.count > 10){
               setHeightOfPage(ref.current.parentElement.offsetHeight/10/pageNumber*booksData.count + 240);
           }
           const observer = new IntersectionObserver((entries) => {
               if (entries[0].isIntersecting) {
                   dispatch(setPageNumber(pageNumber + 1));
               }
           }, {rootMargin: '50px'});
           if (ref.current ) {
               observer.observe(ref.current);
           }
           return () => {
               if (ref.current) {
                   observer.unobserve(ref.current);
               }
           }
       }
    })

    return [ref.current, pageNumber]
}
