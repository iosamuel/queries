# Code Challenge

> Create, design and implement a web-based application capable of running SQL queries and displaying the results of said query. The application must include a space which accepts SQL queries in the form of user inputs, then runs the given query, and displays the result within the application..

## Overview

For this project we are using **Vue 3** and **Tailwind**.
- The idea is to have an input field with some *typeahead* functionallity.
- Meaning we will try to give the user the possible queries he may want to enter at any given time on the **Input**
  - The algorithm is smart enough to know that if you have put the first word (for example `select`), you now need a second part (like `count(*)`) of an SQL query and so on, so it gives you new typeahead options that you can simply select with your keyboard while writing 😄.
- As well as a pre-selected set of options in a **Select** field which will simply auto-complete the Input, since we want the **Input** to be the central part of the application.
- For this we used the third party library `vue3-simple-typeahead` as we want some help to not design from zero the typeahead input widget.
- Load time: **0.4s** in total, using **Lighthouse** to measure performance and overall load-time.
  - Watching its stats for performance, specially watching metrics for **FCP**, **LCP** as well as **Time to Interactive**, which are the more critical ones to score high in Lighthouse and make google know that we have a performant site.
  - Not taking really into account **Total Blocking Time** which is **0ms**, because we are in a *Client-Side* application, so the site in theory is not really blocked.
  - Score for performance was a nice **100**
- Optimisations: 
  - The only optimisation needed for this project was a paginated request to the endpoint due to the possibility of it having more than 1000 rows.
  - However there is no pagination functionallity as that may have been an overkill for the purpose of this challenge.
  - When we make requests to any endpoint we are always triggering a **Loading** animation to let the user know we are fetching some data.
  - Also, every component, composable and service script is imported so that we always have tree-shaked modules delivered to the browser.


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
