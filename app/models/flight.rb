class Flight < ApplicationRecord

    validates(
        :number,
        :spaceline,
        :spacecraft,
        :origin_id,
        :departure_time,
        :destination_id,
        :arrival_time,
        presence: true
    )
    validates :number, uniqueness: true

    belongs_to :origin,
        class_name: :Spaceport,
        foreign_key: :origin_id
    
    belongs_to :destination,
        class_name: :Spaceport,
        foreign_key: :destination_id

    @@spacelines = [
        'Virgin Galactic',
        'Blue Origin',
        'SpaceX'
    ]

    @@spacecrafts = [
        'Airbus G8700',
        'Boeing S7700'
    ]

    def self.generate_spaceline
        @@spacelines.sample
    end

    def self.generate_spacecraft
        @@spacecrafts.sample
    end

    def self.generate_flight_number
        charset = Array('A'..'Z')
        numset = Array('0'..'9')
        letters = Array.new(2) { charset.sample }.join
        numbers = Array.new(4) { numset.sample }.join
        letters + numbers
    end

    def self.generate_obj(origin_code, destination_code)
        departure = Time.now + rand(2..40).days + rand(0..23).hours + rand(0..59).minutes
        duration = rand(2..5).days + rand(0..23).hours + rand(0..59).minutes
        return {
            number: Flight.generate_flight_number,
            spaceline: Flight.generate_spaceline,
            spacecraft: Flight.generate_spacecraft,
            origin: Spaceport.find_by(identifier: origin_code),
            departure_time: departure,
            destination: Spaceport.find_by(identifier: destination_code),
            arrival_time: departure + duration,
        }
    end

    def self.seed_flights(num_flights)
        Flight.create(
            Array.new(num_flights) {
                # origin may == destination
                origin = Spaceport.generate_spaceport_code
                destination = Spaceport.generate_spaceport_code
                Flight.generate_obj(origin, destination)
            }
        );
    end

end