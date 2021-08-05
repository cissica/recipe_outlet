require "pry"
class AuthController < ApplicationController
    skip_before_action :require_login, only: [:login, :auto_login]
  
    def login 
      @user = User.find_by(name: user_login_params[:name])
     
      if @user && @user.authenticate(user_login_params[:password])
        payload = { user_id: @user.id }
        @token = encode_token(payload)
        render json: { user: @user, jwt: @token }, status: :accepted
      else
        render json: { message: 'Invalid username or password' }, status: :unauthorized
      end
    end

    def auto_login
      if session_user 
        render json: session_user
      else
        render json: {errors: "No User Logged In"}
      end 
    end 
  
    def user_login_params
      params.permit(:name, :password)
    end 
  end