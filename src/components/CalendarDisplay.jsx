import React, { Component } from 'react';
import { connect } from 'react-redux';
import EditButton from './EditButton';
import AddButton from './AddButton';
import Calendar from 'react-calendar'
import CalendarHeader from './CalendarHeader';

class CalendarDisplay extends Component {
  //const { date, selectedPlant } = plantData;
  //onChange = date => this.setState({ date })

  render(){
    return(
      <div calssName="full-calendar">
        <div className="cal-header">
          <h3>Calendar</h3>
          <CalendarHeader/>
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
            padding: 0 2rem;
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
    //date: new Date(),
  };
};

export default connect(mapStateToProps)(CalendarDisplay);
