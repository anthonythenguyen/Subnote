class User < ApplicationRecord
    attribute :uuid, :string, default: -> { SecureRandom.uuid }
end
