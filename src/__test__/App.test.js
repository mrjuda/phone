// App.test.js

import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import store from '../redux/store';
import App from '../App';

describe(' Test App Rendering ', () => {
  it('App.js file renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <App />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
