import { useMutation, useQueryClient } from "react-query";
import apis from "shared/api/main";
import Swal from "sweetalert2";
import { MODAL_TIME } from "shared/data";
import { QueryKeys } from "shared/QueryKeys";

const deleteDetail = async (payload) => {
  const deleteDetailDB = await apis.deletePost(payload);
  return deleteDetailDB;
};

const useDeleteDetail = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteDetail, {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryKeys.detail);
      Swal.fire({
        icon: "success",
        text: "게시글이 삭제 되었습니다",
        showConfirmButton: false,
        timer: MODAL_TIME,
      });
    },
    onError: () => {
      Swal.fire({
        icon: "error",
        text: "삭제 에러",
        showConfirmButton: false,
        timer: MODAL_TIME,
      });
    },
  });
};

export default useDeleteDetail;
