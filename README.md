# Arion-Website
Website for Team Arion SAE-Supra

## Website Layout :

  * ### Inception
      * Inspiration and Motivation
      * Birth of Team Arion
      * The Journey

  * ### Team
      * Team Rudra
      * Team Arion

  * ### Our Sponsors
      * Platinum Sponsors
      * Gold Sponsors
      * Silver Sponsors
      * Bronze Sponsors

  * ### Gallery

## Program Details :

* ### Client Side

  * Written in HTML, CSS, Javascript.
  * Description on the Teams Involved using D3.js and modal windows for individual sub systems.
  * Slideshow on the Car Development and the Team using fotoroma.js.
  * JQuery Utilised for the Functionality of the Plugins and DOM Manipulation.
  * Semantic-UI utilised for the Webpage theming, modal windows, accordion, responsive grid.

* ### Server Side

  * Python usage for basic server [ python2 ]
  * CherryPy Usage for Simplistic Web Framework.
  * Routes
    * / -> index.html
    * /resources -> rendered to satisfy index.html dependencies

##Libraries Utilised

  * ### Client Side
      * Jquery
      * D3.js -> Force Directed Graph [ Members ]
      * Fotorama.js -> Carousel [ Gallery ]
      * Semantic UI -> Modal, Accordion, Responsive Grid, Basic Theme

  * ### Server Side
      * Jinja2 -> Templating Engine
      * CherryPy -> Simplistic Web Framework

## Execution :
```
  > python2 server.py
  > chromium --app=http://localhost:5000
```

## Live Website :

  * http://nmitformularacing.in