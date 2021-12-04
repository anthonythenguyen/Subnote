class Api::V1::UsersController < ApplicationController
<<<<<<< HEAD
  before_action :authenticate

=======
>>>>>>> 808d188 (setup user, theme, and note migrations)
  def index
    users = User.all
    render json: users, status: 200
  end

  def show
  end

  def create
<<<<<<< HEAD
    u = User.new(email:"brendenbunker@gmail.com", password:"password", first_name:"Brenden", last_name:"Bunker")
    u.save
    render json: u, status: 200
=======
>>>>>>> 808d188 (setup user, theme, and note migrations)
  end
end
