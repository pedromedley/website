---
date: 2016-10-30T11:39:42-07:00
title: Progress Update 1
slug: progress-update-1
series: ["transparency"]
tags: ["company", "stats"]
draft: true
---

One of my goals before transitioning to Insomnia full-time was to share as much 
about the process as possible. As an independent developer with little time, 
success heavily relies on the effective use of shared knowledge, tools, 
resources, and peers. Without things like blog posts, open source, and friends, 
Insomnia would not be where it is today. This post is an attempt to give back.

<!--more-->

This is the first post in a series titled
[Transparency](/series/transparency), where I share numbers and talk about what
I've done, what I'm thinking, and the mistakes I've made. If there is anything 
you think that's missing from these posts, feel free to reach out and let me 
know. I'll try to accommodate as many requests as possible.

Alright, let's dive in.


## User Growth and Other Stats

I'd like to start this post by going over some interesting statistics on how
Insomnia has been doing so far. Since Insomnia is a desktop app, these stats 
will be divided into application stats and website stats.

### Active App Users

Here is a screenshot from [Mixpanel](https://mixpanel.com/) on daily active app 
users. I've chosen to define an active user as someone who has sent at least one 
API request from the app in a given day.

![Insomnia Active Users](/images/blog/active-users-four-months.png)

If you're curious, the lines marked on the graph are the following. 

- September 5 – [#1 on Hacker News](https://news.ycombinator.com/item?id=12432859)
- September 15 – [OMG! Ubuntu!](http://www.omgubuntu.co.uk/2016/09/insomnia-3-is-free-rest-client-for-linux)
- October 17 – [Laravel News](https://laravel-news.com/2016/10/insomnia-a-simple-beautiful-and-free-rest-api-client/)

As you can see, most of the user base can be attributed to being featured on
Hacker News in early September. Since then, retention has been high and growth
has been steady but slow. High retention is good. Slow growth either means I'm
doing a poor job at getting the word out, or the target market is too small.
I have a suspicion it's the former, because I haven't done much in terms of
marketing or PR.

### Website Traffic

In my opinion, one of the biggest mistakes made by independent developers is
not having a proper website. A website is one of the only ways of gaining 
users organically (unless you are in an app store), so a website should be a
huge priority.

Here are some website stats taken from 
[Google Analytics](https://www.google.com/analytics/) over the same time 
period as the one above. Notice the huge spike from Hacker News.

![Insomnia Web Traffic](/images/blog/web-traffic-four-months.png)

It's harder to see in this graph, but if you ignore the spikes, there is also
a steady growth here. Another good sign.

### Miscellaneous Stats

In order to keep this post relatively short, I've condensed the rest of the
stats into tables. If there is anything else you want to see here, just let me 
know.

**App Stats**

| Value   | Description            |
|---------|------------------------|
| 2,000   | daily active users     |
| 5,000   | weekly active users    |
| 40,000  | downloads              |

**Website Stats**

| Value    | Description            |
|----------|------------------------|
| 00:01:22 | average session length |
| 54%      | average bounce rate    |
| 110,000  | sessions               |

**General Stats**

| Value     | Description                                                  |
|-----------|--------------------------------------------------------------|
| 29        | [App Releases](/changelog)                                   |
| 320       | [Help Scout](https://www.helpscout.net/) email conversations |
| 10 months | **Financial runway**                                         |

**Financial Spend**

| Cost     | Description                       |
|----------|-----------------------------------|
| $300     | S3 for download hosting           |
| $150     | SSL wildcard certificate          |
| $70      | Business registration             |
| $50      | [Heroku](https://www.heroku.com/) |
| $40      | [Sentry](https://sentry.io)       |

**Financial Earnings**

| Cost     | Description                       |
|----------|-----------------------------------|
| $0       | :(                                |

Insomnia currently has no premium features, so has been unable to
generate revenue. However, A beta version of the first paid feature (sync) is 
almost complete, and an additional team collaboration features are in the works. 
Hopefully you will see this number increase in the next post.


## Time Allocation, Priorities, and Roadmap

The last four month have been crazy. I began full-time work on Insomnia
on July 5th, and launched the Insomnia 3.0 app on
[July 24th](/changelog/3.0.10/). Effectively, the last four months
looked like this.

- **July** – Getting ready for initial public launch
- **August** – Implement remaining core features (environments, and cookie support)
- **September** – Bug fixes, website, small improvements, and talking to users
- **October** – Researching and implementing cloud sync features

I don't have the next four months planned out, so I can't tell you exactly what 
will happen, but I do have some general goals. 

- Have sync and team features available for purchase by December
- Begin open-sourcing parts of the codebase
- Implement highly requested features
    - Binary file support 
    - Request chaining and/or scripting
    - More import sources (Postman, Swagger, etc)
- Write more content like this
    
## Mistakes and Lessons Learned

Here are the main things that I have learned so far. Each one of these could
probably have a separate blog post written about it.

- Talking to users takes is extremely valuable, but takes a lot of time
    - [Help Scout](https://www.helpscout.net/) has helped make email more efficient
- Code quality mostly only matters for the core components
    - Because those are the hardest parts to refactor
    - For Insomnia, it's the data model and storage system
- Hosting Electron apps (50MB each) on S3 is expensive
    - Was $200/mo after Hacker News post
    - Used [Cloudflare](https://www.cloudflare.com/) to cut costs (now $10/mo)
- People don't like receiving app updates every day (who knew!?)
- Working at home makes me feel like a slob
    - Have transitioned to coffee shops
    
## Wrap Up

Overall, Insomnia is doing well. The user base is growing, the app is becoming
more stable, and I've had the opportunity to meet many great people. 
However, it's not generating revenue yet, and user growth is slow. Considering
the sync beta should be ready to go live this week, this month should be very
interesting.

I plan to try and write one of these posts every month, so keep your eyes out
for that. Again, if there is anything else that you would like to see included 
in these posts, just let me know.
