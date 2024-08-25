# vue3-app-2

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

"# vue3-app-2"

# ERR_CERT_AUTHORITY_INVALID

    https

    jenkins pipline test

# preview

    "preview": "vite preview --port 3008",

# ufw

    80	  sodi9.store
    8080 jenkins.sodi9.store
    8081 common.sodi9.store
    3000 nuxt.sodi9.store
    3001 dashboard.sodi9.store
    3002 sales.sodi9.store
    3003 next.sodi9.store
    3004 vite.sodi9.store
    3005 landing.sodi9.store
    3006 vue3.sodi9.store
    3007 common.sodi9.store
    3008 gallery.sodi9.store  //vue3-vite-ts



    92  sudo ufw allow 8080
    210  sudo ufw allow 3000
    398  sudo ufw allow 3001
    399  sudo ufw allow 3002
    400  sudo ufw allow 3003
    401  sudo ufw allow 3004
    402  sudo ufw allow 3005
    403  sudo ufw allow 3006
    404  sudo ufw allow 3007


# gallery.sodi9.store


    sudo vi gallery.sodi9.store
    sudo ln -s /etc/nginx/sites-available/gallery.sodi9.store /etc/nginx/sites-enabled/
    
    sudo systemctl restart nginx

    sudo certbot --nginx -d gallery.sodi9.store



        sangbinlee9@app-1:/etc/nginx/sites-enabled$ sudo certbot --nginx -d gallery.sodi9.store
        Saving debug log to /var/log/letsencrypt/letsencrypt.log
        Requesting a certificate for gallery.sodi9.store

        Successfully received certificate.
        Certificate is saved at: /etc/letsencrypt/live/gallery.sodi9.store/fullchain.pem
        Key is saved at:         /etc/letsencrypt/live/gallery.sodi9.store/privkey.pem
        This certificate expires on 2024-11-23.
        These files will be updated when the certificate renews.
        Certbot has set up a scheduled task to automatically renew this certificate in the background.

        Deploying certificate
        Successfully deployed certificate for gallery.sodi9.store to /etc/nginx/sites-enabled/gallery.sodi9.store
        Congratulations! You have successfully enabled HTTPS on https://gallery.sodi9.store

        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
        If you like Certbot, please consider supporting our work by:
        * Donating to ISRG / Let's Encrypt:   https://letsencrypt.org/donate
        * Donating to EFF:                    https://eff.org/donate-le
        - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -






    sudo certbot install --cert-name gallery.sodi9.store


        sangbinlee9@app-1:/etc/nginx/sites-available$ sudo certbot install --cert-name gallery.sodi9.store
        Saving debug log to /var/log/letsencrypt/letsencrypt.log
        Deploying certificate
        Successfully deployed certificate for gallery.sodi9.store to /etc/nginx/sites-enabled/gallery.sodi9.store

    sudo systemctl restart nginx


# build error     



error TS7006: Parameter 'id' implicitly has an 'any' type.
error TS2339: Property 'completed' does not exist on type 'never'.
error TS7005: Variable 'timeout' implicitly has an 'any' type.











