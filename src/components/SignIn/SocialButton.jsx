import {
  handleTextColor,
  handleButtonColor,
} from "components/Common/ButtonPropsHandler";
import flex from "components/Common/flex";
import styled from "@emotion/styled";

export const SocialButton = ({ link, text, name }) => {
  return (
    <StButtonDiv name={name}>
      <a href={link}>
        <span className="innerText">{text}</span>
      </a>
    </StButtonDiv>
  );
};

const StButtonDiv = styled.div`
  ${flex({ direction: "column" })}
  width: 327px;
  height: 56px;
  border-radius: 10px;
  margin-top: 8px;
  background-color: ${(props) => handleButtonColor(props.name)};
  a {
    color: ${(props) => handleTextColor(props.name)};
  }
  .innerText {
    font-size: 16px;
  }
  &:last-child {
    margin-bottom: 30px;
  }
`;
