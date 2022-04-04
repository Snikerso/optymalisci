import styled from "styled-components"

export const Head = styled.h1`
    font-size: ${({fontSize = "20"}) => fontSize}px;
    color: ${({color = "white"}) => color}
`


export default Head