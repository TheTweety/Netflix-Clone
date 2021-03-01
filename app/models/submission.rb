# == Schema Information
#
# Table name: submission 
#  id              :bigint           not null, primary key
#  email           :string           not null
#  phone           :string           not null
#  movieTitle      :string           not null
#  movieDescription :string           not null
#  producer        :string           not null
#  director        :string           not null
#  movieURL        :string           not null 
#

class Submission < ApplicationRecord
     
    attr_reader :email,:phone,:movieTitle,:movieDescription,:producer,:director,:movieURL 

    def self.find_by_credentials(movieTitle) 
        submission = Submission.find_by(movieTitle: title)
        return nil if submission.nil?
        submission
    end
end
