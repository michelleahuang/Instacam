json.extract! post, :id, :user_id, :caption
json.photoUrl url_for(post.photo)
