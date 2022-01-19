import styled from "styled-components";

export const DragIconWrapper = styled.div`
  display: block;
`;

export const ListContainer = styled.div`
  font-family: "Roboto", sans-serif;
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 0.2rem;
  box-shadow: 0.1rem 0.1rem 0.4rem #aaaaaa;
`;
export const ListItem = styled.div`
  color: white;
  font-size:1rem;
  padding: 1.2rem 1rem;
  border-bottom: 1px solid #dddddd;
   &:last-child {
    border-bottom: none;
  }
  span {
    display: inline-block;
    vertical-align: middle;
  }
  background: #217c9d;
`;