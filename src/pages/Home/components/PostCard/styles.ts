import styled from "styled-components"

export const PostCardContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 41rem;
  background-color: ${(props) => props.theme["base-post"]};
  padding: 3rem;
  border-radius: 1rem;
  transition: 500ms cubic-bezier(0.075, 0.82, 0.165, 1);

  justify-content: space-between;

  &:hover {
    background-color: ${(props) => props.theme["base-post"]};
    cursor: pointer;
    box-shadow: 0 4px 50px rgba(0, 0, 0, 0.3);
  }
`

export const Title = styled.div`
  display: flex;
  margin-bottom: 2rem;
  line-height: 3.2rem;
  justify-content: space-between;

  h3 {
    max-width: 27rem;
    font-size: 2rem;
    color: ${(props) => props.theme["base-title"]};
  }

  span {
    color: ${(props) => props.theme["base-span"]};
    font-size: 0.8rem;
    width: 7.5rem;
    text-align: right;
  }
`

export const Description = styled.div`
  display: flex;

  max-height: 13.5rem;
  line-height: 2.7rem;

  overflow: auto;
  overflow-y: hidden;
`
