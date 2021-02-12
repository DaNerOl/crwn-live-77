import "./styles.scss"

import SignIn from '../../components/SignIn'
import SignUp from '../../components/SignUp'

const Auth = () => {
    return (
        <div className='auth'> 
            <SignIn></SignIn>
            <SignUp></SignUp>
        </div>
    )
}

export default Auth
