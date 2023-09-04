class CreateProperties < ActiveRecord::Migration[7.0]
  def change
    create_table :properties do |t|
      t.string :name
      t.string :city
      t.text :description
      t.string :country
      t.string :state
      t.string :headline

      t.timestamps
    end
  end
end
