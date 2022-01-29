json.extract! user, :id, :username, :email, :name
json.photoUrl url_for(user.avatar)

# user.posts do |post|
#     json.postUrl url_for(post.photo)
# end