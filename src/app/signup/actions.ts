import {signupEmailWithPasswordAction} from "@/app/auth/actions";
import {redirect} from "next/navigation";

async function signupUserAction(
    prevState: { errorMessage: string } | undefined,
    formData: FormData,
) {
    const form = Object.fromEntries(formData.entries());

    /* TIP: To minimize unnecessary requests to the authentication provider,
        consider adding a validation step before sending the request.
        For example, you can perform server-side validation. See the Next.js guide for more details:
        [https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#server-side-form-validation](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#server-side-form-validation)
     */

    const res = await signupEmailWithPasswordAction({
        email: form.email as string,
        password: form.password as string,
    });

    if (res.type === 'success') {
        redirect('/dashboard');
    } else if (res.type === 'error') {
        return {
            errorMessage: res.data,
        };
    }
}

export {signupUserAction};