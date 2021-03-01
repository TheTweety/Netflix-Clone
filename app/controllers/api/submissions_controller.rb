class Api::SubmissionsController < ApplicationController
    def create
        @submission = Submission.new(submission_params)
        if @submission.save 
            render 'api/submission/show'
        else
            render json: @submission.errors.full_messages, status: 422
        end
    end

    def show
        @submission = Submission.find_by(params[:id])
        render 'api/submission/show'
    end

    private
    def submission_params
        params.require(:submission).permit(:email, :phone, :movieTitle, :movieDescription, :producer, :director, :movieURL)
    end
end