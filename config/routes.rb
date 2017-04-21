Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :create, :show, :update]
    resources :reviews, only: [:index, :create, :show, :update]
  end
end
