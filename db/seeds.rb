# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

10.times do |i|
	property = Property.create!(
		name: Faker::Lorem.unique.word,
		headline: Faker::Lorem.unique.sentence,
		state: Faker::Address.state,
		city: Faker::Address.city,
		country: "United States",
		description: Faker::Lorem.unique.paragraph,
		address_1: Faker::Address.street_address
	)
	property.images.attach(io: File.open(Rails.root.join("db","sample","images", "property_#{i + 1}.jpeg")), filename: property.name )
end
