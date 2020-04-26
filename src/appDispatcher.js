import { Dispatcher } from 'flux';

const dispatcher = new Dispatcher();

//Its a singleton there is only one dispatcher per app
export default dispatcher;