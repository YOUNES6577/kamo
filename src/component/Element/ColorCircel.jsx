import React from 'react'
import styled, { css } from "styled-components"

const ColorStyle = styled.div`
    margin-top: 3px;
    width: 15px;
    height: 15px;
    margin-right: 5px;
    float: left;
span{
    background: ${props => props.bgc};
    width: 17px;
    height: 17px;
    display: block;
    border-radius: 50%;
    transition: .2s all ease;
    &:hover{
        width: 20px;
        height: 20px;
        margin: -1px 0 0 -1px;
    }
    ${props => props.white && css`
            border: 1px solid #e8e9eb;
        `}
}
`
const Color = (props) => <ColorStyle
    bgc={props.bgc}
    white={props.white}>
    <span></span>
</ColorStyle>

export default React.memo(Color)