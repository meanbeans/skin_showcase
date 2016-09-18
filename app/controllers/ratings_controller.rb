class RatingsController < ApplicationController
  before_action :require_login

  def create
    @rating = Rating.new(ratings_params)
    @rating.user_id = current_user.id

    if @rating.save
      # redirect_to skin_url(@review.skin)
      render json: @rating
    else
      flash.now[:error] = 'Failed to rate. Please try again.'
      # render 'skins/show'
    end
  end

  private

    def ratings_params
      params.require(:rating).permit(:score, :skin_id, :review_id)
    end

    def require_login
      filter_require_login
    end
end
