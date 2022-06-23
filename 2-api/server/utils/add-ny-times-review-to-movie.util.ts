export const addNyTimesReviewToMovie = (ombdRes: any, nyRes: any) => {
  if (nyRes && nyRes.results != null && nyRes.results.length <= 1) {
    return {
      ...ombdRes,
      nyTimesINFO: nyRes.results[0],
    };
  }
  return {
    ...ombdRes,
    nyTimesINFO: undefined,
  };
};
