import reactLogo from '/assets/react.svg'
import viteLogo from '/assets/vite.svg'
import './App.css'
import {Login} from "./pages/Login.tsx";
import {AuthProvider, AuthProviderProps} from "react-oidc-context";

const oidcConfig: AuthProviderProps = {
    authority: "http://example-spring-authorization-server.example.com:9000",
    client_id: "example-react-oauth2-authorization-code-pkce",
    redirect_uri: "http://127.0.0.1:5173/",
};
function App() {

    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <AuthProvider {...oidcConfig}>
                    <Login />
                </AuthProvider>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
