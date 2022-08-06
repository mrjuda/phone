// Brands.test.js

import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Phones from '../components/phones/Phones';
import App from '../App';
import store from '../redux/store';

describe('Phones.js file rendering ', () => {
  test('Phones renders correctly', () => {
    const phones = render(
      <Provider store={store}>
        <App>
          <Phones />
        </App>
      </Provider>,
    );
    expect(phones).toMatchSnapshot();
  });

  it('Brand component renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App>
            <Phones />
          </App>
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
