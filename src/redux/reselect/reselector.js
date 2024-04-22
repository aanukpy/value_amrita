import { createSelector } from "reselect";

const selectBroadState = (state) => state.BroadArea;

export const getBroadState = createSelector(selectBroadState, (broadArea) => {
  return broadArea.broadDetails;
});
export const getBroad = createSelector(selectBroadState, (broadName) => {
  const filterBroad = broadName?.broadDetails?.map((item) => {
    return {
      label: item.broadAreaName,
      value: item.broadAreaName,
      id: item.broadAreaId,
    };
  });
  return filterBroad;
});

export const getLabById = (broadAreaId) => (state) => {
  const labs = state?.broadAreaReducer?.labs;
  return labs?.filter((lab) => lab.broadAreaId === broadAreaId);
};
