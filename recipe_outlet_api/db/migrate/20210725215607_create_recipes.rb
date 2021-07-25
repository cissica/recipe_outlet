class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :title
      t.string :summary
      t.string :instructions
      t.string :ingredients
      t.string :servings
      t.string :time

      t.timestamps
    end
  end
end
