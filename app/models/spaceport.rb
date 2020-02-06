class Spaceport < ApplicationRecord

    validates :identifier, :locality, :planet, presence: true
    validates :identifier, uniqueness: true

    has_many :outbound_flights, dependent: :destroy,
        class_name: :Flight,
        foreign_key: :origin_id

    has_many :inbound_flights, dependent: :destroy,
        class_name: :Flight,
        foreign_key: :destination_id

    @@spaceport_codes = [
        'USX',
        'MON',
        'OMQ',
        'VMZ',
        'ERP',
    ]

    def self.generate_spaceport_code
        @@spaceport_codes.sample
    end

end