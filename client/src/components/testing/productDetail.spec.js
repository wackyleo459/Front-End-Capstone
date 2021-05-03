import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import React from 'react';
import App from '../App.jsx';
import ProductDetail from '../ProductDetail.jsx';
import ProductInfo from '../Products/ProductInfo.jsx';
import ImageGallery from '../Products/ImageGallery.jsx';
import StyleSelector from '../Products/StyleSelector.jsx';
import AddCart from '../Products/AddCart.jsx';


configure({ adapter: new Adapter() });

describe('Reviews Component', () => {
  it("Should render application without crashing", () => {
    shallow(<ProductDetail />);
  });
  it('Should render the Image Gallery without crashing', () => {
    shallow(<ImageGallery/>);
  });
  it('Should render the Product Info without crashing', () => {
    shallow(<ProductInfo/>);
  });
  it('Should render the Style Selector without crashing', () => {
    shallow(<StyleSelector/>);
  });
  it('Should render the Add to Cart without crashing',() => {
    shallow(<AddCart />);
  });
});
