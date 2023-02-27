---
title: Node.js
---

## Official

- [Node.js Homepage](https://nodejs.org/en/)
- [Node.js - Developer Page](https://nodejs.dev/)

## Tutorials

- [How To Code in Node.js | DigitalOcean](https://www.digitalocean.com/community/tutorial_series/how-to-code-in-node-js)
- [Getting started with Node.js - RIP Tutorial](https://riptutorial.com/node-js)

## eBooks

- [Learning Node.js - RIP Tutorial](https://riptutorial.com/ebook/node-js)
- [Node.js - Succinctly](https://www.syncfusion.com/succinctly-free-ebooks/nodejs)
- [Mastering Node - Open Source Nodejs eBook](https://visionmedia.github.io/masteringnode/)
- [Flavio Copes Programming Handbooks](https://flaviocopes.com/page/ebooks-links/)

## Event Loop

- [Event Loop Series](https://blog.insiderattack.net/event-loop-and-the-big-picture-nodejs-event-loop-part-1-1cb67a182810)
- [Async functions block Loop](https://snyk.io/blog/nodejs-how-even-quick-async-functions-can-block-the-event-loop-starve-io/)
- [Ways to block and ways to avoid it](https://medium.com/dkatalis/eventloop-in-nodejs-ways-to-block-it-and-ways-to-avoid-b60a65bab2be)

## Profiling

- [Measure Performance](https://blog.bearer.sh/an-introduction-to-node-performance-measurement-apis/)
- [Improve Node Performance](https://raygun.com/blog/improve-node-performance/)
- [Node.js Doc](https://nodejs.org/en/docs/guides/simple-profiling/)
- [0x](https://github.com/davidmarkclements/0x)
- [Clinic.js](https://clinicjs.org/)

## Server Frameworks

Um Server-seitige Anwendungen (Backend API bzw. komplette Sites mit UI) zu erstellen bieten sich
diverse Frameworks an. Die Situation hier ist nicht ganz einfach, da einige Projekte (allen voran
Express JS) in der Entwicklung _stagnieren_. Je nach Ausrichtung der geplanten Anwendung bietet sich
auch eine komplett andere Lösung an: Static Site Generators oder Fullstack Frameworks. Siehe dazu
[State of JavaScript 2022 - Rendering Frameworks](https://2022.stateofjs.com/en-US/libraries/rendering-frameworks/).

Passend dazu gibt es letztmals in der [State of JavaScript 2021](https://2021.stateofjs.com/en-US/libraries/back-end-frameworks/) Umfrage den Bereich _Backend Frameworks_, in dem dann auch noch Express aufgeführt wurde.

### Der Platzhirsch: ExpressJS

- [ExpressJS](https://expressjs.com/)

Die nächste Version 5 bekam im November 2014(!) ihren ersten Aplha-Release. Immerhin im Februar 2022
wurde der erste Beta-Release getagged. Diese zögerliche Entwicklung und Probleme der aktuellen Codebase
([Why you should drop ExpressJS in 2021 - DEV Community](https://dev.to/romainlanz/why-you-should-drop-expressjs-in-2021-711))
führen zu viel Kritik in Entwicklerkreisen. Nichtsdestotrotz punktet Express weiterhin mit dem
größten vorhandenen Ecosystem und kann sauber aufgesetzt
([Handled unhandled Promise Rejections](https://codefibershq.com/blog/handling-promise-rejections-in-expressjs-nodejs-with-ease))
sehr produktiv eingesetzt werden.

Auf der Homepage bitte beachten, dass die Englische Original-Fassung besucht wird. Die deutsche
Übersetzung hängt hinterher (https://expressjs.com/de/).

Unter Umständen bieten sich auch Meta-Frameworks an, die auf Express basieren:

- [NestJS](https://github.com/nestjs/nest) - API an Angular angelehnt
- [Loopback](https://loopback.io/)

### Die Mitbewerber

- [Fastify](https://www.fastify.io/)
- [Hapi](https://hapi.dev/)

Beide verfügen über ein ausreichendes Ecosystem an Plugins bzw. Modulen und stellen attraktive
Alternativen zu ExpressJS dar.

### Der Newcomer

- [H3](https://unjs.io/h3)

In der [Unified JavaScript Tools](https://unjs.io/) Sammlung versteckt sich die eine oder andere
Perle der JavaScript-Bibliotheken und -Tools. Das _perfekte_ Zusammenspiel dieser demonstriert der
[Nitro Server](https://nitro.unjs.io/). Im Gegensatz zu jeder anderen obigen Lösung, gibt es hier
einen _Build-Step_. D.h. das kompilierte Produkt wird ohne Node-Modules Abhängigkeiten deployed.

Persönlich habe ich beides schon eingesetzt. Zur Zeit fehlt mir eigentlich nur noch die
Websockets-Unterstützung, um diese Projekte rundum empfehlen zu können.

## Database Access

- [Node.js ORMs and why you shouldn't use them - LogRocket Blog](https://blog.logrocket.com/why-you-should-avoid-orms-with-examples-in-node-js-e0baab73fa5/)
- [Using SQL Query Builder is an anti-pattern](https://gajus.medium.com/stop-using-knex-js-and-earn-30-bf410349856c)
- [Accessing Databases](https://www.prisma.io/dataguide/database-tools/top-nodejs-orms-query-builders-and-database-libraries)

## Authentication

- [Express mit Passport und JWT](https://www.digitalocean.com/community/tutorials/api-authentication-with-json-web-tokensjwt-and-passport)
