# Cloudflare Workers <3 Create React App

Cloudflare Workers is a serverless platform which offers a [very cheap and highly scalable](https://workers.cloudflare.com/) way to serve your React application and run other serverless code. This is a fresh CRA project which automatically deploys to Cloudflare Workers with Github Actions, which you can fork and set up in a matter of minutes.

This setup costs \$5/mo for **10 million requests per month.**

## Pre-requisites

You'll need a [Cloudflare Workers account](https://dash.cloudflare.com/sign-up/workers) with

-   A workers domain set up
-   The Workers Unlimited subsciption (\$5/mo)

## Setup

To start your own project based on this template, just click "Use this template" or visit this link: https://github.com/lappalj4/cloudflare-worker-cra/generate

#### Set your app name

First, open up `wrangler.toml` and change the `name` property - this will be the subdomain that your app is published on.

Your Cloudflare workers domain will be of the format `{your-worker-domain}.workers.dev`. When you publish an app on a Worker,
it will be published on a subdomain corresponding to your app name - `cloudflare-worker-cra.{your-worker-domain}.workers.dev` by default.

#### Get your Account ID and create a new API Token

To get your account ID:

-   Go to https://dash.cloudflare.com > Workers
-   Copy your account ID

To create a new API Token:

-   Go to https://dash.cloudflare.com/profile/api-tokens > Create Token
-   Give your token a name (i.e. Github Actions)
-   Choose start with template
-   Select the "Edit Cloudflare Workers" template
-   Account Resources > Include > {your account}
-   Zone Resources > Include > All zones from account > {your account}

Once done, navigate to your GitHub repository > Settings > Secrets and add the following secrets:

```
- Name: CF_API_TOKEN
- Value: your-api-token

- Name: CF_ACCOUNT_ID
- Value: your-account-id
```

PS: Your account id isn't really a secret and could be shared freely, but I feel it's just more convenient to store this
configuration within the GitHub secrets instead of the repository code.

That's it! Now, just push a new commit into `master` and you'll find your React app deployed at `{app-name}.{your-worker-domain}.workers.dev`

