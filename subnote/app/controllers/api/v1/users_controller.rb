class Api::V1::UsersController < ApplicationController
  before_action :authenticate

  def index
    users = User.all
    render json: users, status: 200
  end

  def show
  end

  def create
    # u = User.new(email:"brendenbunker@gmail.com", password:"password", first_name:"Brenden", last_name:"Bunker")
    # u.save
    # render json: u, status: 200
    user = User.new(email: params[:email], password: params[:password], first_name: params[:firstName], last_name: params[:lastName])
    user.save 
    @user = user
    created_jwt = create_token({uuid: @user.uuid})
    cookies.signed[:jwt] = {value:  created_jwt, httponly: true}

    render json: {
      email: user.email}, status:201
  end
end
