json.extract! comment, :id, :user_id, :post_id, :body, :created_at
json.username comment.user.username
json.userAvatar url_for(comment.user.avatar)
