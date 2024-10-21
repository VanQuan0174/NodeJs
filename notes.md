# Ghi Chú Quan Trọng

. Tạo model:
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string

. tạo migrate
npx sequelize-cli migration:generate --name create-posts-table

.chạy migrate
npx sequelize-cli db:migrate 

. Tạo Seeder: npx sequelize-cli seed:generate --name demo-user
