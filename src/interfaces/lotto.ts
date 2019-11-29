export interface LottoParams {
  method: string;
  drwNo: number;
}

export interface LottoResponse {
  returnValue: string;
  totSellamnt: number;
  drwNo: number;
  drwNoDate: string;
  firstWinamnt: number;
  firstPrzwnerCo: number;
  firstAccumamnt: number;
  drwtNo1: number;
  drwtNo2: number;
  drwtNo3: number;
  drwtNo4: number;
  drwtNo5: number;
  drwtNo6: number;
  bnusNo: number;
}
