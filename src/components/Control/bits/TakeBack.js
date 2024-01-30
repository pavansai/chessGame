import { useAppContext }from '../../../contexts/Context'
import { takeBack } from '../../../reducer/actions/move';

const TakeBack = () => {

    const { dispatch } = useAppContext();
    const buttonStyle = {
        backgroundColor: 'white', // Change this to the desired color
        color: 'black', // Change this to the desired text color
        // Add any other styles you need
      };
    

    return <div >
        <button style={buttonStyle} onClick={() => dispatch(takeBack())}>Take Back</button>
    </div>
}

export default TakeBack