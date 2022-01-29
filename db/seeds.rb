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

aspyn = User.new({name: "Aspyn McDonald", email: "aspynlovesdesserts@dessert.com", username: "bakedbyaspyn", password: "password"})
aspyn_avatar = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/aspyn.jpg')
aspyn.avatar.attach(io: aspyn_avatar, filename: 'aspyn.jpg')
aspyn.save

taylor = User.new({name: "Taylor Swift", email: "taytay@taylorswift.com", username: "taylorswift", password: "password"})
taylor_avatar = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/taylor.jpg')
taylor.avatar.attach(io: taylor_avatar, filename: 'taylor.jpg')
taylor.save

hilary = User.new({name: "Hilary Duff", email: "hilary@hilaryduff.com", username: "hilaryduff", password: "password"})
hilary_avatar = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/hilaryDuff.jpg')
hilary.avatar.attach(io: hilary_avatar, filename: 'hilary.jpg')
hilary.save

simu = User.new({name: "Simu Liu", email: "simuliu@email.com", username: "simu.liu", password: "password"})
simu_avatar = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/simu.jpg')
simu.avatar.attach(io: simu_avatar, filename: 'simu.jpg')
simu.save

Post.destroy_all

demo_post1 = Post.new({user_id: demo.id, caption: "LA sunsets are unreal..."})
demo_post1_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/laSunset.jpg')
demo_post1.photo.attach(io: demo_post1_photo, filename: 'sunset.jpg')
demo_post1.save 

demo_post2 = Post.new({user_id: demo.id, caption: "The cutest pup ever! Puppy's first time in the snow :)"})
demo_post2_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/puppy.jpg')
demo_post2.photo.attach(io: demo_post2_photo, filename: 'puppy.jpg')
demo_post2.save

max_post1 = Post.new({user_id: max.id, caption: "Sunday hike views"})
max_post1_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/forest.jpg')
max_post1.photo.attach(io: max_post1_photo, filename: 'forest.jpg')
max_post1.save

max_post2 = Post.new({user_id: max.id, caption: "Home is where the heart is"})
max_post2_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/taiwan.jpg')
max_post2.photo.attach(io: max_post2_photo, filename: 'taiwan.jpg')
max_post2.save

cynthia_post1 = Post.new({user_id: cynthia.id, caption: "Best boba ever!"})
cynthia_post1_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/boba.jpg')
cynthia_post1.photo.attach(io: cynthia_post1_photo, filename: 'boba.jpg')
cynthia_post1.save

cynthia_post2 = Post.new({user_id: cynthia.id, caption: "Mouthwatering..."})
cynthia_post2_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/chickenSandwich.jpg')
cynthia_post2.photo.attach(io: cynthia_post2_photo, filename: 'chicken.jpg')
cynthia_post2.save

cynthia_post3 = Post.new({user_id: cynthia.id, caption: "Best days are Taco Tuesdays!"})
cynthia_post3_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/taco.jpg')
cynthia_post3.photo.attach(io: cynthia_post3_photo, filename: 'taco.jpg')
cynthia_post3.save

cynthia_post4 = Post.new({user_id: cynthia.id, caption: "What's your favorite dessert? Mine has to be this.."})
cynthia_post4_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/meet_fresh.jpg')
cynthia_post4.photo.attach(io: cynthia_post4_photo, filename: 'meetfresh.jpg')
cynthia_post4.save

josh_post1 = Post.new({user_id: josh.id, caption: "Desk setup for 2022"})
josh_post1_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/desk.jpg')
josh_post1.photo.attach(io: josh_post1_photo, filename: 'desk.jpg')
josh_post1.save


josh_post2 = Post.new({user_id: josh.id, caption: "My Sunday view"})
josh_post2_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/cafeShop.jpg')
josh_post2.photo.attach(io: josh_post2_photo, filename: 'cafe.jpg')
josh_post2.save

aspyn_post1 = Post.new({user_id: aspyn.id, caption: "Anyone care for some freshly baked red velvet cookies?"})
aspyn_post1_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/redVelvetCookies.jpg')
aspyn_post1.photo.attach(io: aspyn_post1_photo, filename: 'cookies.jpg')
aspyn_post1.save

aspyn_post2 = Post.new({user_id: aspyn.id, caption: "Taste test! Going to try and make these myself too"})
aspyn_post2_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/macaron.jpg')
aspyn_post2.photo.attach(io: aspyn_post2_photo, filename: 'macaron.jpg')
aspyn_post2.save

taylor_post1 = Post.new({user_id: taylor.id, caption: "SF... you were amazing last night!"})
taylor_post1_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/concert.jpg')
taylor_post1.photo.attach(io: taylor_post1_photo, filename: 'concert.jpg')
taylor_post1.save

taylor_post2 = Post.new({user_id: taylor.id, caption: "I'll be back Florida!"})
taylor_post2_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/airplaneView.jpg')
taylor_post2.photo.attach(io: taylor_post2_photo, filename: 'airplane.jpg')
taylor_post2.save


hilary_post1 = Post.new({user_id: hilary.id, caption: "A cozy Sunday morning in with the kids"})
hilary_post1_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/coffeeBookLayout.jpg')
hilary_post1.photo.attach(io: hilary_post1_photo, filename: 'coffeeAndBook.jpg')
hilary_post1.save

hilary_post2 = Post.new({user_id: hilary.id, caption: "Reminds me of my Lizzie McGuire days.."})
hilary_post2_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/disney.jpg')
hilary_post2.photo.attach(io: hilary_post2_photo, filename: 'disney.jpg')
hilary_post2.save


# simu_post1 = 
# simu_post2 = 