import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import App from '../App.jsx';
import Modal from '../RatingsAndReviews/Modals.jsx';
import Reviews from '../RatingsAndReviews/Reviews.jsx';
import Ratings from '../RatingsAndReviews/Ratings.jsx';
import List from '../Q&A/List.jsx';
import Answers from '../Q&A/Answers.jsx';
import ListEntry from '../Q&A/ListEntry.jsx';
import Answer from '../Q&A/Answer.jsx';
import QandA from '../Q&A/q&a.jsx';

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

describe('Questions List', () => {
  it('Should render the q&a component without crashing', () => {
    shallow(<QandA />);
  });
  it('Should render the Questions List component without crashing', () => {
    shallow(<List/>);
  });
  it('Should render the List entries component without crashing', () => {
    shallow(<ListEntry />);
  });
  it('Should render the Answers list component without crashing', () => {
    shallow(<Answers />);
  });
  it('Should render individual answer components without crashing', () => {
    shallow(<Answer />);
  });
});