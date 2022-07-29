import styled from 'styled-components';

export const Borderlines = styled.div`
*{
    border: 1px dashed  ${props=>props.ShowUp? "#e16543" : "transparente"}
}
`