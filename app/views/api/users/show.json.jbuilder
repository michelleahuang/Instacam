json.partial! 'api/users/user', user: @user

json.totalCount User.all.length

json.set! "posts" do 
    json.array! @user.posts.each do |post|
            json.caption post.caption
            json.photoUrl url_for(post.photo)
    end
end

