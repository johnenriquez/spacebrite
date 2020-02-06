@spaceports.each do |spaceport|
    json.set! spaceport.id do
        json.partial! 'spaceport', spaceport: spaceport
    end
end
