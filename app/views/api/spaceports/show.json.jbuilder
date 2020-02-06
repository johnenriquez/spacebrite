json.spaceport do
    json.partial! 'spaceport', spaceport: @spaceport
end
json.flights do
    @spaceport.outbound_flights.each do |flight|
        json.set! flight.id do
            json.partial! 'api/flights/flight', flight: flight
        end
    end
    @spaceport.inbound_flights.each do |flight|
        json.set! flight.id do
            json.partial! 'api/flights/flight', flight: flight
        end
    end
end