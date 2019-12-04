import axios from "axios";
import { LottoParams, LottoResponse } from "../interfaces/lotto";

export const requestAPI = (id: number) =>
  axios.get("https://www.nlotto.co.kr/common.do", {
    params: {
      method: "getLottoNumber",
      drwNo: id
    } as LottoParams
  });
// .then(result => {
//   console.log(result);
//   // const { data } = result;

//   return result; // as LottoResponse;
// });
