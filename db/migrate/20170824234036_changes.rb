class Changes < ActiveRecord::Migration[5.1]
  def change

      change_column(:homes, :long, :float)
      remove_column :bookings, :password_digest

  end
end
