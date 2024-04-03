import { useState, useEffect } from "react";

export const useImgMove = () => {


   const [imgMove, setImgMove] = useState(0);


   const getWindowHeight = () => {
      if (window.scrollY * 0.1 < 100) {
         setImgMove(window.scrollY * 0.1)
      }
   }
   useEffect(() => {
      window.addEventListener('scroll', getWindowHeight)

      return () => {
         window.removeEventListener('scroll', getWindowHeight)
      }
   }, [imgMove])

   return imgMove;
};