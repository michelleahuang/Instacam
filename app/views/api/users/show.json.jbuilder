json.partial! 'api/users/user', user: @user

json.posts do 
    json.array! @user.posts, :photo, :caption
end 
