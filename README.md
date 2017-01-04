# twitterBots
TwitterBots for GA conference

What is a twitter bot?

A twitter bot is a program which generates twitter behavior automatically, via an outside program. Generally this means regular tweeting, but it can also mean replying to other users, favoriting or retweeting, friending others, or even querying an external api and presenting the results.

Why?

They're really important! And fun! They can do silly things like generate surreal metaphors and reorder the pixels in an image, but they can also help locate victims of natural disasters, or even swing presidential elections! One of my favorite bots (actually a Facebook bot) also orders pizza for you [www.dominos.com]

How to make a twitter bot in an hour:
http://techknights.org/workshops/nodejs-twitterbot/

A few points about using automation:

you have to limit your number of tweets
* By time of day (set it to only tweet during daytime, using an if statement with ```new Date()```)
* By frequency (set it to tweet no more than 180 times each 15 min, using setInterval or other methods)

You can’t tweet to hashtags or to trending topics (much)
	Incidentally doing that is ok, if you’re always tweeting to trends you may get in trouble

You can’t tweet directly at people (unless they tweet at you first)
	https://twitter.com/arguetron?lang=en

You can’t do “bulk follow”, but you can automatically post friendships using post requests to a user_id or screen_name, with follow=true

Other good uses for bots:

https://twitter.com/dearassistant?lang=en
https://twitter.com/whatthefare
http://www.hongkiat.com/blog/using-twitter-bots/


Twitter rules and best practices:
https://support.twitter.com/articles/76915
https://dev.twitter.com/overview/terms/agreement-and-policy
