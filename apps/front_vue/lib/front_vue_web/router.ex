defmodule FrontVueWeb.Router do
  use FrontVueWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", FrontVueWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", FrontVueWeb do
  #   pipe_through :api
  # end

  forward "/graphql",
    Absinthe.Plug,
    schema: FrontVueWeb.Schema

# For the GraphiQL interactive interface, a must-have for happy frontend devs.
  forward "/graphiql",
    Absinthe.Plug.GraphiQL,
    schema: FrontVueWeb.Schema,
    interface: :simple

end
