import { FC } from "react";
import { LoaderContainer } from "./style";
import theme from "@/styles/theme";

interface IProps {
  color?: string;
}

const Spinner: FC<IProps> = ({ color = theme.colors.title }) => {
  return (
    <LoaderContainer color={color}>
      <div />
      <div />
      <div />
    </LoaderContainer>
  );
};

export default Spinner;
