---
title: "Insomnia Plus"
slug: "plus"
menu:
    docs:
        parent: "starting"
        weight: 1
---

Welcome to the Insomnia Plus, and thank you for your support! Plus is a paid add-on that provides
secure and continuous sync across all of your devices.

## Signup and Login 

**Sign up from the settings menu inside the app.**

Click the *Sync* button at the bottom of the sidebar to show the signup dialog,
then fill in your information.

**DO NOT LOSE YOUR PASSWORD!**
Your password is used to encrypt/decrypt your data and is never sent to the 
server, so we cannot reset it for you! Keep it safe in a password manager like 
[1Password](https://1password.com/) or [LastPass](https://lastpass.com/).

_NOTE: You can change your password if you have a copy of your old one_

Once you signup, you will receive a verification email. Then, you are ready start
using the app.


## Setting Up Sync

After you are logged in, click the button in the bottom of the sidebar to open 
the sync settings.

![](/images/docs/sync-menu.png)

Sync is configured per workspace, and there are two modes that you can set.

- `automatic` data is synced automatically when something changes
- `manual` data can be pushed or pulled from the sync settings dialog (think Git)


## Resetting your Account

If you want/need to reset your sync data, there is a button in the sync settings 
to reset your sync account. If you're curious, here is what it does.

- Logs you out of your current account
- Deletes all local sync/related data (caches, status, state, etc)
- Deletes all remote data from the server
- **Does NOT delete/modify any application data**
