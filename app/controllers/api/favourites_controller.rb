module Api
	class FavouritesController < ApplicationController
		before_action :authenticate_user!
		def create
			favourite = Favourite.create!(favourites_params)
			respond_to do |format|
				format.json do
					render json: favourite.to_json, status: :created
				end
			end
		end
		def destroy
			favourite = Favourite.find(params[:id])
			favourite.destroy
			respond_to do |format|
				format.json do
					render json: favourite.to_json, status: 204
				end
			end
		end

		private
		def favourites_params
			params.permit(:user_id, :property_id)
		end
	end
end