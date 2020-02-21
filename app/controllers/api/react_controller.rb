class ReactController < ActionController::Base
  def index
        puts'test'
      render :file => 'frontend/index.html', :layout => false
  end
end