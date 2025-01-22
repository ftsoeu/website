# Running live version for preview

**Note**: the project can work both on main and preview branch, but the special branch **preview** contains the right route to have a preview in sync with Directus. The main branch does not contain preview route because it breaks the static building export.

## Step one: settings local domain

First, we need to have **next.ftso.local** redirects to **127.0.0.1**.

* on **OSX** in */private/etc/hosts*
* on **Linux** in */etc/hosts*
* on **Windows** in *C:\Windows\System32\drivers\etc\hosts*

Adding at the end of file

```env

127.0.0.1 next.ftso.local
127.0.0.1 directus.ftso.local
```

Please do not forget to create *.env* with current envs:

```env

NODE_ENV=development

NEXT_PUBLIC_BASE_URL=https://next.ftso.local

DIRECTUS_URL=https://directus.ftso.local
NEXT_PUBLIC_DIRECTUS_URL=https://directus.ftso.local
```

You should change **DIRECTUS_URL** and **NEXT_PUBLIC_DIRECTUS_URL** with current production URL of our directus. While if you like to experiment with directus in development just leave as it is the DIRECTUS url to local directus url (https://directus.ftso.local)


## Step two: Generate Certificats for all domains (next.ftso.local and directus.ftso.local)

Using **mkcert** for local development:

```bash

cd /certs
mkcert -install
mkcert next.ftso.local directus.ftso.local
```

## Step three: Switch the branch and Running the docker

Before running the project switch from the **branch main** to **preview**

Just run to build:

```bash

docker-compose build
```

Just run to work:

```bash

docker-compose up
```

At the end you should able to go https://directus.ftso.local and https://next.ftso.local.
Please note: Current directus live container is ready to work with https://next.ftso.local

