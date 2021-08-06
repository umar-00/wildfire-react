import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Spinner = styled.div`
  border: 5px solid #b8b8b8;
  border-top: 5px solid black;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  /* margin: 0 auto; */
  background: white;

  /* position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto; */

  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
