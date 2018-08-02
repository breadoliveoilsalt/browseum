class ArtObject < ApplicationRecord

  validates :labelText, presence: true

    # Not using a custom class constructor for now
  # def self.new_from_json(params)
  # end
end
