class SettingsController < ApplicationController
  before_action :require_login

  def index
    @user = current_user
  end

  def put_email
    if user_params[:email] == user_params[:email_confirmation]
      if current_user.update_attribute('email', user_params[:email])
        redirect_to settings_url
      else
      end
    else
    end
  end

  private

    def user_params
      params.require(:user).permit(:email,
                                   :email_confirmation)
    end

    def require_login
      filter_require_login
    end
end
