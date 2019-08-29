import { connect } from 'react-redux';
import App from '../components/App';
import actionCreators from '../actions/App';
import calendarDatesActionCreators from '../actions/CalendarDates';

const mapStateToProps = (state) => ({
  listing: state.listing,
  viewCalendar: state.viewCalendar,
  startDateView: state.startDateView,
  selectedStartDate: state.selectedStartDate,
  selectedEndDate: state.selectedEndDate,
  guestContainerView: state.guestContainerView,
  selectedAdults: state.selectedAdults,
  selectedChildren: state.selectedChildren,
  selectedInfants: state.selectedInfants,
  selectedDates: state.selectedDates,
});

const mapDispatchToProps = (dispatch) => ({
  changeStartDateView: (boolean) => {
    dispatch(actionCreators.changeStartDateView(boolean));
  },
  changeViewCalendar: (boolean) => {
    dispatch(actionCreators.changeViewCalendar(boolean));
  },
  changeGuestContainerView: (boolean) => {
    dispatch(actionCreators.changeGuestContainerView(boolean));
  },
  changeSelectedDates: (selectedStartDate, selectedEndDate) => {
    const startDate = new Date(
      selectedStartDate.year,
      selectedStartDate.month,
      selectedStartDate.day,
    );
    const endDate = new Date(
      selectedEndDate.year,
      selectedEndDate.month,
      selectedEndDate.day,
    );
    const selectedDays = [];
    while (startDate.toDateString() !== endDate.toDateString()) {
      selectedDays.push({
        year: startDate.getFullYear(),
        month: startDate.getMonth(),
        day: startDate.getDate(),
      });
      startDate.setDate(startDate.getDate() + 1);
    }
    selectedDays.push({
      year: endDate.getFullYear(),
      month: endDate.getMonth(),
      day: endDate.getDate(),
    });
    dispatch(calendarDatesActionCreators.changeSelectedDates(selectedDays));
  },
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
