import React from 'react';

class Square extends React.Component {
    render() {
        const { value, className, onClick } = this.props;
        return (
           <button type="button" className={className} onClick={() => onClick()}>
        {value}
      </button>
        )
    }
}


export default Square;