class CreateArtObjects < ActiveRecord::Migration[5.2]
  def change
    create_table :art_objects do |t|
      t.integer :objectApiId
      t.string :primaryImageUrl
      t.string :title
      t.string :artist
      t.integer :artistApiId
      t.string :medium
      t.string :dated
      t.string :century
      t.string :culture
      t.string :labelText
      t.string :description
      t.string :commentary
      t.datetime :firstViewed
      t.datetime :lastViewed
      t.boolean :favorite
      t.timestamps null: false
    end
  end
end
