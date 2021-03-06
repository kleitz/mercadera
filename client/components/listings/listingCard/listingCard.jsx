ListingCard = React.createClass({
  render() {
    return (
      <div className="grid-item">
        <div className="card">
          <a href="#">
            <div className="card-thumbnail">
              <img src={this.props.cardThumbnail} alt="" className="img-responsive"/>
              <div className="border1"></div>
            </div>
          </a>

          <div className="card-content">
            <a href="#" className="title">{this.props.name}</a>
            <h5 className="price no-margin">{this.props.price}</h5>
            <div className="city subtle-text">{this.props.city}</div>
          </div>

          <a href="/profile" className="card-seller">
            <div className="media">
              <div className="media-left">
                <img className="media-object img-circle" src={this.props.sellerAvatar} alt="..." />
              </div>
              <div className="media-body">
                <div className="username">{this.props.sellerName}</div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }

});
