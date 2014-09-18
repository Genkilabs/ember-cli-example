json.qualities do
	json.array!(@qualities) do |quality|
	  json.partial!("attributes", :quality => quality)
	end
end