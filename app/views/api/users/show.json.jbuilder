json.partial! 'api/users/user', user: @user


    # @user.posts.each do |post|
    #     json.set! post.id do 

    #     # json.caption :caption
    #         json.photoUrl url_for(post.photo)
    #     end
    # end

json.set! "posts" do 
    @user.posts.each do |post|
        json.set! post.id do 

        # json.caption :caption
            json.photoUrl url_for(post.photo)
        end
    end
end

    # json.posts do 
    #     json.array! @user.posts, :photo, :caption
    # end 

# json.posts do 
    # json.array! @user.posts, :photo, :caption
    # json.photoUrl url_for(post.photo)
    # json.array! @user.posts

# end 


# @user.posts do |post|
#     json.photoUrl url_for(post.photo)
# end