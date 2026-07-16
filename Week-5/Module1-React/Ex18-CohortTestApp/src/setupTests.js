import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

// Configure Enzyme with the React 17 adapter.
configure({ adapter: new Adapter() });
