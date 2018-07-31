# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_07_31_220953) do

  create_table "art_objects", force: :cascade do |t|
    t.integer "object_Api_Id"
    t.string "primary_image_url"
    t.string "title"
    t.string "artist"
    t.integer "artist_Api_Id"
    t.string "medium"
    t.string "dated"
    t.string "century"
    t.string "culture"
    t.string "label_text"
    t.string "description"
    t.string "commentary"
    t.datetime "first_Viewed"
    t.datetime "last_Viewed"
    t.boolean "favorite"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
