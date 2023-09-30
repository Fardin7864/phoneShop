import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const SocialLogin = () => {
    const {signUpWithSocial,gitProvider,googleProvider} = useContext(AuthContext);
    const handleSocialLogin = (provider) =>{
        signUpWithSocial(provider)
        .then(result => {const Currentuser = result.user})
        .catch(err => console.log(err.message))
    }
    return (
        <div>
            <a onClick={() => handleSocialLogin(googleProvider)} className="text-blue-500 underline">Google</a>
            <hr />
            <a onClick={() => handleSocialLogin(gitProvider)} className="text-blue-500 underline">github</a>
        </div>
    );
};

export default SocialLogin;