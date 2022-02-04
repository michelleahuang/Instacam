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
demo_avatar = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/demoAvatar.jpg')
demo.avatar.attach(io: demo_avatar, filename: 'demo.jpg')
demo.save

max = User.new({name: "Max Lin", email: "max.lin@maxlin.com", username: "max.lin88", password: "password"})
max_avatar = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/maxAvatar.jpg')
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

hailey = User.new({name: "Hailey Bieber", email: "hailey@haileybieber.com", username: "haileybieber", password: "password"})
hailey_avatar = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/hailey.jpg')
hailey.avatar.attach(io: hailey_avatar, filename: 'hailey.jpg')
hailey.save

simu = User.new({name: "Simu Liu", email: "simuliu@email.com", username: "simuliu", password: "password"})
simu_avatar = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/simu.jpg')
simu.avatar.attach(io: simu_avatar, filename: 'simu.jpg')
simu.save

Post.destroy_all

demo_post1 = Post.new({user_id: demo.id, caption: "LA sunsets are unreal 😍"})
demo_post1_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/laSunset.jpg')
demo_post1.photo.attach(io: demo_post1_photo, filename: 'sunset.jpg')
demo_post1.save 

demo_post2 = Post.new({user_id: demo.id, caption: "The cutest pup ever! Puppy's first time in the snow ⛄❄️"})
demo_post2_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/puppy.jpg')
demo_post2.photo.attach(io: demo_post2_photo, filename: 'puppy.jpg')
demo_post2.save

demo_post3 = Post.new({user_id: demo.id, caption: "What I like to call my perfect Saturday night"})
demo_post3_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/fireplace.jpg')
demo_post3.photo.attach(io: demo_post3_photo, filename: 'fireplace.jpg')
demo_post3.save

demo_post4 = Post.new({user_id: demo.id, caption: "Had myself the cutest little picnic date!"})
demo_post4_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/picnic.jpg')
demo_post4.photo.attach(io: demo_post4_photo, filename: 'picnic.jpg')
demo_post4.save

demo_post5 = Post.new({user_id: demo.id, caption: "HAPPY BDAY ANNIE!! To another 10 years of friendship 🥳🎉"})
demo_post5_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/birthday.jpg')
demo_post5.photo.attach(io: demo_post5_photo, filename: 'birthday.jpg')
demo_post5.save

max_post1 = Post.new({user_id: max.id, caption: "Sunday hike views"})
max_post1_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/forest.jpg')
max_post1.photo.attach(io: max_post1_photo, filename: 'forest.jpg')
max_post1.save

max_post2 = Post.new({user_id: max.id, caption: "Home is where the heart is 🏠"})
max_post2_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/taiwan.jpg')
max_post2.photo.attach(io: max_post2_photo, filename: 'taiwan.jpg')
max_post2.save

max_post3 = Post.new({user_id: max.id, caption: "Talented coffee art"})
max_post3_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/coffee.jpg')
max_post3.photo.attach(io: max_post3_photo, filename: 'coffee.jpg')
max_post3.save

cynthia_post1 = Post.new({user_id: cynthia.id, caption: "Best boba ever!"})
cynthia_post1_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/boba.jpg')
cynthia_post1.photo.attach(io: cynthia_post1_photo, filename: 'boba.jpg')
cynthia_post1.save

cynthia_post2 = Post.new({user_id: cynthia.id, caption: "Mouthwatering...🤤"})
cynthia_post2_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/chickenSandwich.jpg')
cynthia_post2.photo.attach(io: cynthia_post2_photo, filename: 'chicken.jpg')
cynthia_post2.save

cynthia_post3 = Post.new({user_id: cynthia.id, caption: "Best days are Taco Tuesdays!"})
cynthia_post3_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/tacos.jpg')
cynthia_post3.photo.attach(io: cynthia_post3_photo, filename: 'tacos.jpg')
cynthia_post3.save

cynthia_post4 = Post.new({user_id: cynthia.id, caption: "What's your favorite dessert? Mine has to be this.."})
cynthia_post4_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/meet_fresh.jpg')
cynthia_post4.photo.attach(io: cynthia_post4_photo, filename: 'meetfresh.jpg')
cynthia_post4.save

cynthia_post5 = Post.new({user_id: cynthia.id, caption: "Currently thinking over last week's pasta dish..."})
cynthia_post5_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/pasta.jpg')
cynthia_post5.photo.attach(io: cynthia_post5_photo, filename: 'pasta.jpg')
cynthia_post5.save

cynthia_post6 = Post.new({user_id: cynthia.id, caption: "Mondays aren't so bad with some avo toast and coffee!"})
cynthia_post6_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/bluestone.jpg')
cynthia_post6.photo.attach(io: cynthia_post6_photo, filename: 'bluestone.jpg')
cynthia_post6.save

