import { SpinnerDark } from "../spinner/SpinnerDark"

import './loadingScreen.scss';

const LoadingSreen = () => {
    return(
        <div className="loading-screen">
            <SpinnerDark width='350px' height='350px'/>
        </div>
    )
}
export default LoadingSreen;