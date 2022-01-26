json.partial! 'api/posts/post', post: @post
json.creator @post.user.username
json.creatorAvatar url_for(@post.user.avatar)
