class Api::LikesController < ApplicationController

    def index  
        @likes = Like.all 
        render :index 
    end 

    def create 
        @like = Like.new(like_params)
        @like.user_id = current_user.id
        @like.post_id = params[:like][:post_id]

        if @like.save 
            render :show 
        else  
            render json: @like.errors.full_messages, status: 422
        end 

    end 

    def destroy
        @like = Like.find_by(id: params[:id])

        if @like && (current_user.id == @like.user_id)
            @like.destroy 
            render :show 
        else  
            render json: @like.errors.full_messages, status: 422
        end 

    end 

    private 

    def like_params 
        params.require(:like).permit(:user_id, :post_id)
    end 

end
