class Api::V1::NotesController < ApplicationController
  before_action :authenticate
  
  def index
    notes = Note.all
    render json: notes, status:200
  end

  def show
  end
end
