Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post '/art_objects', to: 'art_objects#create'
  # get '/testthunk', to: 'test_thunk#home'
end
