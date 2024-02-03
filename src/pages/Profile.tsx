import { withAuth } from "react-oidc-context";

const Profile = () => {
    // const auth = this.props.auth;
    return (
        <div>Hello {this.props.auth.user?.profile.sub}</div>
    );
}

export default withAuth(Profile);

