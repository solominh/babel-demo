require('babel-polyfill');
require('./app.js');


// import {ThingA, ThingB, ThingC} from './things';

import * as  Things from './things';
Things.ThingA();
Things.ThingB();
Things.ThingC();


