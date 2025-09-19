class User < ApplicationRecord
  has_one_attached :profile_picture

  validates :username, presence: true, uniqueness: true
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :email, presence: true, uniqueness: true, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, presence: true, length: { minimum: 6 }
  validates :bio, length: { maximum: 250 }, allow_blank: true
  validates :role, inclusion: { in: %w[admin moderator user] }

  before_validation :set_default_role, on: :create
  before_validation :set_last_login_at, if: -> { status_changed? && status == "active" }


  def admin?
    role == "admin"
  end

  private

  def set_default_role
    self.role ||= "user"
  end

  def set_last_login_at
    self.last_login_at = Time.current
  end
end
