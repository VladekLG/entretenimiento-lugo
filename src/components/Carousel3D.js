import React,{useEffect} from 'react'
import './Carousel3D.css'

export const Carousel3D = (props) => {

    let deg = 0;
    let nElements;

    window.onresize = ()=>{
        responsiveDisplay();
    }

    useEffect(()=>{

        responsiveDisplay();



    })

    function responsiveDisplay(){
        let z;
        if (window.innerWidth < 600) z = 190;
        else if (window.innerWidth < 820) z = 250;
        else if (window.innerWidth < 1200) z = 400;
        else if (window.innerWidth < 1600) z = 500;
        else if (window.innerWidth > 1600) z = 600;

        const span = document.querySelectorAll('.box span')
        span.forEach((element, i)=>{
            nElements = span.length;
            const valor = (360/ nElements) * (i+1);
            element.style.transform = 'rotateY(' + valor + 'deg ) translateZ(' + z + 'px)';
        })
    }

        function clickButtonLeft (){
            deg-= 360 / nElements;
            const box = document.querySelector('.box');
            box.style.transform = 'perspective(1000px) rotateY(' + deg + 'deg)';
        }
        function clickButtonRight (){
            deg+= 360 / nElements;
            const box = document.querySelector('.box');
            box.style.transform = 'perspective(1000px) rotateY(' + deg + 'deg)';
        }


  return (
    <div className='carousel'>
        <div className='box'>
            {props.children}
        </div>
        <div onClick={clickButtonLeft} className='left'></div>
        <div onClick={clickButtonRight} className='right'></div>
    </div>
  )
}
