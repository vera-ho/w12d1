Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do 
    resources :pokemon, only: [:create, :index, :show]
  end

#   Prefix Verb URI Pattern                                                                              Controller#Action
#   root GET  /                                                                                        static_pages#root
# api_pokemon_index GET  /api/pokemon(.:format)                                                                   api/pokemon#index {:format=>:json}
#        POST /api/pokemon(.:format)                                                                   api/pokemon#create {:format=>:json}
# api_pokemon GET  /api/pokemon/:id(.:format)                                                               api/pokemon#show {:format=>:json}
# rails_service_blob GET  /rails/active_storage/blobs/:signed_id/*filename(.:format)                               active_storage/blobs#show
# rails_blob_representation GET  /rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format) active_storage/representations#show
# rails_disk_service GET  /rails/active_storage/disk/:encoded_key/*filename(.:format)                              active_storage/disk#show
# update_rails_disk_service PUT  /rails/active_storage/disk/:encoded_token(.:format)                                      active_storage/disk#update
# rails_direct_uploads POST /rails/active_storage/direct_uploads(.:format)                                           active_storage/direct_uploads#create

end
