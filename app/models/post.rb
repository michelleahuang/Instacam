class Post < ApplicationRecord
    validates :user_id, :caption, presence: true
    validate :ensure_photo 

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :likes, 
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Like,
        dependent: :destroy
    
    has_many :comments,
        primary_key: :id,
        foreign_key: :post_id,
        class_name: :Comment,
        dependent: :destroy

    has_one_attached :photo

    def ensure_photo 
        unless self.photo.attached? 
            errors[:photo] << "must be attached"
        end
    end 

end
