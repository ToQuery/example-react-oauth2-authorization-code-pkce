import {useAuth} from "react-oidc-context";

export const Login = () => {

    const auth = useAuth();

    debugger;

    switch (auth.activeNavigator) {
        case "signinRedirect":
            console.log("signinRedirect...");
            // return <div>Redirecting...</div>;
            break;
        case "signinResourceOwnerCredentials":
            console.log("signinResourceOwnerCredentials...");
            // return <div>signinResourceOwnerCredentials...</div>;
            break;
        case "signinPopup":
            console.log("signinPopup...");
            // return <div>signinPopup...</div>;
            break;
        case "signinSilent":
            console.log("signinSilent...");
            return <div>Signing you in...</div>;
        case "signoutRedirect":
            console.log("signoutRedirect...");
            return <div>Signing you out...</div>;
        case "signoutPopup":
            console.log("signoutPopup...");
            // return <div>signoutPopup...</div>;
            break;
        case "signoutSilent":
            console.log("signoutSilent...");
            // return <div>signoutSilent...</div>;
            break;
    }

    if (auth.isLoading) {
        return <div>Loading...</div>;
    }

    if (auth.error) {
        return <div>Oops... {auth.error.message}</div>;
    }

    if (auth.isAuthenticated) {
        return (
            <div>
                Hello {auth.user?.profile.sub}{" "}
                <button onClick={() => void auth.removeUser()}>Log out</button>
            </div>
        );
    }

    return <button onClick={() => void auth.signinRedirect()}>Log in</button>;
}
