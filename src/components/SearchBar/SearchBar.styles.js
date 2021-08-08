import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 40px;
  background: var(--darkGrey);
`;

export const Content = styled.div`
  display: flex;
  background: var(--medGrey);
  width: 100%;
  max-width: var(--maxWidth);
  height: 55px;
  margin: 20px 0;
  border-radius: 100px;
  padding: 5px 10px;

  img {
    width: 30px;
    margin: 0 10px;
  }

  input {
    background: none;
    color: white;
    border: none;
    width: 100%;
    font-size: 1.25rem;
  }

  input:focus {
    outline: none;
  }
`;
