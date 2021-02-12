class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false, unique: true
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :username, null: false
      t.string :type, null: false
      t.string :cardowner, null: false
      t.string :cardnumber, null: false
      t.string :expirydate, null: false 
    end
  end
end
