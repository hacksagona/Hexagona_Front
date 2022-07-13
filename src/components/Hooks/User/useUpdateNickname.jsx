import { useMutation, useQueryClient } from "react-query";
import apis from "shared/api/main";
import Swal from "sweetalert2";
import { MODAL_TIME } from "shared/data";
import { QueryKeys } from "shared/QueryKeys";

const addComment = async (payload) => {
  const updateNickname = await apis.updateUserNickname(payload);
  return updateNickname;
};

const useUpdateNickname = () => {
  const queryClient = useQueryClient();

  return useMutation(addComment, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(QueryKeys.user);
      Swal.fire({
        icon: "success",
        text: "닉네임이 변경 되었습니다",
        showConfirmButton: false,
        timer: MODAL_TIME,
      });
    },
    onError: (e) => {
      Swal.fire({
        icon: "error",
        text: "닉네임이 중복 되었습니다",
        showConfirmButton: false,
        timer: MODAL_TIME,
      });
    },
  });
};

export default useUpdateNickname;
