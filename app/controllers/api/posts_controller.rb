class Api::PostsController < ApplicationController

    before_action :require_logged_in

    def index 
        @posts = Post.all 
        render :index
    end 

    def create 
        @post = Post.new(post_params)

        if @post.save  
            render :show
        else  
            render json: @post.errors.full_messages, status: 401
        end
    end 

    def show 
        @post = Post.find_by(id: params[:id])

        if @post 
            render :show 
        else  
            render json: ["Post cannot be found"], status: 422
        end
    end 

    def update 
        @post = Post.find_by(id: params[:id])

        if @post && current_user.id == @post.user_id 
            @post.update(post_params) 
            render :show 
        else  
            render json: @post.errors.full_messages, status: 401
        end 
    end 

    def destroy 
        @post = Post.find_by(id: params[:id])

        if @post && current_user.id == @post.user_id 
            @post.destroy 
            render json: ["Post was successfully deleted"]
        else  
            render json: @post.errors.full_messages, status: 422
        end
    end 

    private 

    def post_params 
        params.require(:post).permit(:caption)
    end

end
