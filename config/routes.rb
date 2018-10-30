Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # root "art_objects#home"

  post "/api/artobjects", to: "art_objects#create"
  get "/api/artobjects", to: "art_objects#index"
  put "/api/artobjects/:id", to: "art_objects#update"
  get "/api/artobjects/favorites", to: "art_objects#favorites"

  # Per here, toward bottom: https://blog.heroku.com/a-rock-solid-modern-web-stack
  # This tells Rails to pass anything it doesn’t match over to your client/index.html so that React Router can take over.
  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end

end
