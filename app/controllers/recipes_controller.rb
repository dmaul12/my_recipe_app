class RecipesController < ApplicationController

    def index
    url = "http://www.recipepuppy.com/api/?i=#{params[:ingredients]}&q=#{params[:recipe]}"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end
end

# Optional Parameters:
# i : comma delimited ingredients
# q : normal search query
# p : page

# url = "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3"

# url = "http://www.recipepuppy.com/api/?i=#{params[:ingredients]}&q=#{params[:recipe]}"
