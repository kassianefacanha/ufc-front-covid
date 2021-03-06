import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style-list.scss";

class ListActionCard extends Component {
  render() {
    return (
      <>
        <div className="action-cardlist">
          <div className="action-cardlist__textlist">
            <div className="item">
              <h1 className="action-card__textlist--titlelist">
                {this.props.title}
              </h1>
              <h2 className="action-cardlist__textlist--sublist">
                {this.props.sub}
              </h2>
              <a className="action-cardlist__textlist--linklist" href="/action">
                <Link to="/action">
                  <button> Saiba mais</button>
                </Link>
              </a>
            </div>
            <div className="item">
              <img
                alt="card"
                src={this.props.image}
                className="action-cardlist__imagelist"
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ListActionCard;
