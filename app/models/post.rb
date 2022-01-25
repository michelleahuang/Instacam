class Post < ApplicationRecord
    validates :user_id, :caption, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    # has_many :likes, 
    #     primary_key: :id,
    #     foreign_key: :post_id,
    #     class_name: :Like,
    #     dependent: :destroy
    
    # has_many :comments,
    #     primary_key: :id,
    #     foreign_key: :post_id,
    #     class_name: :Comment,
    #     dependent: :destroy

end
