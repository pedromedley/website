---
title: "Insomnia Plus Beta"
slug: "insomnia-plus"
xxx_menu:
    docs:
        parent: "topics"
        hidden: true
---

Welcome to the Insomnia Plus beta! Insomnia Plus is a paid add-on that 
enables powerful features like end-to-end encrypted sync, team collaboration,
and more.

The beta period is free so give it try. Since this is a beta, I would 
appreciate that you
[report bugs or pain points](/documentation/support-and-feedback/') to me
if you have any.


## Enable Plus Features

If you open `Settings > About` and double-click `~ Gregory`, a secret checkbox
will appear. Once you check it, you will have access to the beta features.


## Signup and Login 

Click the *Sync* button at the bottom of the sidebar to show the signup dialog,
then fill in your information.

**DO NOT LOSE YOUR PASSWORD!**
Your password is used to encrypt/decrypt your data and is never sent to the 
server, so we cannot reset it for you. I recommend keeping it safe in a 
password manager such as [1Password](https://1password.com/) or 
[LastPass](https://lastpass.com/).

_NOTE: You will be able to change your password in the future, but only if you
have a copy of your old one._

Once you signup, you will receive a verification email. Once you click the link
inside the email, you will be able to log in.


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
