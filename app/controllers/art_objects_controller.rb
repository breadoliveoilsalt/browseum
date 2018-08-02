class ArtObjectsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create

      # I decided against creating a custom class constructor (eg. ArtObject.new_from_json)
      # and instead am keeping the keys from the incomng JSON object as is, ie, not making them
      # snake case.  Seems to create too much confusion in drafting b/w ruby and javascript.
    @art_object = ArtObject.new(art_object_params)
    if @art_object.save
      render json: @art_object
    else
        # Th:is is a 422 error code:
      render json: {errors: @art_object.errors.full_messages }

      # body: nil, status: 422 -- this sort of worked
      # :json => { :errors => @model.errors.full_messages }
      # render status: 422
      # , {status: "error", code: "422", errorMessage: "There was a problem saving the art object to the database"}
    end

  end

  def index
     render :json => {"text": "You are in controller#index"}
  end

  private

    # The permitted params conform to the keys in the JavaScript/JSON object sent from the app
  def art_object_params
    params.permit(:id, :objectApiId, :primaryImageUrl, :title, :artist, :artistApiId, :medium, :dated, :century, :culture, :commentary, :labelText, :description, :firstViewed, :lastViewed, :favorite)
  end

end
