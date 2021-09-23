import React, {useEffect} from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { AddOne, MinusOne } from '../../redux/Counter/counter.actions';

const NewComp = (props) => {
    // const [counter, setCounter] = useState(0);
    const counter = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    useEffect(() => {
    }, [props]);

    const addOne = () => {
        dispatch(AddOne());
    };

    const minusOne = () => {
        dispatch(MinusOne());
    }

    return  (
        <>
        <p>{counter}</p>
        <button onClick={() => addOne()}>+</button>
        <button onClick={() => minusOne()}>-</button>
        </>
    )
}

// export default connect(mapStateToProps)(NewComp);
export default NewComp;