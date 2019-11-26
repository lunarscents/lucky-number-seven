import axios from "axios";
import { LottoParams, LottoResponse } from "./schemas";

export const api = (id: number) =>
  axios
    .get("https://www.nlotto.co.kr/common.do", {
      params: {
        method: "getLottoNumber",
        drwNo: id
      } as LottoParams
    })
    .then(result => {
      console.log(result);
      const { data } = result;

      return data as LottoResponse;
    });
