# Wranger React app

A CRA project which automatically deploys to Cloudflare Workers with Github Actions. Sweet.

## Pre-requisites

You'll need a Cloudflare account with

- A workers domain set up
- The Workers Unlimited subsciption ($5/mo)

## Setup

First, fork the repository.

#### Set up your Cloudflare account

Then, get your Cloudflare Workers account id (you can find this at https://dash.cloudflare.com > Workers) and add it in `wrangler.toml`:

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

You can also customise the `name = "wrangler-react-app"` - this will be the subdomain under which your app will be published.

#### Create a new API Token

Next, go to https://dash.cloudflare.com/profile/api-tokens > Create Token, and create a token:

- Give your token a name (i.e. Github Actions)
- Choose start with template
- Select the "Edit Cloudflare Workers" template
- Account Resources > Include > {your account}
- Zone Resources > Include > All zones from account > {your account}

Once done, copy your new API Token and navigate to your repository > Settings > Secrets and add a new secret:

- Name: CF_API_TOKEN
- Value: the-token-you-just-copied

That's it! Now, just push a new commit into `master` and you'll find your React app deployed at `{app-name}.{your-worker-domain}.workers.dev`