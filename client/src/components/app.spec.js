import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import App from './App.jsx';
import Modal from './RatingsAndReviews/Modals.jsx';
import Reviews from './RatingsAndReviews/Reviews.jsx';
import Ratings from './RatingsAndReviews/Ratings.jsx';

configure({ adapter: new Adapter() });

describe('Reviews Component', () => {
  it("Should render application without crashing", () => {
    shallow(<App />);
  });
  it('Should render the new review modal without crashing', () => {
    shallow(<Modal/>);
  });
  it('Should render the review feed without crashing', () => {
    shallow(<Reviews/>);
  });
});

describe('Ratings Component', () => {
  it('Should render the Rating component without crashing', () => {
    shallow(<Ratings/>);
  });
});