class ApplicationController < ActionController::Base
    include ::ActionController::Cookies

    def authenticate 
            begin 
                jwt = cookies.signed[:jwt]
                decoded_token = decode_token(jwt)
                @user = User.find_by(uuid: decoded_token[0]["uuid"])
            rescue => exception
                render json: {message: "Error: #{exception}", status: 403}
            end
    end

    def secret
        ENV['SECRET_KEY_BASE'] || Rails.application.secrets.secret_key_base
    end

    def create_token(payload)
        JWT.encode payload, secret, 'HS256'
    end

    def decode_token(payload)
        JWT.decode payload, secret, true, { algorithm: 'HS256' }
    end
end