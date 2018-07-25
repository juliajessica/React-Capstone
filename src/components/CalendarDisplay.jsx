import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditButton from './EditButton';
import AddButton from './AddButton';
import Calendar from 'react-calendar'
import CalendarHeader from './CalendarHeader';

class CalendarDisplay extends Component {

  render(){
    return(
      <div className="full-calendar">
        <div className="cal-header">
          <h3>Calendar</h3>
          <CalendarHeader/>
          <p>{this.date}</p>
        </div>

        <div className="calendar">
          <Calendar
            onChange={this.onChange}
            value={this.date} />
            <div className="calendar-btns">
              <EditButton/>
              <AddButton/>
            </div>
        </div>
        <style jsx>{`
          .full-calendar {
            height: 565px;
            margin-top: 0rem;
            padding: 0;
            height: 565px;
          }
          .cal-header {
            margin-bottom: 1rem;
          }
          .calendar {
            padding: 0 2rem;
          }

          .calendar-btns {
            display: grid;
            grid-gap: 5px;
            grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
            grid-auto-rows: 75px;
            grid-auto-flow: dense;
            margin-top: 1rem;
            margin-bottom: 2.1rem;
          }
        `}
        </style>
      </div>
    );
  }

}

const mapStateToProps = state => {
  return {
    plantData: state.plantData,
    selectedPlant: state.selectedPlant,
  };
};

export default connect(mapStateToProps)(CalendarDisplay);
