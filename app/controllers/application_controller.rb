class ApplicationController < ActionController::Base
	# Prevent CSRF attacks by raising an exception.
	# For APIs, you may want to use :null_session instead.
	protect_from_forgery :with => :null_session, :if => Proc.new { |c| c.request.format == 'application/json' }

	after_filter :set_access_control_headers

	def handle_options_request
		head(:ok) if request.request_method == "OPTIONS"
	end

	def set_access_control_headers
		headers['Access-Control-Allow-Origin'] = '*'
		headers['Access-Control-Allow-Methods'] = 'GET, POST, PUT, DELETE, OPTIONS'
		headers['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'
	end
end
