# json.partial! "api/users/user", user: @user
    json.homes @user.homes
    json.extract! @user, :id, :username
