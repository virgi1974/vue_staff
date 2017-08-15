class HomeController < ApplicationController

  def index
    favorites = current_user.favorites.all

    respond_to do |format|
      format.html

      initial_data = { :current_user => current_user, :favorites => favorites }
      format.json { render json: initial_data }
    end
  end

  def index_2
  end
  
end
