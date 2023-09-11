Rails.application.routes.draw do
  devise_for :users
  get 'home/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  root "home#index"

  namespace :api do
    get "/users_by_emails" => "users_by_emails#show", as: :users_by_email
    resources :favourites, only: [:create, :destroy]
  end
end
