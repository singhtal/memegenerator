import React, {Component} from 'react';
import {connect} from 'react-redux';

class Mymemes extends Component {
    render(){
        return(
            <div>
                {
                    this.props.myMemes.map((meme, index) => {
                        return(
                            <img key={index} src={meme.data.url} alt="my-meme" className="my-meme-image"/>
                        )
                    })
                }
            </div>
        );
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, null)(Mymemes);