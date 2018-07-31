class CreateArtObjects < ActiveRecord::Migration[5.2]
  def change
    create_table :art_objects do |t|

      t.timestamps
    end
  end
end
