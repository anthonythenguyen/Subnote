class Note < ApplicationRecord
    attribute :uuid, :string, default: -> { SecureRandom.uuid }
    attribute :content, :string, default: "{\"blocks\":[{\"key\":\"3tcp7\",\"text\":\"\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{}}],\"entityMap\":{}}"
end
