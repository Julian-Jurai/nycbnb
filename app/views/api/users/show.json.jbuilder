# json.partial! "api/users/user", user: @user
    json.homes  @user.homes.map do |home|
        json.partial! "api/homes/home", home: home
    end

    json.extract! @user, :id, :username
