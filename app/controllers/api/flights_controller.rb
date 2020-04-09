class Api::FlightsController < ApplicationController

    # before_action :require_logged_in, except: [:index, :show]
    
    def index
        @flights = Flight.all
    end

    def show
        @flight = Flight.find(params[:id])
    end

end