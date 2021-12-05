class Api::V1::UsersController < ApplicationController
  before_action :authenticate

  def index
    users = User.all
    render json: users, status: 200
  end

  def show
  end

  def create
    u = User.new(email:"brendenbunker@gmail.com", password:"password", first_name:"Brenden", last_name:"Bunker")
    u.save
    render json: u, status: 200
  end
end
