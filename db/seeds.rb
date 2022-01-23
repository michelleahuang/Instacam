# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

User.create!({name: "Demo User", email: "demo_user@demouser.com", username: "demo_user", password: "demouser"})
User.create!({name: "Max Huang", email: "max.huang@maxhuang.com", username: "maxhuang88", password: "password"})
User.create!({name: "Cynthia Huang", email: "cynthiahuang@cymthia.com", username: "cynthiamhuang", password: "password"})
User.create!({name: "Angie Lin", email: "angielovesdesserts@dessert.com", username: "dessertsbyangie_", password: "password"})
User.create!({name: "Aspyn McDonald", email: "aspyn@mcdonald.com", username: "thruaspynslens", password: "password"})
User.create!({name: "Taylor Swift", email: "taytay@taylorswift.com", username: "taylorswift", password: "password"})
User.create!({name: "Hilary Duff", email: "hilary@hilaryduff.com", username: "hilaryduff", password: "password"})
User.create!({name: "Simu Liu", email: "simuliu@email.com", username: "simu.liu", password: "password"})

