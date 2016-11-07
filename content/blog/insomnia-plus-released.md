---
date: 2016-11-02T13:30:50-07:00
draft: true
title: Introducing Insomnia Plus
slug: introducing-insomnia-plus
tags: ["announcement"]
---

Today, I'm proud to introduce Insomnia Plus – a paid add-on to Insomnia that 
keeps your data synced seamlessly across all your devices. This also provides a 
consistent, secure, and up-to-date backup of all your work.

<!--more-->

With Plus, simply sign into your account and your data will be there. It 
just works. However, there a lot happening behind the scene, such as full
end-to-end encryption of all data, smart conflict resolution, and robust offline
support.

## Secure By Default

Insomnia, by nature, is often used to communicate with secure and
private Services. HTTP requests may contain sensitive information like API keys,
usernames, or passwords. For this reason, Insomnia treats security as a high
priority, implementing many of the same techniques used by industry-leading 
password management apps like [1Password](https://1password.com/), 
[LastPass](https://www.lastpass.com/), and 
[DashLane](https://www.dashlane.com/). 

When signing up for Plus, the password you chose will be used during both the
authentication and encryption processes (so don't lose it!). However, due to
the use of a protocol called [SRP](http://srp.stanford.edu/), this password is
never actually sent to or stored on the server. This means, that not even
Insomnia can get access to your data.

_Check out the [Security Overview](/documentation/security) to find more
on the Insomnia Plus architecture._

## Always in Sync

These days, it is common for people to have multiple machines.

## Reliable Backup

TODO

## What's To Come

While this was a major effort to get done, it is just the beginning. There is
now a secure, reliable, and extensible platform to build more advanced features
on top of.

### Data Snapshots

TODO

### Team Collaboration

TODO

### Something Else?

If you want to see something that wasn't talked about I'd love to chat about it.
