# Wranger React app

A CRA project which automatically deploys to Cloudflare Workers with Github Actions. Sweet.

## Pre-requisites

You'll need a Cloudflare account with

- A workers domain set up
- The Workers Unlimited subsciption ($5/mo)

## Setup

First, fork the repository.

#### Set your app name 

Your Cloudflare workers domain will be of the format `{your-worker-domain}.workers.dev`. When you publish an app on a Worker,
it will be published on a subdomain of that - `wrangler-react-app.{your-worker-domain}.workers.dev` by default.

You can change this by editing `wrangler.toml` and changing the `name` property.

#### Get your Account ID and create a new API Token

To get your account ID:

- Go to https://dash.cloudflare.com > Workers
- Copy your account ID

To create a new API Token:

- Go to https://dash.cloudflare.com/profile/api-tokens > Create Token
- Give your token a name (i.e. Github Actions)
- Choose start with template
- Select the "Edit Cloudflare Workers" template
- Account Resources > Include > {your account}
- Zone Resources > Include > All zones from account > {your account}

Once done, navigate to your GitHub repository > Settings > Secrets and add the following secrets:

```
- Name: CF_API_TOKEN
- Value: your-api-token

- Name: CF_ACCOUNT_ID
- Value: your-account-id
```


That's it! Now, just push a new commit into `master` and you'll find your React app deployed at `{app-name}.{your-worker-domain}.workers.dev`