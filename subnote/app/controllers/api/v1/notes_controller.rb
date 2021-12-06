class Api::V1::NotesController < ApplicationController
  before_action :authenticate
  
  def index
    notes = Note.where(ownerid: @user.uuid)
    render json: notes, status:200
  end

  def show
    note = Note.find_by(uuid: params[:uuid])
    render json: note, status:200
  end

  def create
    note = Note.new(title: params[:title], ownerid: @user.uuid)
    note.save
    render json: note, status:200
  end

  def update
    note = Note.find_by(uuid: params[:id])
    note.title = params[:title]
    note.content = params[:content]
    note.save
    render json: note, status:200
  end
end
