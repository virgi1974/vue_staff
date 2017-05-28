class HomeController < ApplicationController

  before_action :authenticate_user!

  def index
    @favorites = current_user.favorites.all

    respond_to do |format|
      format.html
      format.json { render json: @favorites }
    end
  end
  
end
