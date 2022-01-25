# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all

demo = User.create!({name: "Demo User", email: "demo_user@demouser.com", username: "demo_user", password: "demouser"})
max = User.create!({name: "Max Huang", email: "max.huang@maxhuang.com", username: "maxhuang88", password: "password"})

cynthia = User.new({name: "Cynthia Huang", email: "cynthiahuang@cynthia.com", username: "cynthiastummy", password: "password"})
cynthia_avatar = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/cynthia.jpg')
cynthia.avatar.attach(io: cynthia_avatar, filename: 'cynthia.jpg')
cynthia.save

josh = User.create!({name: "Josh Williams", email: "joshwilliams@email.com", username: "joshmwilliams", password: "password"})
aspyn = User.create!({name: "Aspyn McDonald", email: "aspynlovesdesserts@dessert.com", username: "dessertsbyaspyn_", password: "password"})
taylor = User.create!({name: "Taylor Swift", email: "taytay@taylorswift.com", username: "taylorswift", password: "password"})
hilary = User.create!({name: "Hilary Duff", email: "hilary@hilaryduff.com", username: "hilaryduff", password: "password"})
simu = User.create!({name: "Simu Liu", email: "simuliu@email.com", username: "simu.liu", password: "password"})
