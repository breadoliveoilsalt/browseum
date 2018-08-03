class ArtObjectsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create

      # I decided against creating a custom class constructor (eg. ArtObject.new_from_json)
      # and instead am keeping the keys from the incomng JSON object as is, ie, not making them
      # snake case.  Seems to create too much confusion in drafting b/w ruby and javascript.
      # The line below looks to see if the randomly selected art previously exists in the DB. If not,
      # it initializes a new record
    @art_object = ArtObject.find_by(objectApiId: params[:objectApiId]) || ArtObject.custom_new(art_object_params)
    if @art_object.save
      render json: @art_object
    else
      render json: {errors: @art_object.errors.full_messages }
    end

  end

  # def index
  #    render :json => {"text": "You are in controller#index"}
  # end

  private

    # The permitted params conform to the keys in the JavaScript/JSON object sent from the app
  def art_object_params
    params.permit(:id, :objectApiId, :primaryImageUrl, :title, :artist, :artistApiId, :medium, :dated, :century, :culture, :commentary, :labelText, :description, :firstViewed, :lastViewed, :favorite)
  end

end
