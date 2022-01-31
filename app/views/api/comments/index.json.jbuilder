@comments.each do |comment|
    json.set! comment.id do 
        json.partial! 'api/comments/comment', comment: comment
        json.username comment.user.username
    end
end


