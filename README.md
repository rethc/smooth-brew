<h1 align="center">
  Coffee Shop Webstite - Smooth Brew
</h1>

<p align="center">
  <a href="https://github.com/rethc/smooth-brew/blob/master/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="@rethc/smooth-brew is released under the MIT license." />
  </a>
<img src="https://img.shields.io/badge/version-2.5-yellowgreen" alt="@rethc/smooth-brew is on version 2.5" />
  <img src="https://img.shields.io/github/last-commit/rethc/smooth-brew" alt="@rethc/smooth-brew last commit">
  <a href="https://twitter.com/intent/follow?screen_name=ChesdaReth">
    <img src="https://img.shields.io/twitter/follow/ChesdaReth?label=ChesdaReth&style=social" alt="Follow @ChesdaReth" />
  </a>
</p>

Smooth brew is a responsive starter theme for an online coffee shop, powered by [Gatsby v2](https://www.gatsbyjs.org).

<img height="800" alt="smooth-brew" src="https://rethc.github.io/reth.nz/smooth-brew.png">

### [Demo website](https://smooth-brew.netlify.app)

## ✨ Features

- Landing page with customizable About, Contact, Menu, and Product components.
- The menu is a list of beverages offered to customers and the prices.
- The product is a list of coffee products that is being offered for online purchase.
- The about us page helps the coffee company make a good first impression
- The contact us component allows visitors to leave a message.
- Google Analytics
- Responsive and mobile ready

## ⚛️ Built using

- Gatsby v2
- Material UI
- Contentful Headless CMS
- Deployed on Netlify
- Snipcart eCommerce integration
- Getform

## 🚀 Getting Started

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/rethc/smooth-brew)

1. **Create a Gatsby site.**

Use the Gatsby CLI to create a new site, specifying this project. If you don't have the CLI installed already, see [Gastby instructions](https://www.gatsbyjs.org/tutorial/part-zero/#using-the-gatsby-cli).

```sh
gatsby new YOUR-PROJECT-NAME https://github.com/rethc/smooth-brew
```

2. **Start developing.**

Navigate into your new site's directory, install the npm modules, and start the gatsby development server.

```sh
cd YOUR-PROJECT-NAME
npm install
gatsby develop
```

3. **Open the code in your favourite editor and start customizing!**

Your site is now running at `http://localhost:8000`!

_Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

## 💼 Configuration

1. **Set up Contentful**

Go to [Contentful](https://www.contentful.com/) and create a free account. Once you sign in, go to your Content Models and create your menu and products.

Example:

<img height="400" alt="smooth-brew" src="http://iforce.co.nz/i/gvrljcpg.vf3.png">

<img height="400" alt="smooth-brew" src="http://iforce.co.nz/i/grsmbg5z.eqd.png">

In your `gatsby-config.js` file, add your Contenful API to the `CONTENTFUL_ACCESS_TOKEN` and `CONTENTFUL_SPACE_ID` field in the environment variables. Learn more in the [Gatsby documentation](https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/).

2. **Set up Snipcart**

Go to [Snipcart](https://snipcart.com/) and create a free account. Once you sign in, go to your Dashboard, API keys submenu and copy your Public Test API key.

In your `gatsby-config.js` file, add the your Snipcart API to the `GATSBY_SNIPCART_APIKEY` field in the environment variables.

3. **Set up Getform**

Go to [Getform](https://getform.io/) and create a free account.

In your `Contact.js` file, replace the line `<form action="URL" method="POST">` with the URL that is linked to your Getform account.

## 📝 License

Licensed under the [MIT License](https://github.com/rethc/smooth-brew/blob/master/LICENSE).
