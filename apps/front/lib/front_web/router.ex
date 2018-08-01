defmodule FrontWeb.Router do
  use FrontWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", FrontWeb do
    pipe_through :api
  end
end
