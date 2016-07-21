import React from 'react';
import { render } from 'react-dom';
import Assets from '/imports/containers/Assets';

Meteor.startup(() => render(<Assets />, document.getElementById('root')));
