Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/' => 'home#index'
  get '/index_2' => 'home#index_2'
  get '/webpack' => 'home#webpack'
  resources :favorite
end
