class User < ApplicationRecord
    validates :username, :email, :name, :password_digest, :session_token, presence: true 
    validates :username, :email, uniqueness: true 
    validates :password, length: { minimum: 6, allow_nil: true }
    validates :email, format: { with: /\A[\w+-.]+@[a-z\d-]+(.[a-z\d-]+)*.[a-z]+\z/i, message: " is invalid"  }, uniqueness: { case_sensitive: false }

    attr_reader :password 
    after_initialize :ensure_session_token 

    has_many :posts,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :Post
    
    has_many :likes,
        primary_key: :id, 
        foreign_key: :user_id,
        class_name: :Like
    
    has_many :comments,
        primary_key: :id, 
        foreign_key: :user_id, 
        class_name: :Comment
    
    has_one_attached :avatar

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end


    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64 
    end

end
