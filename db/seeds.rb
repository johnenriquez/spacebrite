# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
User.create([
    { email: 'demoadmin@spacebrite.io', password: '4zHFGHFjHRpBbBDf', firstname: 'Demo', lastname: 'Admin', admin: true },
    { email: 'demouser001@spacebrite.io', password: 'cf2XvxnZGKR91TfS7', firstname: 'Demo', lastname: 'User' },
    { email: 'normaluser001@spacebrite.io', password: 'STfXvMS7cf2crMmz', firstname: 'Normal', lastname: 'User' },
    { email: 'normaluser002@spacebrite.io', password: 'xnZGKR91X7OciLIQ', firstname: 'Another', lastname: 'User' },
])

Spaceport.destroy_all
Spaceport.create([
    { identifier: 'USX', locality: 'United States', planet: 'Earth' },
    { identifier: 'MON', locality: 'Moon', planet: 'Earth' },
    { identifier: 'OMQ', locality: 'Olympus Mons', planet: 'Mars' },
    { identifier: 'VMZ', locality: 'Valles Marineris', planet: 'Mars' },
    { identifier: 'ERP', locality: 'Europa', planet: 'Jupiter' },
])


Flight.destroy_all
Flight.seed_flights(30)