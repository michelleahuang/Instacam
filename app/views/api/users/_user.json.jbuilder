json.extract! user, :id, :username, :email, :name
if user.avatar.attached?
    json.photoUrl rails_blob_url(user.avatar)
end 

json.set! "posts" do 
    json.array! user.posts.each do |post|
            json.id post.id
            json.caption post.caption
            json.likes post.likes
            json.comments post.comments
            json.photoUrl url_for(post.photo)
    end
end

json.totalCount User.all.length
