import styled from "styled-components"
import backgroundImg from "../../assets/img/Cover.png"

export const HeaderContainer = styled.header`
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;
  padding: 6.4rem 0 13.4rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 86.4rem;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  .logo:hover {
    transition: 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
    filter: blur(1px);
  }
`
