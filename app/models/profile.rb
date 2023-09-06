class Profile < ApplicationRecord
  belongs_to :user

  geocoded_by :address
  after_validation :geocode, if: -> { address.present? && longitude.blank? && latitude.blank? }
  def address
      [state, country].compact.join(', ')
  end
end