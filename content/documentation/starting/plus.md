---
title: "Insomnia Plus Beta"
slug: "plus"
menu:
    docs:
        parent: "starting"
        weight: 1
---

**_DISCLAIMER: Insomnia Plus is still in early stages, and may not be 100% stable_**

Welcome to the Insomnia Plus beta, and thank you for taking the time to help
test it! Insomnia Plus is a paid add-on that enables end-to-end encrypted sync
for individuals (team features coming soon).

The beta period is **free** so give it try. And, since this is beta, I would 
appreciate it if you
[report any bugs or pain points](/documentation/support-and-feedback/') to me
so I can address your issues.


## Enable Plus Features

**NOTE: Make sure you have a minimum of v3.6.2 installed**

If you open `Settings > About` and double-click `~ Gregory`, a secret checkbox
will appear. Once you check it, you will have access to the beta features.


## Signup and Login 

Click the *Sync* button at the bottom of the sidebar to show the signup dialog,
then fill in your information.

**DO NOT LOSE YOUR PASSWORD!**
Your password is used to encrypt/decrypt your data and is never sent to the 
server, so we cannot reset it for you! I recommend keeping it safe in a 
password manager like [1Password](https://1password.com/) or 
[LastPass](https://lastpass.com/).

_NOTE: You will be able to change your password in the future, but only if you
have a copy of your old one._

Once you signup, you will receive a verification email. Click the activation 
link inside, then log in to the app.


## Configure Data Sync

After you are logged in, click the button in the bottom of the sidebar to open 
the sync settings.

Sync is configured per workspace, and there are two modes that you can set.

- `automatic` data is synced automatically when something changes
- `manual` data can be pushed or pulled from the sync settings dialog (think Git)


## Resetting your Account

If you want/need to reset your sync data, there is a button in the sync settings
to reset your sync account. 
If you're curious, here is what it does.

- Logs you out of your current account
- Deletes all local sync/related data (caches, status, state, etc)
- Deletes all remote data from the server
- **Does NOT delete/modify any application data**
