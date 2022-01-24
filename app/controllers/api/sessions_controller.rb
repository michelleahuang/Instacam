class Api::SessionsController < ApplicationController

    def create 
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        
        if @user.nil?
            if params[:user][:username].empty? && params[:user][:password].empty? 
                render json: ["Username and password fields cannot be blank"], status: 401
            else 
                render json: ["Invalid username/password combination"], status: 401
            end
        else  
            login!(@user)
            render "api/users/show"
        end
    end 

    def destroy 
        if current_user.nil?
            render json: ["There is no signed in user to logout"], status: 404
        end 
        logout! 
        render json: {}
    end 

end
