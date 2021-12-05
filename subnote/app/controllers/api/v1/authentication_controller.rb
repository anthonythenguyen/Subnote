class Api::V1::AuthenticationController < ApplicationController

    def login
        @user = User.find_by(email: params[:email])
        if @user
            if (@user.authenticate(params[:password]))
                payload = { user_id: @user.uuid }
                secret = ENV["SECRET_KEY_BASE"] || Rails.application.secrets.secret_key_base
                token = create_token(payload, secret)
                render json: {
                    token: token
                }
            else
                render json: { message: "Authentication Failed" }, status: 401
            end
        else
            render json: { message: "Could not find user" }, status: 401
        end
    end
end
