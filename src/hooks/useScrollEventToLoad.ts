import React, {useEffect, useState} from "react";
import {useAppStore} from "./useAppStore";
import {setPageNumber} from "../context/actions";
import {setHeightOfPage} from "../utils/setHeightOfPage";
import {getWindowGlobal} from "../utils/getWindowGlobal";

export default function useScrollEventToLoad(ref: React.RefObject<HTMLElement>) {
    const windowGlobal = getWindowGlobal();
    let handlerPermission = true;
    const [{ pageNumber, booksData}, dispatch] = useAppStore();
    const heightWithoutList = 220;
    const [listHeight, setListHeight] = useState(0)

    useEffect(()=> {
       if (windowGlobal) {
           if (!ref?.current?.clientHeight && listHeight === 0) {
               return setHeightOfPage(windowGlobal.innerHeight);
           } else if (!!ref.current) {
               setListHeight(ref.current.clientHeight)
           }
           if (booksData.count === 0) {
               setPageNumber(1)
               setHeightOfPage(windowGlobal.innerHeight);
               return windowGlobal.scroll(0, 0);
           }
           if (booksData.count > 10 && pageNumber === 1 && !booksData.loading) {
               setHeightOfPage(heightWithoutList + (listHeight / 10 / pageNumber) * booksData.count)
           }

           const handleScroll = () => {
               if (handlerPermission && (listHeight && listHeight !== 0) && !booksData.loading && booksData.hasMore) {
                   if((heightWithoutList + listHeight - windowGlobal.innerHeight - windowGlobal.scrollY) <= 0) {
                       handlerPermission = false;
                       dispatch(setPageNumber(pageNumber + 1));
                       setTimeout(() => {handlerPermission = true}, 500)
                   }
               }
           };
           document.addEventListener('scroll', handleScroll);

           return () => {
               document.removeEventListener('scroll', handleScroll);
           }
       }
    })
    return [pageNumber]
}
