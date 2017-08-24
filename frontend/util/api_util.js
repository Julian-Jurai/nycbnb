

export const signup = (user) => {
  //user : {username, :password}
  return (
    $.ajax({
      method: "POST",
      url: "/api/users/",
      data: { user }
    })
  );
};


export const login = (user) => {
  //user : {username, :password}
  return (
    $.ajax({
      method: "POST",
      url: "/api/session/",
      data: { user }
    })
  );
};

export const logout = () => {
  return (
    $.ajax({
      method: "DELETE",
      url: "/api/session/"
    })
  );
};
