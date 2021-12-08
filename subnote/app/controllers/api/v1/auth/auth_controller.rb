class Api::V1::Auth::AuthController < ApplicationController

    def login
        @user = User.find_by(email: params[:email])
        if @user
            if (@user.authenticate(params[:password]))

                created_jwt = create_token({uuid: @user.uuid})
                cookies.signed[:jwt] = {value:  created_jwt, httponly: true}

                render json: {
                    email: @user.email
                }
            else
                render json: { message: "Authentication Failed" }, status: 401
            end
        else
            render json: { message: "Could not find user" }, status: 401
        end
    end

    def destroy
        cookies.delete(:jwt)
      end

    
end
