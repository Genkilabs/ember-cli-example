json.people do
	json.array!([@person]) do |person|
	  json.partial!("attributes", :person => person, :qualities => person.qualities)
	end
end

json.qualities do
	json.array!(@person.qualities) do |quality|
		json.partial!("qualities/attributes", :quality => quality)
	end
end