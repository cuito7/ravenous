import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinesList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="BusinessList">
        {this.props.businesses.map(
          business => {
            return <Business business={business} key={business.id}/>
          }
        )}
      </div>
    );
  }
}

export default BusinesList;