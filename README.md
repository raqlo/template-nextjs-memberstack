# Next.js Memberstack Starter Template
This project provides a simple and effective starting point for integrating **Memberstack** into your **Next.js** application.
With this template, you can quickly set up a secure and scalable app, leveraging Memberstack’s features for authentication, user management, and membership functionality.

- **Demo**: [template-nextjs-memberstack.vercel.app](https://template-nextjs-memberstack.vercel.app/)

## Getting Started

### Creating Up Your Memberstack App
1. **Create a New App** <br />
   If you haven't already, navigate to the [Memberstack Dashboard](https://app.memberstack.com) and create a new app. You can name it whatever you like—for this example, we'll use `nextjs-memberstack`.

2. **Retrieve Your Public Key** <br />
   Go to the **Dev Tools** tab of your newly created app. Locate your **Public Key** and copy it. Then, add the key to your `.env` file in your project:
    ```dotenv
       NEXT_PUBLIC_MEMBERSTACK_PUBLIC_KEY=pb_...
    ```
3. **Test and Production Keys**
    - When in **Test Mode**, the public key will be prefixed with `pb_sb_`.
    - When in **Production Mode**, it will be prefixed with `pb_`.

Ensure you are using the appropriate key based on your app's current mode.

### Run development server

To start the development server, use one of the following commands depending on your on your package manager:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Once the server is running, open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see your app in action.

#### Using the debugger
If you want to be able to take advantage of the debugging capabilities of your IDE, you can setup your debugger to listen to port 9230 while the next process is running

## Adding Memberstack to Your NextJs Project
Adding Memberstack to Your Next.js Project
You can integrate Memberstack into your Next.js project in different ways, depending on your needs. This template demonstrates two common approaches, but you can choose the one that best fits your optimization goals or how you prefer to use Next.js.

**1. Client-Side Approach with the AuthProvider Component**   <br />For a simple, client-side authentication setup, wrap your main layout or root component with Memberstack’s AuthProvider. This approach allows you to manage authentication entirely on the client side, making it easy to access user data and authentication states throughout your app. You can also use Memberstack’s React hooks to interact with authentication features within your client components.

📌 Example in this template: The `login` and `profile` features, including the profile update form, follow this approach.

**2. Server-Side Approach with Server Actions**   <br />For enhanced security and customization, you can integrate Memberstack using Next.js server actions. This approach is useful for securely managing authentication flows, enforcing route protection, and creating custom server-side APIs that interact with Memberstack.

📌 Example in this template: The `sign-up` feature uses server actions for authentication.

Additionally, this template uses server-side middleware to protect routes, ensuring only authenticated users can access certain pages. However, you can also implement protected routes on the client side using a Protected Route Provider that restricts access based on authentication state.

This template is designed to give you a starting point, so you can see how both approaches work and decide which one best suits your project.

## Credits and Acknowledgments

This library incorporates modified pieces of code from the original Memberstack NextJS library. With the release of newer versions of NextJS, the original library was deprecated. I updated and adjusted the code to ensure compatibility with NextJS v15, enabling the use of server actions.

Special thanks to [Tailspark](https://tailspark.co/) for providing quick and easy components that make faster build times possible. The code is licensed under the MIT license.
