json.people do
	json.array!([@person]) do |person|
	  json.partial!("attributes", :person => person)
	end
end
