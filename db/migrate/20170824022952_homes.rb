class Homes < ActiveRecord::Migration[5.1]
  def change
    create_table :homes do |t|

      t.integer :host_id, null: false
      t.string :title, null: false
      t.string :description, null: false
      t.float :lat, null: false
      t.integer :long, null: false
      t.string :address, null: false

      t.integer :price, null: false

      t.string :room_type, null: false
      t.integer :bedrooms, null: false
      t.integer :guests, null: false
      t.integer :beds, null: false

      t.boolean :kitchen, null: false
      t.boolean :internet, null: false
      t.boolean :family, null: false
      t.boolean :tv, null: false
      t.boolean :essentials, null: false

      t.timestamps
    end
  end
end
