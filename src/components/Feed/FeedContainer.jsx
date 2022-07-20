import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useCallback, useState, useEffect } from "react";
import useGetPost from "components/Hooks/useGetPost";
import Search from "./Search";
import { StImgDiv } from "./styles";
import loadable from "@loadable/component";

import styled from "@emotion/styled";
import MyPageFeed from "./MyPageFeed";
const Loading = loadable(() => import("pages/Status/Loading"));

const FeedContainer = () => {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState("");
  const { ref, inView } = useInView();
  const { data, fetchNextPage, status } = useGetPost();

  const onClickHandler = useCallback(
    (postId) => {
      navigate(`/detail/${postId}`);
    },
    [navigate]
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (status === "loading") return <Loading />;

  return (
    <>
      <Search setKeyword={setKeyword} />
      <StScrollWrapper>
        <Grid>
          <MyPageFeed />
          {data?.pages?.map((page) => {
            return page?.data.map((todo, i) => {
              return (
                <StImgDiv
                  className="imgDiv"
                  onClick={() => onClickHandler(todo?.postId)}
                  coverImg={todo?.photoUrl}
                  style={{ marginRight: "4.5px" }}
                  key={i}
                />
              );
            });
          })}
        </Grid>
        <div ref={ref} />
      </StScrollWrapper>
    </>
  );
};

export default FeedContainer;

const StScrollWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 70px);
  overflow-y: scroll;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-left: 30px;
  margin-top: 70px;
`;
