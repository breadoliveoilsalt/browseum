class ArtObjectsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create

      # I decided against creating a custom class constructor (eg. ArtObject.new_from_json)
      # and instead am keeping the keys from the incomng JSON object as is, ie, not making them
      # snake case.  Seems to create too much confusion in drafting b/w ruby and javascript.
      # The line below looks to see if the randomly selected art previously exists in the DB. If not,
      # it initializes a new record
    art_object = ArtObject.find_and_update_lastViewed(params[:id]) || ArtObject.custom_new(art_object_params)
    if art_object.save
      render json: art_object
    else
      render json: {errors: art_object.errors.full_messages }
    end
  end

  def index
     art_objects = ArtObject.records_from_last_30_days
     render :json => art_objects
  end

  def update
    puts "You made it to update. Params:", params
    art_object = ArtObject.find_by(id: params[:id])
    # art_object.lastViewed = Time.zone.now
    if art_object.update(art_object_params)
      head :ok, content_type: "text/html"
      # render json: art_object
    else
      render json: {errors: art_object.errors.full_messages }
    end
  end

  private

    # The permitted params conform to the keys in the JavaScript/JSON object sent from the app
  def art_object_params
    params.permit(:id, :objectApiId, :primaryImageUrl, :title, :artist, :artistApiId, :medium, :dated, :century, :culture, :commentary, :labelText, :description, :firstViewed, :lastViewed, :favorite)
  end

end
