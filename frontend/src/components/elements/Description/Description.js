import { StyledDescription } from "./Description.styled";

const Description = () => {
   return (
      <StyledDescription>
         <div className="description">
            <h3>Domki <span>przeznaczone są</span> dla 4 – 6 osób.</h3>
            <p>
               Każdy domek wyposażony jest w lodówkę, płytę indukcyjną, czajnik elektryczny, toster, ekspres do kawy, blender, pralkę oraz zastawę stołową i kuchenną. W łazience ręczniki, a w sypialniach czeka na Was świeża pościel.


            </p>
            <p>Z myślą o najmłodszych udostępniamy łóżeczka turystyczne oraz wanienkę.</p>
         </div>

         <div className='parking-info'>
            <h4><span>Miejsca parkingowe</span> na terenie Parku</h4>
            <img src="/icons/parking-icon-100x100.png" alt="" />
         </div>

      </StyledDescription>
   );
}

export default Description;