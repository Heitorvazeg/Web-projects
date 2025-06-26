import { useContext, useState, useEffect } from "react";
import { AppContext, VisibilityContext } from "../context/context";
import "./popup.css";

function Popup() {
  const { isVisible, setIsVisible } = useContext(VisibilityContext);
  const { app } = useContext(AppContext);
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    if (isVisible) {
      requestAnimationFrame(() => {
        setShowAnimation(true);
      });
    } else {
      setShowAnimation(false);
    }
  }, [isVisible]);

  if (!isVisible) return null;

  if (app === "W") return (
    <div className="backBlack" onClick={() => setIsVisible(!isVisible)}>
        <div className={`popup ${showAnimation ? "fadeInUp" : ""}`} onClick={(e) => e.stopPropagation()}>
            <button className="close" id="close" onClick={() => setIsVisible(!isVisible)}><i class="fa-solid fa-xmark"></i></button>
            <div className="imageNum">
                <i class="fa-brands fa-whatsapp icon"></i>
                <h3 className="cont">Contato:</h3>
                <p>(62) 99563-5794</p>
                <a href="https://wa.me/5562995635794" className="contatar">Contatar</a>
            </div>
        </div>
    </div>
  )
  else {
    return (
        <div className="backBlack" onClick={() => setIsVisible(!isVisible)}>
            <div className={`popup ${showAnimation ? "fadeInUp" : ""}`} onClick={(e) => e.stopPropagation()}>                <button className="close" id="close" onClick={() => setIsVisible(!isVisible)}><i class="fa-solid fa-xmark"></i></button>
                <div className="imageNum">
                    <i class="fa-solid fa-envelope icon"></i>
                    <h3 className="cont">Contato:</h3>
                    <p>kaiosousa@gmail.com</p>
                    <a href="mailto:heitorvazeg@gmail.com" className="contatar">Contatar</a>
                </div>
            </div>
        </div>
    )
  }
}

export default Popup;