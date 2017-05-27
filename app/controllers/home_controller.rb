class HomeController < ApplicationController

  before_action :authenticate_user!

  def index
    @favorites = Favorite.all

    respond_to do |format|
      format.html
      format.json { render json: @favorites }
    end
  end
  
end
