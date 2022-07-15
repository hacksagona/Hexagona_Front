import { dropBoxAnimation, FlexRowDiv } from "./GlobalStyles";
import { SIGN_UP_MAX_LENGTH } from "shared/data";
import { useState, useCallback } from "react";
import useNicknameHandle from "components/Hooks/User/useNicknameHandle";
import useImageHandler from "components/Hooks/useImageHandler";
import useCommentDHandle from "components/Hooks/Comment/useCommentDHandle";
import useDetailDHandle from "components/Hooks/Detail/useDetailDHandle";
import InputModal from "components/Common/InputModal";
import ImageModal from "./ImageModal";
import styled from "@emotion/styled";
import flex from "./flex";
import { BiDotsVerticalRounded } from "react-icons/bi";

const DropDownMenu = ({
  text,
  text2,
  margin,
  click,
  click2,
  postId,
  commentId,
  color,
}) => {
  const [flag, setFlag] = useState(false);
  const { setNicknameFlag, nicknameFlag, setNickname, bogusCheck } =
    useNicknameHandle();
  const { setProfileFlag, profileFlag, setProfile, onSendProfile } =
    useImageHandler();
  const { onDelete } = useCommentDHandle({
    postId: postId,
    commentId: commentId,
  });
  const { onDeleteDetail } = useDetailDHandle({ postId: postId });

  const onClickHandler = useCallback(() => {
    setFlag((value) => !value);
  }, []);

  const SecondClickTypeHandler = useCallback(() => {
    switch (click2) {
      case "nickname":
        return setNicknameFlag((value) => !value);

      default:
        return;
    }
  }, [click2, setNicknameFlag]);

  const FirstClickTypeHandler = useCallback(() => {
    switch (click) {
      case "image":
        return setProfileFlag((value) => !value);
      case "commentD":
        return onDelete();
      case "detailD":
        return onDeleteDetail();
      default:
        return;
    }
  }, [click, onDelete, onDeleteDetail, setProfileFlag]);

  const onCancelBtnHandler = useCallback((setter) => {
    setter((value) => !value);
  }, []);

  return (
    <FlexRowDiv>
      {profileFlag ? (
        <ImageModal
          set={setProfile}
          confirm={onSendProfile}
          cancel={() => onCancelBtnHandler(setProfileFlag)}
          title="사진 변경하기"
          cancelTitle="취소"
          confirmTitle="등록하기"
        />
      ) : (
        <></>
      )}
      {nicknameFlag ? (
        <InputModal
          set={setNickname}
          confirm={bogusCheck}
          cancel={() => onCancelBtnHandler(setNicknameFlag)}
          title="닉네임 변경하기"
          cancelTitle="취소"
          confirmTitle="변경하기"
          placeholder="닉네임을 써주세요"
          count={SIGN_UP_MAX_LENGTH}
        />
      ) : (
        <></>
      )}

      <StImgDiv onClick={onClickHandler}>
        <StDotDiv color={color}>
          <BiDotsVerticalRounded />
        </StDotDiv>
        {flag ? (
          <DropRow margin={margin}>
            <span onClick={() => FirstClickTypeHandler()}>{text}</span>
            {text2 !== undefined ? (
              <>
                <div />
                <span onClick={() => SecondClickTypeHandler()}>{text2}</span>
              </>
            ) : (
              <></>
            )}
          </DropRow>
        ) : (
          <></>
        )}
      </StImgDiv>
    </FlexRowDiv>
  );
};

export default DropDownMenu;

const StImgDiv = styled.div`
  position: relative;
  width: 2.5px;
  height: 12px;
  margin-right: 10.25px;
`;
const StDotDiv = styled.div`
  color: ${(props) => props.color};
`;

const DropRow = styled.div`
  ${flex({ direction: "column" })}
  position: absolute;
  left: -120px;
  top: -10px;
  width: 111px;
  background: #fff;
  box-shadow: 0px 2px 14px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  padding: 4px 0px;
  animation: ${dropBoxAnimation} 0.3s;
  div {
    width: 99px;
    border: 1px solid #f4f4f4;
  }
  span {
    ${flex({ direction: "column" })}
    width: 89px;
    height: 31px;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #5b5b5b;
  }
`;
