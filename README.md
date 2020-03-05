# Wranger React app

A CRA project which automatically deploys to Cloudflare Workers with Github Actions. Sweet.

## Pre-requisites

You'll need a Cloudflare account with

- A workers domain set up
- The Workers Unlimited subsciption ($5/mo)

## Setup

The only necessary setup step is to enter your Cloudflare Workers account id in `wrangler.toml`:

```
name = "wrangler-react-app"
type = "webpack"
account_id = "YOUR-ACCOUNT-ID"
workers_dev = true
route = ""
zone_id = ""

[site]
bucket = "./build"
entry-point = "workers-site"
```

You can find this at https://dash.cloudflare.com > Workers