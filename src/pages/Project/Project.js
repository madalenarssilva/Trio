import React from 'react'
import Footer from '../../components/Footer/Footer'
import CarouselTech from '../../components/ProjectCarousel'
import "./Project.css"

export const ProjectInfo = ({projeto}) => {

    return (
        <div className="projectPage">
            <div className="projectArea">
                <div className="projectHeader">
                    <h1 className="title">Project Name</h1>
                    <h2 className="date">January 2022</h2>
                    <img className="author" src="/Madalena.png"/>
                </div >
                <div className="projectTools">
                    <img className="tool" src="/illustrator.png"/>
                    <img className="tool" src="/indesign.png"/>
                </div> 
                <div className="projectContent">
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam faucibus libero, et congue urna vulputate vel. Suspendisse non turpis magna. Praesent at erat a eros iaculis semper ut id lorem. Ut eu eleifend lorem. Praesent id neque ac nunc pellentesque pellentesque. Ut dictum nulla blandit mauris tincidunt pharetra. Proin quis lorem dui. Donec tincidunt sed mi ut finibus. Nam vitae pharetra nunc. Curabitur risus metus, maximus non scelerisque vitae, cursus vel purus. Vestibulum accumsan suscipit fringilla. Vestibulum laoreet metus eget pulvinar sodales. Phasellus sollicitudin magna quis lobortis rutrum. Fusce porta dignissim metus, nec feugiat justo aliquam vitae. Nullam dapibus laoreet sapien, eget molestie libero sollicitudin et. Nullam nec ante sollicitudin, pulvinar urna consectetur, mattis nibh.</p>
                    <CarouselTech/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
