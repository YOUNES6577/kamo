import styled from "styled-components";
import '../../asset/sass/Spinner.sass'
import React,{ useState } from "react";

const Hourglass = styled('div')`
position: absolute ;
top: calc( 50% - 100px );
left: 48%;
transform: rotate(360deg);
animation: hourglass 1.5s 1s infinite;
.st0 {
    fill:none;
    stroke: #262626;
    stroke-width:3;
    stroke-miterlimit:10;
}
.st1, .st2 {
    fill: #FF3D00;
    transform-origin: 50% 50%;
    animation: hourglass1 1.5s infinite;
}
.st2 {
    transform: scale(0);
    animation: hourglass2 1.5s infinite;
}
svg {
    width: auto;
    height: 100px;
    margin: 0 auto;
    }
`
const CenterDiv=styled('div')`
position: absolute ;
top: calc( 50% - ${props => props.width} );
left: calc( 50% - ${props => props.height} );
`
const CircleLoader=styled('span')`
width: ${props => props.width};
height: ${props => props.height};
border-radius: 50%;
display: inline-block;
border-top: 4px solid #262626;
border-right: 4px solid transparent;
box-sizing: border-box;
animation: rotation 1s linear infinite;
&::after {
content: '';  
box-sizing: border-box;
position: absolute;
left: 0;
top: 0;
width: ${props => props.width};
height: ${props => props.height};
border-radius: 50%;
border-left: 4px solid #FF3D00;
border-bottom: 4px solid transparent;
animation: rotation 0.5s linear infinite reverse;
}
`
export  function HourglassSpinner  () {
    return (
        <Hourglass>
            <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 43.8 72.7" style={{ enableBackground: 'new 0 0 43.8 72.7' }} xmlSpace="preserve">
                <path className="st0" d="M21.9,36.4c0,0-19.4-3-19.4-22.4V2.5h38.8V14C41.3,33.4,21.9,36.4,21.9,36.4z" />
                <path className="st1" d="M21.9,30.6C18.6,29.8,8.2,26.4,8.2,14V8.2h27.5V14C35.6,26.4,25.1,29.8,21.9,30.6z" />
                <path className="st0" d="M21.9,36.4c0,0-19.4,3-19.4,22.4v11.5h38.8V58.7C41.3,39.4,21.9,36.4,21.9,36.4z" />
                <path className="st2" d="M8.2,64.5v-5.8c0-12.5,10.6-15.9,13.7-16.6c3.3,0.8,13.7,4.2,13.7,16.6v5.8H8.2z" />
            </svg>
        </Hourglass>
    )
}
function CircleSpinner(){
    const [size,]=useState({width:'85px',height:'85px'})

return <CenterDiv   width={size.width} height={size.height}>
    <CircleLoader  width={size.width} height={size.height}/>
</CenterDiv>
}


export default  React.memo(CircleSpinner)