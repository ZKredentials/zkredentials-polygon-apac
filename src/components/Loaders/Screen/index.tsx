import Spinner from "../Spinner";
import { LoadingScreenContainer } from "./style";

const LoadingScreen = () => {
  return (
    <LoadingScreenContainer>
      <Spinner />
    </LoadingScreenContainer>
  );
};

export default LoadingScreen;
