class ArtObjectsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create
    render :json => {"text": "You are in controller#create"}
  end

  def index
     render :json => {"text": "You are in controller#index"}
  end
end