cynthia_post7 = Post.new({user_id: cynthia.id, caption: "Purple sweet potato ice cream and tiramisu... yum!"})
cynthia_post7_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/ube.jpg')
cynthia_post7.photo.attach(io: cynthia_post7_photo, filename: 'ube.jpg')
cynthia_post7.save

josh_post1 = Post.new({user_id: josh.id, caption: "Desk setup for 2022"})
josh_post1_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/desk.jpg')
josh_post1.photo.attach(io: josh_post1_photo, filename: 'desk.jpg')
josh_post1.save

josh_post2 = Post.new({user_id: josh.id, caption: "My Sunday view"})
josh_post2_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/cafeShop.jpg')
josh_post2.photo.attach(io: josh_post2_photo, filename: 'cafe.jpg')
josh_post2.save

aspyn_post1 = Post.new({user_id: aspyn.id, caption: "Anyone care for some red velvet cookies? 🍪"})
aspyn_post1_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/redVelvetCookies.jpg')
aspyn_post1.photo.attach(io: aspyn_post1_photo, filename: 'cookies.jpg')
aspyn_post1.save

aspyn_post2 = Post.new({user_id: aspyn.id, caption: "Taste test! Going to try and make these myself too"})
aspyn_post2_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/macaron.jpg')
aspyn_post2.photo.attach(io: aspyn_post2_photo, filename: 'macaron.jpg')
aspyn_post2.save

aspyn_post3 = Post.new({user_id: aspyn.id, caption: "My most colorful creation yet!"})
aspyn_post3_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/cupcakes.jpg')
aspyn_post3.photo.attach(io: aspyn_post3_photo, filename: 'cupcakes.jpg')
aspyn_post3.save

taylor_post1 = Post.new({user_id: taylor.id, caption: "SF... you were amazing last night!"})
taylor_post1_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/concert.jpg')
taylor_post1.photo.attach(io: taylor_post1_photo, filename: 'concert.jpg')
taylor_post1.save

taylor_post2 = Post.new({user_id: taylor.id, caption: "I'll be back Florida!"})
taylor_post2_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/airplaneView.jpg')
taylor_post2.photo.attach(io: taylor_post2_photo, filename: 'airplane.jpg')
taylor_post2.save

hailey_post1 = Post.new({user_id: hailey.id, caption: "Sunday mornings"})
hailey_post1_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/coffeeBookLayout.jpg')
hailey_post1.photo.attach(io: hailey_post1_photo, filename: 'coffeeAndBook.jpg')
hailey_post1.save

hailey_post2 = Post.new({user_id: hailey.id, caption: "Honored to be invited... what a show!"})
hailey_post2_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/runway.jpg')
hailey_post2.photo.attach(io: hailey_post2_photo, filename: 'runway.jpg')
hailey_post2.save

hailey_post3 = Post.new({user_id: hailey.id, caption: "🤍🤍 happiest place on Earth"})
hailey_post3_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/disney.jpg')
hailey_post3.photo.attach(io: hailey_post3_photo, filename: 'disney.jpg')
hailey_post3.save

hailey_post4 = Post.new({user_id: hailey.id, caption: "So proud of you Justin ❤️"})
hailey_post4_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/hubby.jpg')
hailey_post4.photo.attach(io: hailey_post4_photo, filename: 'hubby.jpg')
hailey_post4.save

simu_post1 = Post.new({user_id: simu.id, caption: "Feeling so blessed... WOW!! Shang Chi out in theaters now!"})
simu_post1_photo = open('https://aa-instacam-seeds.s3.us-west-1.amazonaws.com/theater.jpg')
simu_post1.photo.attach(io: simu_post1_photo, filename: 'theater.jpg')
simu_post1.save


Like.destroy_all

like1 = Like.create!(user_id: max.id, post_id: demo_post1.id)
like2 = Like.create!(user_id: cynthia.id, post_id: demo_post1.id)
like3 = Like.create!(user_id: josh.id, post_id: demo_post1.id)

like4 = Like.create!(user_id: max.id, post_id: demo_post2.id)
like5 = Like.create!(user_id: cynthia.id, post_id: demo_post2.id)
like6 = Like.create!(user_id: josh.id, post_id: demo_post2.id)

like7 = Like.create!(user_id: max.id, post_id: demo_post3.id)
like8 = Like.create!(user_id: cynthia.id, post_id: demo_post3.id)
like9 = Like.create!(user_id: josh.id, post_id: demo_post3.id)

