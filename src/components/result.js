import { useContext, useEffect } from 'react';
import { MyContext } from '../context';
import { toast } from 'react-toastify';

const Result = () => {
    const context = useContext(MyContext);
    const customId = "custom-id-yes";
    useEffect(()=>{
        context.result();
        toast.success("There is your answer", {
            position:toast.POSITION.TOP_CENTER,
            toastId:customId
        })
    },[])

    return(
        <div>
            <h3> Your answer is:</h3>
            <div className="viewer">
                { context.state.result }
            </div>

            <div className="animate__animated animate__bounceIn animate__delay-1s">
                <hr/>
                <button className="btn" onClick={context.reset}>
                    Start over
                </button>
                <button className="btn" onClick={context.result}>
                    Decide again
                </button>
            </div>

        </div>
    )
}

export default Result;