class Api::CommentsController < ApplicationController

    def index 
        @comments = Comment.all 
        render :index
    end 

    def create 
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id 
        @comment.post_id = params[:comment][:post_id]

        if @comment.save 
            render :show 
        else  
            render json: @comment.errors.full_messages, status: 422
        end 

    end 

    def destroy 
        @comment = Comment.find_by(id: params[:id])

        if @comment && (current_user.id == @comment.user_id)
            @comment.destroy 
            render :show 
        else  
            render json: @comment.errors.full_messages, status: 404
        end 
        
    end 

    private 

    def comment_params 
        params.require(:comment).permit(:user_id, :post_id, :body)
    end 

end

