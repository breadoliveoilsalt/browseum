class ArtObject < ApplicationRecord

   # < ActiveRecord::Base

#  No idea why this was there:

  # This is how to test error messages:
  # validates :labelText, presence: true

  def self.get_title(id)
    self.find_by(id: id).title
  end


  #
  # def self.new_from_json(params)
  #   puts "You made it to new from json!"
  #   art_object = self.new
  #   art_object.objectApiId = params[:objectApiId]
  #   art_object.primaryImageUrl = params[:primaryImageUrl]
  #   art_object.title = params[:title]
  #   art_object.artist = params[:artist]
  #   art_object.artistApiId = params[:artistApiId]
  #   art_object.medium = params[:medium]
  #   art_object.dated = params[:dated]
  #   art_object.century = params[:century]
  #   art_object.culture = params[:culture]
  #   art_object.labelText = params[:labelText]
  #   art_object.description = params[:description]
  #   art_object.commentary = params[:commentary]
  #   art_object.firstViewed = Date.parse(params[:firstViewed]
  #   art_object.lastViewed = Date.parse(params[:lastViewed]
  #   art_object.favorite = params[:favorite]
  #   art_object
  # end

end
