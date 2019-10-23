import React from 'react';
import './Table.css';
import Square from '../Square/Square';


class Table extends React.Component {
    constructor(props) {
        super(props);
        this.location = [];
        this.index = 0;
        this.active = '';
        this.reverse = false;
        this.state = {
            squares: Array(400).fill(null),
            turn: true,
            isFinish: false,
            isWinP1: false,
            reverse: false,
            activeIndex: -1
        };
        this.returning = false;
    }
    onPlayAgainClick() {
        this.setState({
            squares: Array(400).fill(null),
            turn: true,
            isFinish: false,
            isWinP1: false,
        })
    }
    onchangeTurn(value, i) {
        console.log(i);
        this.setState({ squares: value });
        this.index = i;
        this.returning = true;
        this.setState({ activeIndex: i });

        console.log(this.state.activeIndex);
        this.setState({
            squares: value,
            turn: i % 2 === 0 ? true : false,

        })
    }
    mapReverse(array, fn) {
        return array.reduceRight(function (result, el) {
            result.push(fn(el));
            return result;
        }, []);
    }
    onReverse() {
        this.reverse = !this.reverse;
        this.setState({ reverse: !this.state.reverse });

        this.location = this.mapReverse(this.location, function (i) { return i; })


    }
    createTable = () => {
        let table = []
        let { squares, onClickChoosen } = this.props;
        if (!squares) squares = Array(400).fill(null);
        // Outer loop to create parent
        for (let i = 0; i < 20; i++) {
            let arr_child = []
            //Inner loop to create arr_child
            for (let j = 0; j < 20; j++) {

                if (squares[20 * i + j] !== null) {
                    arr_child.push(<Square key={20 * i + j} onClick={() => onClickChoosen(20 * i + j)}
                        className="square"
                        value={squares[20 * i + j]} />)
                }
                else {
                    arr_child.push(<Square key={20 * i + j} onClick={() => onClickChoosen(20 * i + j)} className="square" value={'\u00A0'} />)
                }
            }



            //Create the parent and add the arr_child
            table.push(<div className="board-row" key={i}>{arr_child}</div>)
        }
        return table
    }

    render() {
        const { location, activeIndex, onchangeTurn, onRestart, reverse } = this.props;
        return (
            <div className="container">

                <div className="row d-flex justify-content-center">

                    <div className="col-6">
                        <div className="board">
                            {this.createTable()}
                        </div>

                    </div>
                    <div className="col-6">
                        <button className="btn btn-success" onClick={() => this.onReverse()}>Reverse {this.state.reverse ? 'DESC' : 'ASC'}</button>
                        <div>
                            {
                                
                                reverse ? location.reverse().map((el, i) => <div><div className={`btn btn-primary ${activeIndex === i ? 'active' : ''}`} onClick={() => onchangeTurn(el.squares, i)}>Turn: {location.length - i} - {el.player} X : {el.x} and Y : {el.y}</div>
                                    <div className={`btn btn-danger ${activeIndex === i ? 'active' : ''}`}>({el.x}, {el.y})</div></div>) : ""
                                    // location.map((el, i) => <div><div className={`btn btn-primary ${activeIndex === i ? 'active' : ''}`} onClick={() => onchangeTurn(el.squares, i)}>Turn: {i + 1} - {el.player} X : {el.x} and Y : {el.y}</div>
                                    //     <div className={`btn btn-danger ${activeIndex === i ? 'active' : ''}`}>({el.x}, {el.y})</div></div>)
                            }
                        </div>
                        <button className="btn-lg btn-primary my-2 font-weight-bold" onClick={() => onRestart()}>Play Again</button>
                    </div>

                </div>
            </div>
        );
    }
}

export default Table