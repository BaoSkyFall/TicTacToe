import { connect } from 'react-redux';
import { Move, Restart, BackToStep } from '../Actions/action';
import Table from '../Components/Table/Table';



const mapStateToProps = (state) => {
    console.log(state)
    return state
  }

const mapDispatchToProps = dispatch => {
    return {
        onClickChoosen: pos => {
            dispatch(Move(pos));
        },
        onRestart: () => {
            dispatch(Restart());
        },
        onchangeTurn: (value, i) => {
            dispatch(BackToStep(value, i));
        }
    }
}
const MyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Table);

export default MyContainer;
