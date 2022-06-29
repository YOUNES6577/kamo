
import styled from 'styled-components';


const Shap = styled.div`
position:absolute;
bottom:${props => props.bt};
top:${props => props.top};
left:0;
width:100%;
overflow:hidden;
line-height:0;
transform:${props => props.transform};`

const ShapSvg = styled.svg`
position:relative;
display:block;
width:${props => props.width};
height:${props => props.height}`

const ShapPath = styled.path`
fill:${props => props.fill}`

function ShapDivider(props) {
    return (
        <Shap bt={props.bt} top={props.top} transform={props.direction === 'bottom' ? 'rotate(180deg)' : 'rotate(0deg)'}>
            <ShapSvg width={props.width} height={props.height} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                {props.children}
            </ShapSvg>
        </Shap>
    );
}


export  {ShapDivider,ShapPath}  