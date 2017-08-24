export const fetchAllHomes = () => {
  return (
    $.ajax({
      method: "GET",
      url: "/api/homes/"
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


// NOTE avialble 6,7,8
