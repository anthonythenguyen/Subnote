class CreateThemes < ActiveRecord::Migration[6.1]
  def change
    create_table :themes do |t|
      t.string :name
      t.string :background_color
      t.string :background_image
      t.string :card_background_color
      t.string :accent_color
      t.string :content_color_1
      t.string :content_color_2
      t.string :content_color_3
      t.string :content_color_4
      t.string :content_color_5
      t.string :content_color_6

      t.timestamps
    end
  end
end
