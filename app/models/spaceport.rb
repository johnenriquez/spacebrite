class Spaceport < ApplicationRecord

    validates :identifier, :locality, :planet, presence: true
    validates :identifier, uniqueness: true

end