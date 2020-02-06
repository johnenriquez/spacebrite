class CreateFlights < ActiveRecord::Migration[5.2]
  def change
    create_table :flights do |t|
      t.string :number, null: false
      t.string :spaceline, null: false
      t.string :spacecraft, null: false
      t.integer :origin_id, null: false
      t.datetime :departure_time, null: false
      t.integer :destination_id, null: false
      t.datetime :arrival_time, null: false
      t.timestamps
    end
    add_index :flights, :number, unique: true
  end
end
