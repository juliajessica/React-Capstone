import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar'
import CalendarHeader from './CalendarHeader';
import PropTypes from 'prop-types';

function CurrentDate(props) {
  // var today = new Date();
  // var dd = today.getDate();
  // var mm = today.getMonth()+1; //January is 0!
  // var yyyy = today.getFullYear();
  //
  // if(dd<10) {
  //   dd = '0'+dd
  // }
  //
  // if(mm<10) {
  //  mm = '0'+mm
  // }
  // today = mm + '/' + dd + '/' + yyyy;
  // document.write(today);
    return(
      <div>
        <div className="date-display">
          <p></p>
        </div>

        <style jsx>{`

        `}
        </style>
      </div>
    );

}


CurrentDate.propTypes = {
  plantData: PropTypes.object,
  dispatch: PropTypes.func,
  selectedPlant: PropTypes.string,
  modalIsOpen: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    plantData: state.plantData,
    selectedPlant: state.selectedPlant,
    date: state.date
  };
};

export default connect(mapStateToProps)(CurrentDate);
