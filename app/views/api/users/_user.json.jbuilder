json.extract! user, :id, :username, :email, :name
json.photoUrl url_for(user.avatar)

