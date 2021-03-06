Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do 
    resources :users, only: [:create, :show, :index]
    resources :posts, only: [:index, :create, :show, :destroy, :update]
    resources :likes, only: [:index, :create, :destroy]
    resources :comments, only: [:index, :create, :destroy]
    resource :session, only: [:create, :destroy]
  end
end
