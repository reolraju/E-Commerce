import {css} from 'styled-components'

const responsive = (props) => {
  return css`
  @media only screen and (max-width:380px){
    ${props}
  }
  `;
}

export default responsive


