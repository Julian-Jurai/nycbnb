Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only:[:index, :create, :show]
    resources :homes, only:[:index, :create, :show]

    resources :homes, only:[] do
      resources :bookings, only: [:index]
      resources :reviews, only: [:create, :destroy, :update, :index]
    end

    resources :users, only:[] do
      resources :bookings, only: [:index]
    end

    resource :bookings, only: [:create, :show, :destroy]

    resource :session, only:[:create, :destroy]
  end


end
