json.extract! person, :id, :name, :email, :zip_code, :date_of_birth
json.url person_url(person, format: :json)