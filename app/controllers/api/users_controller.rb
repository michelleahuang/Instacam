require "open-uri"

class Api::UsersController < ApplicationController

    def index 
        @users = User.all 
        render :index
    end 

    def create 
        @user = User.new(user_params)

        if @user.save 
            default_avatar = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/default-avatar.jpg')
            @user.avatar.attach(io: default_avatar, filename: 'default-avatar.jpg')

            login!(@user)
            render :show
        else  
            render json: @user.errors.full_messages, status: 401
        end
    end 

    def show 
        @user = User.find_by(id: params[:id])

        if @user 
            render :show
        else  
            render json: @user.errors.full_messages, status: 401
        end
    end 

    private 

    def user_params 
        params.require(:user).permit(:username, :email, :name, :password)
    end

end
