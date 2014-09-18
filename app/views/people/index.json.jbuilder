json.people do
	json.array!(@people) do |person|
	  json.partial!("attributes", :person => person, :qualities => person.qualities)
	end
end

json.qualities do
	@people.each do |person|
		json.array!(person.qualities) do |quality|
		  json.partial!("qualities/attributes", :quality => quality)
		end
	end
end