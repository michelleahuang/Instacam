json.partial! 'api/users/user', user: @user


    # @user.posts.each do |post|
    #     json.set! post.id do 

    #     # json.caption :caption
    #         json.photoUrl url_for(post.photo)
    #     end
    # end

json.set! "posts" do 
    json.array! @user.posts.each do |post|
            json.caption post.caption
            json.photoUrl url_for(post.photo)
    end
end

