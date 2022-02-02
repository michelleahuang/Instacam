json.partial! 'api/posts/post', post: @post
json.creator @post.user.username
json.creatorAvatar url_for(@post.user.avatar)

json.set! "likes" do 
    json.array! @post.likes.each do |like|
        json.id like.id 
        json.user_id like.user_id 
        json.post_id like.post_id
    end
end
