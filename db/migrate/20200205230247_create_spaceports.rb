class CreateSpaceports < ActiveRecord::Migration[5.2]
  def change
    create_table :spaceports do |t|
      t.string :identifier, null: false
      t.string :locality, null: false
      t.string :planet, null: false
      t.timestamps
    end
    add_index :spaceports, :identifier, unique: true
  end
end
