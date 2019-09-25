import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import store from './store/store';
import appActions from './actions/App';

class Reservations extends React.Component {
  componentDidMount() {
    axios.get('http://52.53.165.30:3001/api/listings', {
      params: {
        listing: document.URL.split('/').reverse()[1],
      },
    })
      .then((listing) => {
        store.dispatch(appActions.changeListing(listing.data));
        console.log(listing);
      })
      .then(() => {
        axios.get('http://52.53.165.30:3001/api/bookeddates', {
          params: {
            listing: document.URL.split('/').reverse()[1],
          },
        })
          .then((bookedDates) => {
            store.dispatch({
              type: 'CHANGE_BOOKED_DATES',
              bookedDates: bookedDates.data,
            });
            console.log(bookedDates);
          });
      })
      .catch((error) => {
        console.log('error fetching listing data', error);
      });
  }

  // eslint-disable-next-line class-methods-use-this
  createBookedDate() {
    axios.post(`http://52.53.165.30:3001/api/bookeddates/${document.URL.split('/').reverse()[0]}`, 
      {
        listingId: document.URL.split('/').reverse()[0],
        year: 2019,
        month: 2,
        date: 15,
      })
      .then((response) => {
        console.log('successfully created booked date', response);
      })
      .catch((error) => {
        console.log('error creating booked dates', error);
      });
  }

  // put (update)
  // eslint-disable-next-line class-methods-use-this
  updateListing() {
    axios.put(`http://52.53.165.30:3001/api/listings/${document.URL.split('/').reverse()[1]}`,
      {
        id: 9000000,
        maxGuests: 5,
      })
      .then((response) => {
        console.log('successfully updated listing', response);
      })
      .catch((error) => {
        console.log('error updating listing', error);
      });
  }

  // delete (delete)
  // eslint-disable-next-line class-methods-use-this
  deleteBookedDate() {
    axios.delete(`http://52.53.165.30:3001/api/bookeddates/${document.URL.split('/').reverse()[0]}`,
      {
        listingId: 9000000,
      })
      .then((response) => {
        console.log('successfully deleted booked date', response);
      })
      .catch((error) => {
        console.log('error deleting booked date', error);
      });
  }

  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

document.addEventListener('click', (e) => {
  if (e.target.tagName !== 'svg' && e.target.tagName !== 'path') {
    if (!(e.target.id === 'checkin' || e.target.id === 'checkout' || e.target.className.includes('calendar'))) {
      store.dispatch(appActions.changeViewCalendar(false));
    }
  }
});

document.addEventListener('click', (e) => {
  if (e.target.tagName !== 'svg' && e.target.tagName !== 'path') {
    if (!e.target.className.includes('guests')) {
      store.dispatch(appActions.changeGuestContainerView(false));
    }
  }
});

document.addEventListener('scroll', () => {
  store.dispatch({
    type: 'CHANGE_Y_AXIS',
    windowY: window.scrollY,
  });
});

export default { Reservations, React, ReactDOM };


