import { createSelector } from "reselect";

const selectBroadState = (state) => state.BroadArea;

export const getBroadState = createSelector(selectBroadState, (broadArea) => {
  console.log(broadArea);
  return broadArea.broadDetails;
});
