class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.integer :user_id, null: false
      t.integer :homes_id, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false

      t.string :password_digest, null: false
      t.timestamps
    end
  end
end
