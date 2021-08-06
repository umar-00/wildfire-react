import { Wrapper, Spinner } from "./Loader.styles";

const Loader = () => {
  return (
    <Wrapper>
      <Spinner></Spinner>
      <h1>Fetching Data</h1>
    </Wrapper>
  );
};

export default Loader;
