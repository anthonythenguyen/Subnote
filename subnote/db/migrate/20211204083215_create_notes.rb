class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.string :uuid, null: false
      t.string :title
      t.string :content
      t.string :ownerid
      t.string :parentid

      t.timestamps
    end
  end
end
