---
date: 2015-10-01
title: New version of adriantoine.com
slug: new-version-of-adriantoine-com
tags:
  - react
  - relay
  - graphql
  - bloql
---

This is just a quick article to celebrate the release of the new version of this website, adriantoine.com ! This one features a blog, a portfolio and a better structure of pages, but most of all it has been build with [React](https://facebook.github.io/react/) and [Relay](https://facebook.github.io/relay/)/[GraphQL](http://graphql.org/)!

bloql
-----

A few weeks ago, I have started getting into GraphQL, the new query language by Facebook and found it quite amazing. The setup is pretty straight forward (thanks to great tutorials like [Your First GraphQL Server](https://medium.com/@clayallsopp/your-first-graphql-server-3c766ab4f0a2)) and the features are quite cool, especially the way to structure queries which makes much more sense than classic Rest API (see [GraphQL home page](http://graphql.org/)).

I was actually so excited about it that I wanted to write blog posts about it, the only problem is that I didn't have any blog and my personal website was just a static website with a few pages to introduce myself. I didn't really like Jekyll, I had a few issues with it in the past and I'm not familiar with its Ruby environment. And that's where it all started, why not creating a blog engine powered by GraphQL? That's how [bloql](https://github.com/adriantoine/bloql) was born.

Bloql is a blog engine powered by Relay and GraphQL. Basically GraphQL provides an interface to query blog posts that are stored as markdown files in a specified directory and Relay allows you to use posts and posts lists as React components linked to GraphQL backend using websockets. It is currently in a very experimental phase and needs a lot of refactoring and I'll probably change the interface a hundred times again (needs unit tests as well...), once it's in a more stable state I will probably write some documentation and another article. :)

...and all the rest
--------------------

So bloql is definitely the main highlight of this website since I spent quite a lot of time working on it but once it became more or less usable, I had to build a whole website around my blog ;) Here are some hints about the technologies I have used.

### Javascript
[Bloql](https://github.com/adriantoine/bloql) only provides 2 Relay components, `PostList` and `Post`, all the rest has been built using [React](https://facebook.github.io/react/). I have implemented my own reusable component, I am also using [react-router](https://github.com/rackt/react-router) but I can't make it isomorphic for now because of a bug in Facebook internal libraries (see [Provide hooks for server-side rendering](https://github.com/facebook/relay/issues/136#issuecomment-142681224) and [Switch to isomorphic-fetch](https://github.com/facebook/fbjs/pull/61)), however the whole code is there, I only need to uncomment a few lines.

This website has also been coded in the [ES2015 way](https://babeljs.io/docs/learn-es2015/) using [Babel](https://babeljs.io/) to transpile.

### CSS
On the CSS side, I didn't want to use the classic SASS and went for [PostCSS](https://github.com/postcss/postcss) that I would define as a modular and pluggable CSS preprocessor where you would only load the features you need.

I also decided to use [Webpack CSS Loader](https://github.com/webpack/css-loader) in order to separate my code into independant modules. I wanted to use [CSS Modules](https://github.com/css-modules/css-modules) but I just couldn't make it work properly, it might come in another update.

### Build system
The build system needs a lot of refactoring. I am using [Webpack](https://webpack.github.io/) to load and compile everything but for now I'm having only one config but I would like to have dev and prod ones to make development quicker and I should also use [Webpack Dev Server](https://webpack.github.io/docs/webpack-dev-server.html) and [React Hot Loader](https://github.com/gaearon/react-hot-loader).

What's next?
------------
Well I guess I now have to write tutorials and articles about all those things I learnt recently :) and I will obviously keep on working on [bloql](https://github.com/adriantoine/bloql) and refactor this website progressively.

By the way, I am **available to hire** in **London, UK** as a **front-end developer**, contractor or permanent. :)
