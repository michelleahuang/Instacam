class UpdateIndexOnLikes < ActiveRecord::Migration[5.2]
  def change
    remove_index(:likes, :user_id)
    remove_index(:likes, :post_id)
    add_index(:likes, [:post_id, :user_id], unique: true)
  end
end
