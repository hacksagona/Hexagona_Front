import { Routes, Route } from "react-router-dom";
import loadable from "@loadable/component";
import Splash from "pages/Status/Splash";
import { NeedLogin, NoNeedLogin } from "./Auth";

const Kakao = loadable(() => import("pages/SocialLogIn/Kakao"));
const Google = loadable(() => import("pages/SocialLogIn/Google"));
const Naver = loadable(() => import("pages/SocialLogIn/Naver"));
const SignUp = loadable(() => import("pages/SignUp"));
const LogIn = loadable(() => import("pages/LogIn"));
const Home = loadable(() => import("pages/Home"));
const Error = loadable(() => import("pages/Status/Error"));
const Feed = loadable(() => import("pages/Feed"));
const GoalShot = loadable(() => import("pages/GoalShot"));
const FeedDetail = loadable(() => import("pages/FeedDetail"));
const MyFeed = loadable(() => import("pages/MyFeed"));
const Chat = loadable(() => import("pages/Chat"));
const ChatRoom = loadable(() => import("pages/ChatRoom"));
const Loading = loadable(() => import("pages/Status/Loading"));

const Routing = () => {
  return (
    <Routes>
      <Route element={<NoNeedLogin />}>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/oauth/kakao/callback" element={<Kakao />} />
        <Route path="/oauth/google/callback" element={<Google />} />
        <Route path="/oauth/naver/callback" element={<Naver />} />
      </Route>
      <Route element={<NeedLogin />}>
        <Route path="/home/*" element={<Home />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/goalshot" element={<GoalShot />} />
        <Route path="/feed/:postId" element={<FeedDetail />} />
        <Route path="/feed/MyFeed" element={<MyFeed />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/chat/:chatRoomId" element={<ChatRoom />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default Routing;
