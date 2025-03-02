# Next.js Memberstack Starter Template
This project provides a simple and effective starting point for integrating **Memberstack** into your **Next.js** application.
With this template, you can quickly set up a secure and scalable app, leveraging Memberstack’s features for authentication, user management, and membership functionality.

## Getting Started

### Creating Up Your Memberstack App
1. **Create a New App**
   If you haven't already, navigate to the [Memberstack Dashboard](https://app.memberstack.com) and create a new app. You can name it whatever you like—for this example, we'll use `nextjs-memberstack`.
2. **Retrieve Your Public Key**
   Go to the **Dev Tools** tab of your newly created app. Locate your **Public Key** and copy it. Then, add the key to your `.env` file in your project:
    ```dotenv
       NEXT_PUBLIC_MEMBERSTACK_PUBLIC_KEY=pb_...
    ```
3. **Test and Production Keys**
    - When in **Test Mode**, the public key will be prefixed with `pb_sb_`.
    - When in **Production Mode**, it will be prefixed with `pb_`.

Ensure you are using the appropriate key based on your app's current mode.

### Run development server

To start the development server, use one of the following commands depending on your
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Once the server is running, open your browser and navigate to **[http://localhost:3000](http://localhost:3000) **to see your app in action.

#### Using the debugger
If you want to be able to take advantage of the debugging capabilities of your IDE, you can setup your debugger to listen to port 9230 while the next process is running

