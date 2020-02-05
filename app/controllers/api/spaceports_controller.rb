class Api::SpaceportsController < ApplicationController

    before_action :require_logged_in, except: [:index]
    
    def index
        @spaceports = Spaceport.all
    end

    def create
        @spaceport = Spaceport.new(spaceport_params)
        if @spaceport.save
            render :show
        else
            render json: @spaceport.errors.full_messages, status: 422
        end
    end

    def update
        @spaceport = Spaceport.find(params[:id])
        if @spaceport.update(spaceport_params)
            render :show
        else
            render json: @spaceport.errors.full_messages, status: 422
        end
    end

    def destroy
        if Spaceport.find(params[:id]).destroy
            render json: {}
        else
            render json: ['Could not delete spaceport'], status: 422
        end
    end

    private

    def spaceport_params
        params.require(:spaceport).permit(:identifier, :locality, :planet)
    end

end