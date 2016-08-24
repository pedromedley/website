---
title: "SSL Validation"
slug: "ssl-validation"
menu:
    docs:
        parent: "topics"
---

Have you seen certificate errors like these?

```
Error: unable to verify the first certificate
```

```
Error: Hostname/IP doesn't match certificate's altnames: "Host: schier.co. is not in the cert's altnames: DNS:*.surge.sh, DNS:surge.sh"
```

If you are testing a local development server, or know that the certificate is invalid, you can 
disable SSL validation in the settings by unchecking the "Disable SSL Validation" option.

