class ApplicationController < ActionController::Base

    def current_user
        return nil unless session[:session_token]
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout(user)
        user.reset_session_token!
        session[:session_token] = nil
    end

    def logged_in?
        !!current_user
    end

    def require_logged_in
        unless logged_in?
            render json: ['Not Authorized'], status: 401
        end
    end

    helper_method :current_user
    helper_method :logged_in?

end
