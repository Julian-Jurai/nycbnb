export const fetchAllHomes = (filter) => {

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
