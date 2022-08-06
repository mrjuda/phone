// Brands.test.js

import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Brands from '../components/brands/Brands';
import App from '../App';
import store from '../redux/store';

describe('Brands.js file rendering ', () => {
  test('Brands renders correctly', () => {
    const brands = render(
      <Provider store={store}>
        <App>
          <Brands />
        </App>
      </Provider>,
    );
    expect(brands).toMatchSnapshot();
  });

  it('Brand component renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App>
            <Brands />
          </App>
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
