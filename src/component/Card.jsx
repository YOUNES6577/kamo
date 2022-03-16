import React from 'react'
import "../asset/css/produit.css"

export default class Card extends React.Component {
    constructor(props) {
        super(props)
        this.state = ({
            Title: this.props.title,
            Description:this.props.description,
            ImgSrc:this.props.imgSrc
        })
    }
    
    render() {
        return <div className="container">
        <div className="card card-pr">
           <div className="card__image-container">
             <img height="270" width="365" className="card__image" src={this.state.ImgSrc} alt=""/>
          </div>
            
            <svg className="card__svg" viewBox="0 0 800 500">
      
              <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333"/>
              <path className="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" strokeWidth="3" fill="transparent"/>
            </svg>
          
           <div className="card__content">
             <h1 className="card__title">{this.state.Title}</h1>
           <p> {this.state.Description}</p>
          </div>
        </div>
      </div>

        
    }
}