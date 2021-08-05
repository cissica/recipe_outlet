require "pry"
class FavoritesController < ApplicationController
  skip_before_action :require_login, only: [:create, :show]
  # before_action :set_favorite, only: [:show, :update, :destroy]

  # GET /favorites
  def index
    render json: @favorites
  end

  # GET /favorites/1
  def show
    # binding.pry
    favorites = []
    arr = Favorite.where(params[:id])
    arr.each do |item|
      r = item.recipe
      favorites << r 
    end
    render json: favorites
  end

  # POST /favorites
  def create
    @favorite = Favorite.new(favorite_params)

    if @favorite.save
      render json: @favorite, status: :created, location: @favorite
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /favorites/1
  def update
    if @favorite.update(favorite_params)
      render json: @favorite
    else
      render json: @favorite.errors, status: :unprocessable_entity
    end
  end

  # DELETE /favorites/1
  def destroy
    @favorite.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_favorite
      @favorite = Favorite.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def favorite_params
      params.permit(:user_id, :recipe_id)
    end
end
