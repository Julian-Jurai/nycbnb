export const fetchAllHomes = (filter) => {
  debugger
  return (
    $.ajax({
      method: "GET",
      url: "/api/homes/",
      data: {bounds: filter}
    })
  );
};

export const fetchSingleHomes = (homeId) => {
  return (
    $.ajax({
      method: "GET",
      url:`/api/homes/${homeId}`
    })
  );
};
