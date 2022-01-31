json.extract! post, :id, :user_id, :caption, :created_at
json.photoUrl url_for(post.photo)

