import { StWrap } from "components/Common/GlobalStyles";
import { useParams } from "react-router-dom";
import NavigatorBar from "components/Common/NavigatorBar";
import useGetPostDetail from "components/Hooks/useGetPostDetail";
import CommentInput from "components/CommentComponents/CommentInput";
import CommentImg from "components/CommentComponents/CommentImg";
import CommentLists from "components/CommentComponents/CommentLists";
import loadable from "@loadable/component";
import flex from "components/Common/flex";
import styled from "@emotion/styled";

const Loading = loadable(() => import("pages/Status/Loading"));

const FeedDetail = () => {
  const { postId } = useParams();
  const { data, isFetching } = useGetPostDetail({
    postId: postId,
  });
  return (
    <StWrapFlex>
      {isFetching ? (
        <Loading />
      ) : (
        <>
          <CommentImg
            category={data?.category}
            postContent={data?.postContent}
            img={data?.photoUrl}
            profile={data?.profile_img}
            name={data?.nickname}
          />
          <CommentLists postId={postId} />
          <CommentInput postId={data?.postId} />
        </>
      )}

      <NavigatorBar />
    </StWrapFlex>
  );
};

export default FeedDetail;

const StWrapFlex = styled(StWrap)`
  ${flex({ direction: "column", justify: "flex-start" })}
  position: relative;
`;
