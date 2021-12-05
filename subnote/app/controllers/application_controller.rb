class ApplicationController < ActionController::Base


    def authenticate 
        if request.headers["Authorization"]
            begin 
                auth_header = request.headers["Authorization"]
                decode_token = JWT.decode(auth_header.split(" ")[1], secret)
                payload = decode_token.first
                user_id = payload["user_id"]
                @user = User.find(user_id)
            rescue => exception
                render json: {message: "Error: #{exception}", status: 403}
            end

        else
            render json: {message: "No Auth was sent", status: 403}
        end
    end

    def secret
        ENV['SECRET_KEY_BASE'] || Rails.application.secrets.secret_key_base
    end

    def create_token(payload, secret)
        JWT.encode(payload, secret)
    end
end