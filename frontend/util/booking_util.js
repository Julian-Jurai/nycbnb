export const fetchAllBookingsForHome = (homeId) => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/homes/${homeId}/bookings`
    })
  );
};

export const fetchAllBookingsForUser = (userId) => {
  return (
    $.ajax({
      method: "GET",
      url: `/api/users/${userId}/bookings`
    })
  );
};

export const createBooking = (booking) => {
  // params.require(:booking).permit(
  // :user_id,
  // :homes_id,
  // :start_date.
  // :end_date,
  // )
  return (
    $.ajax({
      method: "POST",
      url:`/api/bookings/`,
      data: { booking }
    })
  );
};

export const destroyBooking = (bookingId) => {
  return (
    $.ajax({
      method: "DELETE",
      url:`/api/bookings/`,
      data: {id: bookingId}
    })
  );
};
