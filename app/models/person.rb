class Person < ActiveRecord::Base
	has_many :qualities

	#default_scope -> { joins('LEFT JOIN qualities on people.id = qualities.person_id').includes(:qualities)}
end
