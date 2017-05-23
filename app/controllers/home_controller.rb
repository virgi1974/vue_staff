class HomeController < ApplicationController

  def index
    @favorites = Favorite.all

    respond_to do |format|
      format.html
      format.json { render json: @favorites }
    end
  end
  
end
