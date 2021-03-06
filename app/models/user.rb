class User < ApplicationRecord

    validates :email, :password_digest, :session_token, :firstname, :lastname, presence: true
    validates :email, :session_token, uniqueness: true
    validates :password, length: { minimum: 6 }, allow_nil: true

    def self.find_by_credentials(email, password)
        user = self.find_by(email: email)
        return nil unless user && user.is_password?(password)
        user
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end

    after_initialize :ensure_session_token

    attr_reader :password

    def is_password?(password)
        bcrypt_password = BCrypt::Password.new(self.password_digest)
        bcrypt_password.is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.update_attributes!(session_token: self.class.generate_session_token)
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token ||= self.class.generate_session_token
    end


end