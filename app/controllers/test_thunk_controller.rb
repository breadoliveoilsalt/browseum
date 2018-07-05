
class TestThunkController < ApplicationController
  def home
    render :json => {"text": "Hello, how are you today?"}
  end
end
