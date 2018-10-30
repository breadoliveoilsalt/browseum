class ArtObjectsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create
    art_object = ArtObject.find_and_update_lastViewed(params[:objectApiId]) || ArtObject.custom_new(art_object_params)
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
    art_object = ArtObject.find_by(id: params[:id])
    if art_object.update(art_object_params)
      head :ok, content_type: "text/html"
    else
      render json: {errors: art_object.errors.full_messages }
    end
  end

  def favorites
    art_objects = ArtObject.favorites
    render :json => art_objects
  end

  private

    # The permitted params conform to the keys in the JavaScript/JSON object sent from the app
  def art_object_params
    params.permit(:id, :objectApiId, :primaryImageUrl, :title, :artist, :artistApiId, :medium, :dated, :century, :culture, :commentary, :labelText, :description, :firstViewed, :lastViewed, :favorite)
  end

end
