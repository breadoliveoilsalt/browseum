class ArtObjectsController < ApplicationController

  def create
    render :json => {"text": "You are in controller#create"}
  end

  def index
     render :json => {"text": "You are in controller#index"}
  end
end
