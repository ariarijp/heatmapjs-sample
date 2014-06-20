json.array!(@points) do |point|
  json.extract! point, :id, :x, :y
  json.url point_url(point, format: :json)
end
