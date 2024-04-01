import { useEffect, useState } from "react";
import { StyledCottages, StyledHeader, StyledCard, StyledSlider, StyledFlipCards, StyledBlankSpace } from "./Cottages.styled";
import FlipCard from "../components/elements/FlipCards/FlipCard";
import Description from "../components/elements/Description/Description";
import SocialMedia from "../components/elements/SocialMedia/SocialMedia";
import ImageGallery from "react-image-gallery";
import Slider from 'react-slick'
import { useMedia } from "../hooks/useMedia";
const Cottages = () => {
  const { isDesktop } = useMedia()
  const slides = isDesktop ? 4 : 1;
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: slides,
    slidesToScroll: 1,
    swipeToSlide: true,

  };

  const [imgMove, setImgMove] = useState(0);


  const getWindowHeight = () => {
    if (window.scrollY * 0.1 < 300) {
      setImgMove(window.scrollY * 0.1)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', getWindowHeight)

    return () => {
      window.removeEventListener('scroll', getWindowHeight)
    }
  }, [getWindowHeight])

  return (
    <StyledCottages>
      <StyledHeader>
        <div>
          <img src="\images\background\domek-vacanza-dwu-poziomowe-01a.jpg" alt="" />
          <h6 style={{ marginTop: `${imgMove}px` }}>Wyjątkowe</h6>
          <h2 style={{ marginTop: `${imgMove}px` }}><span>7 domków</span> w stylu skandynawskim</h2>
        </div>
        <div style={{ marginTop: `${!isDesktop ? imgMove : imgMove - 50 * 2}px` }}>
          {!isDesktop ?
            < img src="\images\background\domek-vacanza-dwu-poziomowe-mobile-02.jpg" alt="" /> :
            (<div>
              < img src="\images\background\domek-vacanza-dwu-poziomowe-06.jpg" alt="" />
              <div></div>
            </div>)}

        </div>
        <StyledCard>
          <div>
            <h6>nasze domki są</h6>
            <h2>dwupoziomowe z łączną <span>powierzchnią 70 mkw.</span></h2>
          </div>
        </StyledCard>
      </StyledHeader>
      <StyledSlider>
        <Slider {...settings}>
          <div>
            <img src="images/cottages-gallery/vacanza-gallery-001-900x600.jpg" />
          </div>
          <div>
            <img src="images/cottages-gallery/vacanza-gallery-002-900x600.jpg" />
          </div>
          <div>
            <img src="images/cottages-gallery/vacanza-gallery-003-900x600.jpg" />
          </div>
          <div>
            <img src="images/cottages-gallery/vacanza-gallery-004-900x600.jpg" />
          </div>
          <div>
            <img src="images/cottages-gallery/vacanza-gallery-005-900x600.jpg" />
          </div>
          <div>
            <img src="images/cottages-gallery/vacanza-gallery-006-900x600.jpg" />
          </div>
          <div>
            <img src="images/cottages-gallery/vacanza-gallery-007-900x600.jpg" />
          </div>
          <div>
            <img src="images/cottages-gallery/vacanza-gallery-009-900x600.jpg" />
          </div>
          <div>
            <img src="images/cottages-gallery/vacanza-gallery-010-900x600.jpg" />
          </div>
          <div>
            <img src="images/cottages-gallery/vacanza-gallery-011-900x600.jpg" />
          </div>
          <div>
            <img src="images/cottages-gallery/vacanza-gallery-012-1-900x600.jpg" />
          </div>
          <div>
            <img src="images/cottages-gallery/vacanza-gallery-013-900x600.jpg" />
          </div>
          <div>
            <img src="images/cottages-gallery/vacanza-gallery-014-900x600.jpg" />
          </div>
          <div>
            <img src="images/cottages-gallery/vacanza-gallery-015-900x600.jpg" />
          </div>
          <div>
            <img src="images/cottages-gallery/vacanza-gallery-016-900x600.jpg" />
          </div>
          <div>
            <img src="images/cottages-gallery/vacanza-gallery-017-900x600.jpg" />
          </div>
          <div>
            <img src="images/cottages-gallery/vacanza-gallery-018-900x600.jpg" />
          </div>
        </Slider>
      </StyledSlider>

      <StyledFlipCards>
        <FlipCard
          rotateValueX={-180}
          imgsrc="images/cards/card-1.jpg"
          text="Część dzienna salon połączony z aneksem kuchennym i jadalnią oraz wyjście na taras." header="1" />
        <FlipCard
          rotateValueY={-180}
          imgsrc="images/cards/card-2.jpg"
          text="Dwie łazienki, jedna na piętrze- zapewniają nam komfort i swobodę " header="2" />
        <FlipCard
          rotateValueX={180}
          imgsrc="images/cards/card-3.jpg"
          text="Dwie sypialnie na piętrze. Jedna z podwójnym łóżkiem , w drugiej znajdują się dwa pojedyncze łóżka, które można ze sobą połączyć."
          header="3" />
        <FlipCard
          rotateValueY={180}
          imgsrc="images/cards/card-4.jpg"
          text="W salonie znajduje się rozkładana kanapa, która daje nam możliwość dwóch dodatkowych miejsc sypialnianych."
          header="4" />

      </StyledFlipCards>

      <Description />
      <SocialMedia />

      <StyledBlankSpace />
      <div className="background"></div>
    </StyledCottages>


  );
};

export default Cottages;
