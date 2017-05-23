class CreateFavorite < ActiveRecord::Migration[5.1]
  def change
    create_table :favorites do |t|
      t.string  :url
      t.string  :short_description
      t.text    :long_description
      t.integer :user_id

      t.timestamps
    end
  end

  def down
    drop_table :favorites
  end
end
