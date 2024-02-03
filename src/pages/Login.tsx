import {Issuer, generators} from 'openid-client';

const initOAuth2 = async () => {
    const exampleSpringAuthorizationServer = await Issuer.discover('http://example-spring-authorization-server:9000');
    console.log('Discovered issuer %s %O', exampleSpringAuthorizationServer.issuer, exampleSpringAuthorizationServer.metadata);

    const code_verifier = generators.codeVerifier();
    // store the code_verifier in your framework's session mechanism, if it is a cookie based solution
    // it should be httpOnly (not readable by javascript) and encrypted.
    const code_challenge = generators.codeChallenge(code_verifier);

    const client = new exampleSpringAuthorizationServer.Client({
        client_id: 'example-react-oauth2-authorization-code-pkce',
        redirect_uris: ['http://example-react-oauth2-authorization-code-pkce.local:3000/login/oauth2/code/example-spring-authorization-server'],
        response_types: ['code id_token'],
        // id_token_signed_response_alg (default "RS256")
    });

    client.authorizationUrl({
        scope: 'openid email profile',
        resource: 'https://my.api.example.com/resource/32178',
        code_challenge,
        code_challenge_method: 'S256',
    });
}


export const Login = () => {
    return (
        <div>
            <h1>Login</h1>
            <p>
                This is the login page.
            </p>
            <button onClick={() => initOAuth2()}>Login</button>
        </div>
    );
}
