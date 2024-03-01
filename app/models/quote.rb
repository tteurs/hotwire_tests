class Quote < ApplicationRecord
  validates :name, presence: true, allow_blank: false
  broadcasts_refreshes

end
