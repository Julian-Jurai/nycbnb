export const fetchAllHomesForUser = (userId) => {

  return (
    $.ajax({
      method: "GET",
      url: `/api/users/${userId}/`
    })
  );
};
