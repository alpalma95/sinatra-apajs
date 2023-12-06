require 'sinatra'

get '/' do
  liquid :index
end

get '/contact' do
  ctx = {
    :name => 'world'
  }
  liquid :contact, :locals => ctx
end
