---
title: Data Sync Security
slug: security
menu:
    docs:
        parent: other
        weight: -1
---

When signing up for [Insomnia Plus](/pricing), you gain access to end-to-end
encrypted data sync. Simply sign into your account and your data will be there, 
seamlessly synced across all of your (and optionally your teams') devices. 

Insomnia believes that it is your right to know how your sensitive data is 
transported and handled, so this document is an effort to explain exactly how 
it works. 

If you find any part of this document that are incorrect, missing, or wrong, 
please don't hesitate to reach out.

## Key Points

This section gives a high level overview of Insomnia Plus security. If you read
anything in this document, it should be this section.

**What End-To-End encryption means**<br>
E2EE means that all encryption keys are generated locally, and all
encryption and decryption is performed **before** sending any data over the 
network. At no point in the sync process can the Insomnia servers, or an
intruder read or access sensitive application data.

**Not even Insomnia can access your data**<br>
Insomnia never sends unencrypted data or keys that can be used to decrypt data 
to the server. This means that neither Insomnia, network spies, or server hackers
can gain access to your sensitive data. You can rest assured that your data is 
safe on your machine.

**Encryption algorithms used?**<br>
Add data is encrypted using randomly generated 256 bit symmetric keys for
use with AES-GCM-256 (Galois Counter Mode). 

**Passwords cannot be reset**<br>
Losing your password means losing the ability to decrypt your 
account keys. If you lose your password there is no way to access your data, 
and there is nothing Insomnia can do to help apart from resetting your account. 
You _can_ change your password but you need a copy of your old one to do so.

**Local data is not encrypted on disk**<br>
Insomnia currently stores application data on disk in raw form.
E2EE only applies to data that is transmitted over the network. It is still 
possible for malicious software to access the application data stored on your
machine. Please take the usual precautions to keep your local data safe.

## Useful Definitions

In order to avoid too much explanation in this document, here are definitions
for the common things that will be talked about.

Let's start by defining the data models.

| Data Model         | Definition                                                  |
|--------------------|-------------------------------------------------------------|
| `M_Account`        | A user that can log in                                      |
| `M_Resource`       | An entity that can be synced (eg. Request, Workspace, etc.) |
| `M_ResourceGroup`  | A group of `M_Resource` that can be shared as one           |
| `M_Link`           | A relationship linking a `M_Account` to `M_ResourceGroup`   |

There are a lot of keys and salts used in the encryption/decryption process, so 
let's define those too.

| Name                | Description                                                | Stored?        |
|---------------------|------------------------------------------------------------|----------------|
| `PUB_Account`       | Public key for `M_Account`                                 | Yes            |
| `PRV_Account`       | Private key for `M_Account`                                | Yes &#x1f512;  |
| `SYM_Account`       | Symmetric key for `M_Account`                              | Yes &#x1f512;  |
| `SYM_ResourceGroup` | Symmetric Key for data encryption                          | No             |
| `SYM_Link`          | Encrypted form of `SYM_ResourceGroup`                      | Yes &#x1f512;  |
| `SLT_Auth_1`        | Salt for PBKDF2 of password for auth                       | Yes            |
| `SLT_Auth_2`        | Salt for SRP authentication process                        | Yes            |
| `SLT_Enc`           | Salt for PBKDF2 of password for encryption                 | Yes            |
| `SEC_PWD_Auth`      | Secret derived from password using `SLT_Auth_1`            | No             | 
| `SEC_PWD_Enc`       | Secret derived from password using `SLT_Enc`               | No             | 
| `SRP_Verifier`      | Verification string used for SRP                           | Yes            |

_NOTE: `SYM_Link` and `SYM_ResourceGroup` are essentially the same thing, but 
are defined separately for the purpose of discussion. This will become clear
later on._

## Signup and Authentication Overview

Since the password you choose at registration time is used during the
encryption process (although indirectly), it is vital that it is never sent or 
stored on the server in an easily crackable form. To help with this goal,
Insomnia uses the [Secure Remote Passwords](http://srp.stanford.edu/) (SRP)
encrypted key exchange protocol.

_You can read more about the exact SRP implementation
that Insomnia Plus uses in [RFC-2945](https://tools.ietf.org/html/rfc2945)._
 
SRP is an interactive protocol which allows a server to confirm that some client 
knows a password, and to derive a strong shared session key, without revealing 
what the password is to an eavesdropper. In addition, the server does not hold 
the actual password: instead it stores a "verifier" created by the client. If 
the server's private data is revealed (by a server compromise), the verifier 
cannot be used directly to impersonate the client. <sup>[\[1\]](https://github.com/mozilla/node-srp)</sup>

**How It Works – Account Creation**

These are the steps taken on the client during account creation.

1. Randomly generate 256 bit keys and salts `SYM_Account`, `SLT_Auth_1`, 
   `SLT_Auth_2`, `SLT_Encryption`
2. Generate `PUB_Account`/`PRV_Account` keypair for RSA-OAEP SHA-256
3. Generate `SEC_PWD_Auth` using the following steps
    1. Combine `SLT_Auth1` with email address using HKDF SHA-256 to form a new
        salt `SLT_TMP_1`
    2. Run 100,000 iterations of PBKDF2 SHA-256 with `SLT_TMP_1`
4. Generate `SEC_PWD_Enc` using the following steps
    1. Combine `SLT_Enc` with email address using HKDF SHA-256 to form a new
        salt `SLT_TMP_2`
    2. Run 100,000 iterations of PBKDF2 SHA-256 with `SLT_TMP_2`
4. Generate `SRP_Verifier` using `SLT_Auth_2`, email address, `SEC_PWD_Auth`
5. Encrypt `SYM_Account` using `SEC_PWD`
6. Encrypt `PRV_Account` using `SYM_Account`
7. Send `M_Account` object to server for creation

Once the account is created, the server will send a verification email to the
user. Once the user receives this email, they can attempt to log in.

**How It Works – Account Login**

These are the steps taken on the client during login.

1. Derive `SEC_PWD_Auth` using same steps as in Account Creation
2. Use `SLT_Auth_2` to perform SRP exchange
3. Store SRP-generated `K` locally to use as session key

Now that we know how signup and authentication are performed, we can talk about
data encryption.

## Data Encryption Overview

HTTP requests often contain sensitive information like API keys, usernames, 
and passwords. This is why Insomnia treats security with such a high priority, 
implementing many of the same techniques used by industry-leading password 
managers like [1Password](https://1password.com/), 
[LastPass](https://www.lastpass.com/), [DashLane](https://www.dashlane.com/), 
and others.

As detailed above, the user's password is used to derive a secret key, which 
is then used to encrypt the account private key. Once decrypted, the private key
can then be used to decrypt the keys for the Resource Group.

Now you may be asking why all these keys are necessary. Why not just encrypt 
and decrypt data using the user's password directly? There are few key scenarios 
that make having this many keys necessary.

**Scenario 1 – Changing Passwords**

The ability for a user to change passwords is one reason that data is not
directly encrypted using a password. If the user has large amounts of encrypted
data, changing the password would mean decrypting and re-encrypting all data 
with the new password. This would quickly become to slow with even medium sized
amounts of data. 

**Scenario 2 – Sharing a Resource Group**

The ability to share Resource Groups is the reason that every Resource Group
needs it's own key, and every account needs a public/private keypair to securely
share said key. Here's an example involving two users, Jan and Bob.

For Jane to share a Resource Group with Bob, she must encrypt the Resource
Group's key with Bob's public key and store it on the server (`M_Link`). Now, 
Bob can use his account's private key to decrypt the Resource Group's key and
gain access to the data. This is a classic example of the 
[Diffie–Hellman key exchange](https://en.wikipedia.org/wiki/Diffie%E2%80%93Hellman_key_exchange)
being put to good use.

## Conclusions and Wrap Up

Now you should have a basic understanding of how Insomnia Plus uses
industry-leading best practices to keep your data safe, and allow you to focus
on what matters most.

This is a living document. If you find that something is missing, have
questions, or find a mistake, please don't hesitate to reach out.

---

### Resources, Information, and Libraries

The following is a short list of some of the materials I found useful when 
doing the initial research and design for the Insomnia Plus architecture.

**Whitepapers and Information**<br>
[1Password For Teams Whitepaper](https://1password.com/files/1Password%20for%20Teams%20White%20Paper.pdf)<br>
[Dashlane Security Whitepaper](https://www.dashlane.com/download/Dashlane-Security-Whitepaper-V2.8.pdf)<br>

**Specifications and Resources**<br>
[Stanford SRP Homepage](http://srp.stanford.edu/)<br>
[SRP RFC-2945](https://tools.ietf.org/html/rfc2945)<br>
[Galois/Counter Mode](https://en.wikipedia.org/wiki/Galois/Counter_Mode)<br>
[Information Security StackExchange](http://security.stackexchange.com/)<br>

**Libraries**<br>
[Node Forge Encryption Toolbelt](https://github.com/digitalbazaar/forge)<br>
[Mozilla node-srp](https://github.com/mozilla/node-srp)<br>
[Stanford Javascript Crypto Library](https://crypto.stanford.edu/sjcl/)<br>
