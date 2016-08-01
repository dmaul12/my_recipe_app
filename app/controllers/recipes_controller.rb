class RecipesController < ApplicationController
   def index
    @recipe = Recipe.all
    render :json => @recipe
  end

    def index
    url = "http://www.recipepuppy.com/api/?i=#{params[:ingredients]}"
    response = HTTParty.get(url)
    parsed_body = JSON.parse(response.body)
    render json: parsed_body
  end


  def create

    @recipe = Recipe.create({

                      :title => params[:title],
                    })
    render :json => @recipe
    puts :title
  end

  def show
    @recipe = Recipe.find(params[:title])
    render :json => @recipe
  end



end
# Optional Parameters:
# i : comma delimited ingredients
# q : normal search query
# p : page

# url = "http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3"

# url = "http://www.recipepuppy.com/api/?i=#{params[:ingredients]}&q=#{params[:recipe]}"
