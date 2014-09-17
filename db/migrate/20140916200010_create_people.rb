class CreatePeople < ActiveRecord::Migration
  def change
    create_table :people do |t|
      t.string :name
      t.string :email
      t.string :zip_code
      t.datetime :date_of_birth

      t.timestamps
    end
  end
end
