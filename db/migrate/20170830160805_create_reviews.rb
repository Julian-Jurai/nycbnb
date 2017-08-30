class CreateReviews < ActiveRecord::Migration[5.1]
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :homes_id, null: false
      t.integer :rating, null: false
      t.string :body, null: false
      t.timestamps
    end
  end
end
