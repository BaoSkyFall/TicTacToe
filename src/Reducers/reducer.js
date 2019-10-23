import { MOVE,  RESTART, BACK_TO_STEP } from '../Actions/action';

const initState =
    {
        squares: Array(400).fill(null),
        turn: true,
        isFinish: false,
        isWinP1: false,
        reverse: false,
        activeIndex: -1,
        location: [],
        index: 0,
        active: '',
        returning: false,
    }
function myReducer(state = initState, action) {
    switch (action.type) {
        case MOVE: {

            let { squares } = state;
            console.log(squares);
            let { turn } = state;
            let { isFinish } = state;
            let { isWinP1 } = state;
            let { reverse } = state;
            let { activeIndex } = state;
            let { location } = state;
            let { index } = state;
            let { active } = state;
            let { returning } = state;
            const i = action.pos;
            console.log(action.pos);
            if (!isFinish) // Kiểm tra kết thúc ván đấu
            {
                if (squares[i] === null) // Kiểm tra xem đã đánh chưa
                {
                    if (true) {

                        const squaresClone = squares.slice();
                        console.log(i);
                        console.log(squares);
                        console.log(location);
                        if (turn) {
                            squaresClone[i] = 'X';
                        }
                        else {
                            squaresClone[i] = 'O';
                        }



                        squares = squaresClone;
                        turn = !turn;
                        activeIndex = -1;


                        if (ruleToWin(squares, i) === true) {
                            if (turn) {

                                isFinish = true;
                                isWinP1 = false;


                            }


                            else {

                                isFinish = true;
                                isWinP1 = true;

                            }
                        }


                    }


                }
            }
            else {


                if (isWinP1) {

                    alert('Player X Win !!!');
                    squares = Array(400).fill(null);
                    turn = true;
                    isFinish = false;
                    isWinP1 = false;
                    location = [];
                }
                else {
                    alert('Player O Win !!!');
                    // this.onPlayAgainClick();
                    squares = Array(400).fill(null);
                    turn = true;
                    isFinish = false;
                    isWinP1 = false;
                    location = [];
                }

            }
            let x = i / 20;
            let y = i % 20;
            console.log(index);
            if (returning) {
                location.splice(index, location.length - index - 1);
                returning = false;
            }
            if (state.squares[20 * x + y] === null) {
                location.push({
                    x: x,
                    y: y,
                    player: turn ? 'Player 1' : 'Player 2',
                    squares: squares
                })
            }
            return {
                ...state,
                squares,
                turn,
                isFinish,
                isWinP1,
                reverse,
                activeIndex,
                location,
                index,
                active,
                returning
            };

        }
        case RESTART: {
            let { squares } = state;

            let { turn } = state;
            let { isFinish } = state;
            let { isWinP1 } = state;
            let { reverse } = state;
            let { activeIndex } = state;
            let { location } = state;
            let { index } = state;
            let { active } = state;
            squares = Array(400).fill(null);
            turn = true;
            isFinish = false;
            isWinP1 = false;
            location = [];
            return {
                ...state,
                squares,
                turn,
                isFinish,
                isWinP1,
                reverse,
                activeIndex,
                location,
                index,
                active,
            }
        }
        case BACK_TO_STEP: {
            let { squares } = state;

            let { turn } = state;
            let { isFinish } = state;
            let { isWinP1 } = state;
            let { reverse } = state;
            let { activeIndex } = state;
            let { location } = state;
            let { index } = state;
            let { active } = state;
            let { returning } = state;
            squares = action.value;
            index = action.i;
            returning = true;
            activeIndex = action.i;
            turn = action.i % 2 === 0 ? true : false;
            return {
                ...state,
                squares,
                turn,
                isFinish,
                isWinP1,
                reverse,
                activeIndex,
                location,
                index,
                active,
                returning
            }

        }
        default:
            return state;



    }

}
function ruleToWin(squares, i) {
    // Kiểm tra hàng dọc    
    let chessNum = 1;
    let TwoSideChecked = 0;
    for (let j = 1; j < 5; j++) {
        if (i - j * 20 >= 0) {
            if (squares[i] === squares[i - j * 20]) {
                chessNum++;
                if (chessNum === 5) {
                    if (
                        (i - 5 * 20 < 0 || (squares[i - 5 * 20] !== squares[i] && squares[i - 5 * 20] !== null))
                        && (i + 20 >= 400 || (squares[i + 20] !== squares[i] && squares[i + 20] !== null))
                    ) {
                        return false;
                    }

                    return true;
                }
            }
            else if (squares[i - j * 20] !== null) {
                TwoSideChecked++;
                break;
            }
            else {
                break;
            }
        }
        else {
            TwoSideChecked++;
            break;
        }
    }
    for (let j = 1; j < 5; j++) {
        if (i + j * 20 < 400 && squares[i] === squares[i + j * 20]) {
            chessNum++;
            if (chessNum === 5) {
                if (i + (j + 1) * 20 >= 400 || (squares[i + (j + 1) * 20] !== squares[i] && squares[i + (j + 1) * 20] !== null)) {
                    if (TwoSideChecked === 1) {
                        return false;
                    }
                }

                return true;
            }
        }
        else {
            break;
        }
    }

    // Kiểm tra hàng ngang
    chessNum = 1;
    TwoSideChecked = 0;
    for (let j = 1; j < 5; j++) {
        if (i % 20 - j >= 0) {
            if (squares[i] === squares[i - j]) {
                chessNum++;
                if (chessNum === 5) {
                    if (
                        (i % 20 - 5 < 0 || (squares[i - 5] !== squares[i] && squares[i - 5] !== null))
                        && (i % 20 + 1 >= 20 || (squares[i + 1] !== squares[i] && squares[i + 1] !== null))
                    ) {
                        return false;
                    }
                    return true;
                }
            }
            else if (squares[i - j] !== null) {
                TwoSideChecked++;
                break;
            }
            else {
                break;
            }
        }
        else {
            TwoSideChecked++;
            break;
        }
    }
    for (let j = 1; j < 5; j++) {
        if (i % 20 + j < 20 && squares[i] === squares[i + j]) {
            chessNum++;
            if (chessNum === 5) {
                if (i % 20 + j + 1 >= 20 || (squares[i + j + 1] !== squares[i] && squares[i + j + 1] !== null)) {
                    if (TwoSideChecked === 1) {
                        return false;
                    }
                }

                return true;
            }
        }
        else {
            break;
        }
    }

    // Kiểm tra chéo trái
    chessNum = 1;
    TwoSideChecked = 0;
    for (let j = 1; j < 5; j++) {
        if (i % 20 - j >= 0 && i - j - j * 20 >= 0) {
            if (squares[i] === squares[i - j - j * 20]) {
                chessNum++;
                if (chessNum === 5) {
                    if (
                        (i % 20 - 5 < 0 || i - 5 * 20 < 0 || (squares[i - 5 - 5 * 20] !== squares[i] && squares[i - 5 - 5 * 20] !== null))
                        && (i % 20 + 1 >= 20 || i + 20 >= 400 || (squares[i + 1 + 20] !== squares[i] && squares[i + 1 + 20] !== null))
                    ) {
                        return false;
                    }
                    return true;
                }
            }
            else if (squares[i - j - j * 20] !== null) {
                TwoSideChecked++;
                break;
            }
            else {
                break;
            }
        }
        else {
            TwoSideChecked++;
            break;
        }
    }
    for (let j = 1; j < 5; j++) {
        if (i % 20 + j < 20 && i + j + j * 20 < 400 && squares[i] === squares[i + j + j * 20]) {
            chessNum++;
            if (chessNum === 5) {
                if (i % 20 + j + 1 >= 20 || i + (j + 1) * 20 >= 400
                    || (squares[i + j + 1 + (j + 1) * 20] !== squares[i] && squares[i + j + 1 + (j + 1) * 20] !== null)) {
                    if (TwoSideChecked === 1) {
                        return false;
                    }
                }

                return true;
            }
        }
        else {
            break;
        }
    }

    // Kiểm tra chéo phải
    chessNum = 1;
    TwoSideChecked = 0;
    for (let j = 1; j < 5; j++) {
        if (i % 20 + j < 20 && i + j - j * 20 >= 0) {
            if (squares[i] === squares[i + j - j * 20]) {
                chessNum++;
                if (chessNum === 5) {
                    if (
                        (i % 20 + 5 >= 20 || i - 5 * 20 < 0 || (squares[i + 5 - 5 * 20] !== squares[i] && squares[i + 5 - 5 * 20] !== null))
                        && (i % 20 - 1 < 0 || i + 20 >= 400 || (squares[i - 1 + 20] !== squares[i] && squares[i - 1 + 20] !== null))
                    ) {
                        return false;
                    }
                    return true;
                }
            }
            else if (squares[i + j - j * 20] !== null) {
                TwoSideChecked++;
                break;
            }
            else {
                break;
            }
        }
        else {
            TwoSideChecked++;
            break;
        }
    }
    for (let j = 1; j < 5; j++) {
        if (i % 20 - j >= 0 && i - j + j * 20 < 400 && squares[i] === squares[i - j + j * 20]) {
            chessNum++;
            if (chessNum === 5) {
                if (i % 20 - j - 1 < 0 || i + (j + 1) * 20 >= 400
                    || (squares[i - (j + 1) + (j + 1) * 20] !== squares[i] && squares[i - (j + 1) + (j + 1) * 20] !== null)) {
                    if (TwoSideChecked === 1) {
                        return false;
                    }
                }

                return true;
            }
        }
        else {
            break;
        }
    }

    return false;
}


export default myReducer;