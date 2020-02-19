# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Stock.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users');
ActiveRecord::Base.connection.reset_pk_sequence!('stocks');



u1 = User.create(username: 'demoUser', email: 'demoUser@email.com', password:'password123', money: 5000.00);
u2 = User.create(username: 'parfittChris', email: 'parfittChris@email.com', password:'password123', money: 5000.00);

s1 = Stock.create(name: 'ATF', quantity: 10, user_id: 1);
s2 = Stock.create(name: 'MMY', quantity: 4, user_id: 1);
s3 = Stock.create(name: 'CMP', quantity: 50, user_id: 1);
s4 = Stock.create(name: 'MMY', quantity: 50, user_id: 2);
s5 = Stock.create(name: 'XIX', quantity: 50, user_id: 2);
s6 = Stock.create(name: 'YVA', quantity: 50, user_id: 2);
s7 = Stock.create(name: 'CMP', quantity: 50, user_id: 2);
s8 = Stock.create(name: 'JSX', quantity: 50, user_id: 2);
s9 = Stock.create(name: 'LOL', quantity: 50, user_id: 2);
s10 = Stock.create(name: 'TTY', quantity: 50, user_id: 2);
s11 = Stock.create(name: 'BRB', quantity: 50, user_id: 2);
s12 = Stock.create(name: 'SSS', quantity: 50, user_id: 2);
s13 = Stock.create(name: 'SOS', quantity: 50, user_id: 2);
s14 = Stock.create(name: 'WWE', quantity: 50, user_id: 2);
s15 = Stock.create(name: 'CNN', quantity: 50, user_id: 2);
s16 = Stock.create(name: 'TNT', quantity: 50, user_id: 2);
s17 = Stock.create(name: 'NBC', quantity: 50, user_id: 2);

