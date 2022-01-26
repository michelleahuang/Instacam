# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all

demo = User.new({name: "Demo User", email: "demo_user@demouser.com", username: "demo_user", password: "demouser"})
demo_avatar = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/demo.jpg')
demo.avatar.attach(io: demo_avatar, filename: 'demo.jpg')
demo.save

max = User.new({name: "Max Huang", email: "max.huang@maxhuang.com", username: "maxhuang88", password: "password"})
max_avatar = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/max.jpg')
max.avatar.attach(io: max_avatar, filename: 'max.jpg')
max.save

cynthia = User.new({name: "Cynthia Huang", email: "cynthiahuang@cynthia.com", username: "cynthiastummy", password: "password"})
cynthia_avatar = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/cynthia.jpg')
cynthia.avatar.attach(io: cynthia_avatar, filename: 'cynthia.jpg')
cynthia.save

josh = User.new({name: "Josh Williams", email: "joshwilliams@email.com", username: "joshmwilliams", password: "password"})
josh_avatar = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/josh.jpg')
josh.avatar.attach(io: josh_avatar, filename: 'josh.jpg')
josh.save

aspyn = User.new({name: "Aspyn McDonald", email: "aspynlovesdesserts@dessert.com", username: "dessertsbyaspyn_", password: "password"})
aspyn_avatar = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/aspyn.jpg')
aspyn.avatar.attach(io: aspyn_avatar, filename: 'aspyn.jpg')
aspyn.save

taylor = User.new({name: "Taylor Swift", email: "taytay@taylorswift.com", username: "taylorswift", password: "password"})
taylor_avatar = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/taylor.jpg')
taylor.avatar.attach(io: taylor_avatar, filename: 'taylor.jpg')
taylor.save

hilary = User.new({name: "Hilary Duff", email: "hilary@hilaryduff.com", username: "hilaryduff", password: "password"})
hilary_avatar = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/hilary.jpg')
hilary.avatar.attach(io: hilary_avatar, filename: 'hilary.jpg')
hilary.save

simu = User.new({name: "Simu Liu", email: "simuliu@email.com", username: "simu.liu", password: "password"})
simu_avatar = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/simu.jpg')
simu.avatar.attach(io: simu_avatar, filename: 'simu.jpg')
simu.save
