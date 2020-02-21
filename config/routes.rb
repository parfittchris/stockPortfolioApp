Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json} do
    resources :users, only: [:create, :show, :destroy]
    resources :stocks, only: [:create, :update, :destroy]
    resources :transactions, only: [:create, :index]
    resource :session, only: [:create, :destroy, :show]
  end

  get '/*path', to: 'react#index'
end
