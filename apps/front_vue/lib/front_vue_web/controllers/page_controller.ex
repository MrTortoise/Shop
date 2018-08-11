defmodule FrontVueWeb.PageController do
  use FrontVueWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
