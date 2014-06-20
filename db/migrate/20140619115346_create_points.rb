class CreatePoints < ActiveRecord::Migration
  def change
    create_table :points do |t|
      t.integer :x
      t.integer :y

      t.timestamps
    end
  end
end
