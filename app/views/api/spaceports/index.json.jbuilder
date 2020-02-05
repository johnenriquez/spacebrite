json.set! :spaceports do
    json.array! @spaceports do |spaceport|
        json.partial! 'api/spaceports/spaceport', spaceport: spaceport
    end
end