class RecipesController < ApplicationController
    def index
    url = "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end
end
