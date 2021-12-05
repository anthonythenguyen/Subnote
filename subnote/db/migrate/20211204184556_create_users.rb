class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :uuid, null: false
      t.string :first_name
      t.string :last_name
      t.string :email, null: false
      t.string :password_digest
      t.string :default_theme
      t.string :background_picture_url
      t.string :profile_picture

      t.timestamps
    end
  end
end
