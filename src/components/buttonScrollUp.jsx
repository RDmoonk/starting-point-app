import { useState } from "react"
import PropTypes from "prop-types";
import { FaArrowCircleUp } from "react-icons/fa";



export default function ButtonUp (){
   const [visible, setVisible]= useState(false);
   const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 1) {
        setVisible(true);} 
        else if (scrolled <= 1){
            setVisible(false)
        };
   };

   const scrollToTop = () => {
    window.scrollTo({
        top:0,
        behavior: "smooth"
    })

    window.addEventListener("scroll", toggleVisible)
   }

    return(
        <>
        <button className="position:fixed w-full left-auto bottom-auto h-20 ">
        <FaArrowCircleUp
                onClick={scrollToTop}
                style={{ display: visible ? "inline" : "none" }}
            />

        </button>
        
        </>
    )
};

// ButtonUp.PropTypes ={
//     show: PropTypes.
//     // scrollUp: PropTypes.
// }
