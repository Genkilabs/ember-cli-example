json.array!(@qualities) do |quality|
  json.extract! quality, :id, :name, :person_id
  json.url quality_url(quality, format: :json)
end
