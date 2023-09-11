class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  has_many :favourites, dependent: :destroy
  has_many :favourited_properties, through: :favourites, source: :property
  
  has_one :profile, dependent: :destroy
  
  after_create :create_profile
  def create_profile
      self.profile = Profile.new
      save!
  end
end
