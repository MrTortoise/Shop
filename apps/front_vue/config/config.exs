# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :front_vue,
  namespace: FrontVue

# Configures the endpoint
config :front_vue, FrontVueWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "eko8bfpys0b0lLmEioLa3EFp64sFZsboSozkiRS/qHQvMVm/jlJq6meVGARMYWvr",
  render_errors: [view: FrontVueWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: FrontVue.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
