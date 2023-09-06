import './Card.css'

function Card({ dataImage, children }) {
    return (
      <div className="card-wrap">
        <div className="card">
          <div className="card-bg" style={{ backgroundImage: `url(${dataImage})` }}></div>
          <div className="card-info">
            {children}
          </div>
        </div>
      </div>
    );
  }

export default Card;