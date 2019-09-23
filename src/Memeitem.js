import React, {Component} from 'react';
import {createMeme} from './actions';
import {connect} from 'react-redux';

class Memeitem extends Component{
    constructor(){
        super();

        this.state = {
            hovered: false
        }
    }
    postMeme(){
        const {text0, text1} = this.props;

        const meme_obj = {
            template_id : this.props.meme.id,
            text0, 
            text1
        }

        this.props.createMeme(meme_obj);
    }
    render(){
        return (
            <div className="meme-item"
                onMouseEnter={() => this.setState({hovered: true})}
                onMouseLeave={() => this.setState({hovered: false})}
                onClick={() => this.postMeme()}
            >
                <img 
                src={this.props.meme.url}
                alt={this.props.meme.name}
                className={this.state.hovered === true ? "meme-image darken-image" : "meme-image"}
                ></img>
                <p className={this.state.hovered === true ? "meme-text" : "no-text"}>{this.props.meme.name}</p>
            </div>
        );
    }
}

export default connect(null, {createMeme})(Memeitem);