class CreateUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :users do |t|
      t.string :username, null: false, index: { unique: true }
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false, index: { unique: true }
      t.string :password, null: false
      t.text :bio
      t.string :profile_picture
      t.string :role, null: false, default: 'user'
      t.string :status, null: false, default: 'active'
      t.datetime :last_login_at

      t.timestamps
    end
  end
end
