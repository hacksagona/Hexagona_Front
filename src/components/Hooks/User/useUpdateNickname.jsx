import { useMutation, useQueryClient } from "react-query";
import AlertComponent from "components/Common/AlertComponent";
import apis from "shared/api/main";

const addComment = async (payload) => {
  const updateNickname = await apis.updateUserNickname(payload);
  return updateNickname;
};

const useUpdateNickname = () => {
  const queryClient = useQueryClient();

  return useMutation(addComment, {
    onMutate: async (data) => {
      await queryClient.cancelQueries("user");
      queryClient.setQueryData("user", (oldData) => {
        oldData.nickname = data.nickname;
        return oldData;
      });
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries("user");
      AlertComponent({
        icon: "success",
        text: "닉네임이 변경 되었습니다",
      });
    },
    onError: (e) => {
      AlertComponent({
        icon: "error",
        text: "닉네임이 중복 되었습니다",
      });
    },
  });
};

export default useUpdateNickname;