like10 = Like.create!(user_id: max.id, post_id: demo_post4.id)
like11 = Like.create!(user_id: cynthia.id, post_id: demo_post4.id)
like12 = Like.create!(user_id: josh.id, post_id: demo_post4.id)
like13 = Like.create!(user_id: aspyn.id, post_id: demo_post4.id)

like14 = Like.create!(user_id: max.id, post_id: demo_post5.id)
like15 = Like.create!(user_id: cynthia.id, post_id: demo_post5.id)
like16 = Like.create!(user_id: josh.id, post_id: demo_post5.id)
like17 = Like.create!(user_id: aspyn.id, post_id: demo_post5.id)

like18 = Like.create!(user_id: demo.id, post_id: max_post1.id)
like19 = Like.create!(user_id: josh.id, post_id: max_post1.id)
like20 = Like.create!(user_id: cynthia.id, post_id: max_post1.id)

like21 = Like.create!(user_id: demo.id, post_id: max_post2.id)
like22 = Like.create!(user_id: josh.id, post_id: max_post2.id)
like23 = Like.create!(user_id: cynthia.id, post_id: max_post2.id)
like24 = Like.create!(user_id: simu.id, post_id: max_post2.id)

like25 = Like.create!(user_id: josh.id, post_id: max_post3.id)
like26 = Like.create!(user_id: cynthia.id, post_id: max_post3.id)

like27 = Like.create!(user_id: demo.id, post_id: cynthia_post1.id)
like28 = Like.create!(user_id: max.id, post_id: cynthia_post1.id)
like29 = Like.create!(user_id: aspyn.id, post_id: cynthia_post1.id)
like30 = Like.create!(user_id: josh.id, post_id: cynthia_post1.id)

like31 = Like.create!(user_id: max.id, post_id: cynthia_post2.id)

like32 = Like.create!(user_id: aspyn.id, post_id: cynthia_post3.id)
like33 = Like.create!(user_id: josh.id, post_id: cynthia_post3.id)



Comment.destroy_all 
comment1 = Comment.create!(user_id: max.id, post_id: demo_post1.id, body: "Unreal! View looks great 😍")

comment2 = Comment.create!(user_id: max.id, post_id: demo_post2.id, body: "Very cute.")
comment3 = Comment.create!(user_id: cynthia.id, post_id: demo_post2.id, body: "The little bits of snow on her nose 😩🤍")
comment4 = Comment.create!(user_id: josh.id, post_id: demo_post2.id, body: "So smol")

comment5 = Comment.create!(user_id: max.id, post_id: demo_post4.id, body: "Looks like lots of fun! Today was a great day for a picnic.")
comment6 = Comment.create!(user_id: cynthia.id, post_id: demo_post4.id, body: "SO AESTHETIC! I need to do this with my friends too!")

comment7 = Comment.create!(user_id: max.id, post_id: demo_post5.id, body: "Happy birthday Annie!🎊")
comment8 = Comment.create!(user_id: cynthia.id, post_id: demo_post5.id, body: "Best friends forever!")
comment9 = Comment.create!(user_id: aspyn.id, post_id: demo_post5.id, body: "Hope you guys love the cake!")

comment10 = Comment.create!(user_id: demo.id, post_id: max_post1.id, body: "Wow, looks like a relaxing time!")
comment11 = Comment.create!(user_id: josh.id, post_id: max_post1.id, body: "I've hiked this trail before.. it's one of my favorites!")

comment12 = Comment.create!(user_id: demo.id, post_id: max_post2.id, body: "The food there is the best!")
comment13 = Comment.create!(user_id: cynthia.id, post_id: max_post2.id, body: "Taiwan is next on my list to visit ✈️")
comment14 = Comment.create!(user_id: josh.id, post_id: max_post2.id, body: "Such a good shot!")

comment15 = Comment.create!(user_id: demo.id, post_id: max_post3.id, body: "☕")
comment16 = Comment.create!(user_id: josh.id, post_id: max_post3.id, body: "One of my favorite coffee shops!")

comment17 = Comment.create!(user_id: demo.id, post_id: cynthia_post1.id, body: "LOVE BOBA")
comment18 = Comment.create!(user_id: max.id, post_id: cynthia_post1.id, body: "Did you know they started in Taiwan?")
comment19 = Comment.create!(user_id: aspyn.id, post_id: cynthia_post1.id, body: "I need to try!")

comment20 = Comment.create!(user_id: demo.id, post_id: cynthia_post3.id, body: "Second!")
comment21 = Comment.create!(user_id: max.id, post_id: cynthia_post3.id, body: "Looks delicious.")
comment22 = Comment.create!(user_id: josh.id, post_id: cynthia_post3.id, body: "Ooo, I have to try next time...")
