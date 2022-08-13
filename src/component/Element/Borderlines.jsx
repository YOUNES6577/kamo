import styled from 'styled-components';

export const Borderlines = styled.div`
*{
    border: 1px dashed  ${props=>props.ShowUp? "#d91175" : "transparente"}
}
`