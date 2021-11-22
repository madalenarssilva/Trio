import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import Footer from '../../components/Footer/Footer'
import "./About.css"

const About = () => {
    
    const [scrollPosition, setScrollPosition] = useState(0);
    
    const handleScroll = () => {
        // Calculo da percentagem através de scroll
        const p = document.body.parentNode
        const position = 100 - (document.body.scrollTop || p.scrollTop) / (( p.scrollHeight - p.clientHeight) )* 100

        setScrollPosition(Math.round(position));
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {window.removeEventListener("scroll", handleScroll);};
    });


    const navigate = useNavigate();

    const PhotoHandler = (nome) => {
        navigate("/about/" + nome);
    }


    return (
        <div className="parent">
            <div className="about-columns">
                <div className="photos">
                    <img className="mada" src="/Madalena.png" onMouseOver={(e) => e.target.classList.add('foto_blur')} onMouseLeave={(e) => e.target.classList.remove('foto_blur')}  onClick={ () => PhotoHandler("madalena") } />
                    <img className="bia" src="/Bia.png" onMouseOver={(e) => e.target.classList.add('foto_blur')} onMouseLeave={(e) => e.target.classList.remove('foto_blur')} onClick={ () => PhotoHandler("beatriz") }/>
                    <img className="ines" src="/Ines.png" onMouseOver={(e) => e.target.classList.add('foto_blur')} onMouseLeave={(e) => e.target.classList.remove('foto_blur')} onClick={ () => PhotoHandler("ines") }/>
                </div>
                
                <div className="coffee">
                    <div className="cup">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="2.38889in" height="3.68889in" viewBox="0 0 215 332" xmlSpace="preserve">
                            <mask id="grayscale-mask">
                                <g id="m1">
                                    <path d="m -509.9,160.405 0,67.59962 c 70.8,0 106.9,14.70038 141.7,29.00038 34.9,14.3 71,29 142.10001,29 71,0 107.2,-14.8 142.100004,-29 34.8,-14.2 70.9,-29 141.700016,-29 70.8,0 106.9,14.7 141.7,29 34.9,14.3 71,29 142.1,29 71.09999,0 107.19999,-14.8 142.09999,-29 34.8,-14.2 70.9,-29 141.7,-29 70.8,0 106.9,14.7 141.7,29 34.9,14.3 71,29 142.1,29 l 0,-632.20001 -1419.00002,0 z"/>
                                </g>
                            </mask>
                            <mask id="coffee-mask">
                                <g id="m2">
                                    <path d="m 909.1,353.4 0,-67.6 c -70.8,0 -106.9,-14.7 -141.7,-29 -34.9,-14.3 -71,-29 -142.1,-29 -71,0 -107.2,14.8 -142.1,29 -34.8,14.2 -70.9,29 -141.7,29 -70.8,0 -106.9,-14.7 -141.7,-29 -34.9,-14.3 -71,-29 -142.1,-29 -71.1,0 -107.2,14.8 -142.1,29 -34.8,14.2 -70.9,29 -141.7,29 -70.8,0 -106.9,-14.7 -141.7,-29 -34.9,-14.3 -71,-29 -142.1,-29 l 0,632.2 1419,0 z"/>
                                </g>
                            </mask>
                            <g id="grayscale">
                                <g className="copo" mask="url(#grayscale-mask)">
                                    <path stroke="white" strokeWidth="1" d="M 213.37,41.53
                                            C 213.37,14.83 171.60,3.39 113.25,1.48
                                            54.89,-0.43 1.21,9.11 1.21,41.53M 213.37,41.53
                                            C 213.37,65.84 179.61,88.54 113.25,87.77
                                            46.88,87.01 3.12,73.95 1.21,41.53M 213.37,41.53
                                            C 213.37,41.53 187.15,301.36 187.15,301.36
                                            176.66,311.85 147.19,332.44 113.25,330.92
                                            79.30,329.39 44.12,310.58 30.77,301.36
                                            30.77,301.36 1.21,41.53 1.21,41.53" />
                                    <path  stroke="white" strokeWidth="1"  d="M 44.59,291.82
                                            C 44.59,291.82 24.09,94.45 24.09,94.45
                                            32.83,100.96 63.57,113.99 116.59,113.99
                                            169.60,113.99 190.16,100.96 193.82,94.45
                                            193.82,94.45 171.41,296.12 171.41,296.12
                                            163.47,300.88 139.47,310.51 107.05,310.90
                                            74.63,311.28 51.91,298.34 44.59,291.82 Z" />
                                </g>
                            </g>
                            <g id="coffee" >
                                    <path fill="none" stroke="white" strokeWidth="1" d="M 213.37,41.53
                                            C 213.37,14.83 171.60,3.39 113.25,1.48
                                            54.89,-0.43 1.21,9.11 1.21,41.53M 213.37,41.53
                                            C 213.37,65.84 179.61,88.54 113.25,87.77
                                            46.88,87.01 3.12,73.95 1.21,41.53M 213.37,41.53
                                            C 213.37,41.53 187.15,301.36 187.15,301.36
                                            176.66,311.85 147.19,332.44 113.25,330.92
                                            79.30,329.39 44.12,310.58 30.77,301.36
                                            30.77,301.36 1.21,41.53 1.21,41.53" />
                                    <g className="copo" mask="url(#coffee-mask)">
                                    <path  stroke="white" strokeWidth="1"  
                                            d="M 44.59,291.82
                                            C 44.59,291.82 24.09,94.45 24.09,94.45
                                            32.83,100.96 63.57,113.99 116.59,113.99
                                            169.60,113.99 190.16,100.96 193.82,94.45
                                            193.82,94.45 171.41,296.12 171.41,296.12
                                            163.47,300.88 139.47,310.51 107.05,310.90
                                            74.63,311.28 51.91,298.34 44.59,291.82 Z" />
                                    </g>
                            </g>
                        </svg>
                        
                    </div>
                    <div className="frases">
                        <p> {scrollPosition}% </p>
                        <p> Coffee </p>
                        <p> Addicted </p>
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default About