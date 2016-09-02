---
title: "Environment Variables"
slug: "environment-variables"
menu:
    docs:
        parent: "topics"
        weight: -100 
---

Insomnia supports the ability to share common variables across requests and manage them
in one place. The environment is defined as JSON, and you can put whatever you want in it. 

**Sample Environment:**

```json
{
	"base_url": "https://api.myproduct.com/v1",
	"api_key": "live_0a7b973038f4f6ee5",
	"user_id": "user_0138tsrat8902n4pt",
	"name": "gregory schier",
	"locales": {
		"english": "en-US",
		"french": "fr-FR"
	}
}
```

You can reference the environment in any request by using the
[Nunjucks](https://mozilla.github.io/nunjucks/) template syntax.


**Sample URL:**

```twig
{{ base_url }}/users/{{ user_id }}
```


**Sample JSON Request body:**

```twig
{
  "type": "User",
  "id": "{{ user_id }}",
  "name": "{{ name | title }}",
  "locale": "{{ locales.english }}"
}
```


## Managing Environments

You can open the environment manager by clicking the environments dropdown in the top left.
From there, you can edit the global environment, or create sub-environments.

![Insomnia REST Client Environments](/images/docs/environments.png)


### Global Environment

Variables in the global environment can be used in any request at any time. 


### Sub Environments

Variables in sub environments can be used when the desired sub environment is active. You can 
activate a sub environment by clicking it in the environment dropdown, located near the top
of the sidebar.

The most common use for sub environments is to set a different `base_url`
for development and production.

![Insomnia Environment Dropdown](/images/docs/environment-dropdown.png)


### Environment Overrides

For more fine-grained control, you can override environment variables at the folder level. 
You can access theses overrides from the folder dropdown in the sidebar.
