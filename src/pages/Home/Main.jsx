import CategoryLink from "components/MainPage/CategoryLink";
import InfoButton from "components/Tutorial/InfoButton";
import flex from "components/Common/flex";
import styled from "@emotion/styled";
import { useState } from "react";
import MainTutorial from "components/Tutorial/MainTutorial";
import { useEffect } from "react";

const Main = () => {
  const [flag, setFlag] = useState(false);

  // 튜토리얼 - 새 유저에게만 한번 보여주는 로직
  const onTutorialMain = () => {
    setFlag((value) => !value);
  };
  useEffect(() => {
    if (flag) {
      localStorage.setItem("tutorial", false);
    }
  }, [flag]);

  return (
    <div style={{ width: "100%" }}>
      <StFlexRowDiv className="main">
        <CategoryLink url="/home/exercise " picName="one" text="운동하기" />
        <CategoryLink url="/home/study" picName="two" text="학습" />
        <CategoryLink url="/home/life" picName="three" text="생활습관" />
        <CategoryLink url="/home/hobby" picName="four" text="취미생활" />
        <InfoButton click={onTutorialMain} />
        {flag ? <MainTutorial set={setFlag} /> : ""}
      </StFlexRowDiv>
    </div>
  );
};

export default Main;

const StFlexRowDiv = styled.div`
  ${flex({ direction: "column" })}
  position: relative;
  flex-wrap: wrap;
  margin-top: 28px;
`;
