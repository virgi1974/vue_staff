class FavoriteController < ApplicationController

  def create
    favorite = Favorite.new(favorite_params)
    favorite.user_id = current_user.id

    respond_to do |format|
      if favorite.save
        format.json { render json: favorite }
      else
        format.json { render json: {:errors => favorite.errors, :status => 422}}
      end
    end

  end

  def update
    favorite = Favorite.find(params[:id])

    respond_to do |format|
      if favorite.update(favorite_params)
        format.json { render json: favorite }
      else
        format.json { render json: {:errors => favorite.errors, :status => 422}}
      end
    end    
  end

  def destroy
    favorite = Favorite.find(params[:id])
    favorite.destroy

    respond_to do |format|
      format.json { render json: {}, status: :no_content}
    end
    
  end

  private

  def favorite_params
    params.require(:favorite).permit(:url, :short_description, :long_description)
  end

end
