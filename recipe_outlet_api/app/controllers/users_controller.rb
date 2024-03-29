require "pry"

class UsersController < ApplicationController
  skip_before_action :require_login, only: [:create]
  
    def create

      user = User.create(user_params)
    
      if user.valid?
        payload = {user_id: user.id}
        token = encode_token(payload)
        render json: { user: user, jwt: token }
      else
        render json: { error: 'failed to create user' }, status: :not_acceptable
      end
    end
  
    private
  
    def user_params
      params.permit(:name, :password)
    end
  end
  