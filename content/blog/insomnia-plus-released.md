---
date: 2016-10-31T13:30:50-07:00
draft: true
title: Introducing Insomnia Plus
slug: introducing-insomnia-plus
---

Today, I'm proud to introduce Insomnia Plus – a paid add-on to Insomnia that 
lets you seamlessly use Insomnia across all of your devices, while also 
providing a consistent, secure, and up-to-date backup of all your work.

<!--more-->

This post will provide an overview of what Plus offers, what it can do for you,
and how it works. You can start using Plus today by signup up for an account
inside the app (v3.6.6+).

With Plus, you simply sign into your account and your data will be there. It 
just works. However, there is a lot that you wont't see. Security and and 
privacy being the biggest.

## Data Security and Privacy by Default

Insomnia, by nature, is often used to communicate with secure and
private APIs. HTTP requests can contain sensitive information like API keys,
usernames, and passwords. This is why Insomnia treats security with the utmost
respect, implementing many of the same techniques as industry-standard password 
managers like [1Password](https://1password.com/).

The password you chose when signing up for Insomnia is during both 
authentication and encryption/decryption process (so don't lose it!). However,
it is not used directly. In fact, your password is never sent to the server.

## Your Password is Never Sent to The Server

Insomnia uses a technique called 
[Secure Remote Passwords](http://srp.stanford.edu/) (SRP) providing
secure remote authentication, with resistance towards both passive and active 
network attacks. Since your password is used as part of the data encryption
process, SRP keeps your password from ever leaving your computer, making it 
impossible for prying eyes to get access to your data, even if an attacker got
access to the database or network security was compromised. 

Along with SRP helping keep your password private, Insomnia implements best 
practices for both encryption and privacy. 

## Encryption Strategy

As mentioned before, your password is used during the encryption process. 
However, it is not directly used to encrypt your data. During sign-up, the
app will generate a securely random public/private keypair along with a 
symmetric key. Both private an symmetric keys are encrypted with 
another key that is derived from your password using `100,000` iterations of
the PBKDF2 algorithm, before being sent and stored on the server. So how is
data encrypted?

All application data (resources) that are synced with the server are grouped
under entities called _resource groups_. A resource group 


## An Up-To-Date Backup

Plus also provides a strong foundation for more team sync an collaboration 
features, which will be coming soon.
