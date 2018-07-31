class CreateArtObjects < ActiveRecord::Migration[5.2]
  def change
    create_table :art_objects do |t|
      t.integer :object_Api_Id
      t.string :primary_image_url
      t.string :title
      t.string :artist
      t.integer :artist_Api_Id
      t.string :medium
      t.string :dated
      t.string :century
      t.string :culture
      t.string :label_text
      t.string :description
      t.string :commentary
      t.datetime :first_Viewed
      t.datetime :last_Viewed
      t.boolean :favorite
      t.timestamps null: false
    end
  end
end
