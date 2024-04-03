
import { useImgMove } from "../../../hooks/useImgMove";
const HeaderBackground = ({ text1, text2, span, img }) => {

   const imgMove = useImgMove();

   return (
      <div>
         <img src={img} alt="" />
         <h6 style={{ marginTop: `${imgMove}px` }}>{text1}</h6>
         <h2 style={{ marginTop: `${imgMove}px` }}><span>{span}</span> {text2}</h2>
      </div>
   );
}

export default HeaderBackground;