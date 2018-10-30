Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # root "art_objects#home"

  post "/api/artobjects", to: "art_objects#create"
  get "/api/artobjects", to: "art_objects#index"
  put "/api/artobjects/:id", to: "art_objects#update"
  get "/api/artobjects/favorites", to: "art_objects#favorites"

end
