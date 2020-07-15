import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Core from './components/Core';

const config = {
	assets: [ 'BTC', 'ETH', 'USD', 'EUR', 'DAI', 'RLC' ],
	addresses:
	{
		app:
		{
			trusted: '0xbfE5C1eacD47ba0C9876cc541a3dF8D70d221D4f',
			basic:   'not-available-yet',
		},
		oracle:
		{
			trusted: '0xB2bb24cEa9aA32c0555F934C57145414286b70f0',
			basic:   '0x2760E0CE853b3FfE8d55A6642e597D466A00C8f0',
		},
	},
	requestArgs:
	{
		iexec_tee_post_compute_fingerprint: "7f9f64e152f30d3f6e450d18fd64d6cd5d323d2af3fd153a3697a155a0d8f113|aa413ae09b0483bf8bbaf83cf4cc6957|13076027fc67accba753a3ed2edf03227dfd013b450d68833a5589ec44132100",
		iexec_tee_post_compute_image:       "iexechub/tee-worker-post-compute:1.0.0",
	},
	default_endpoint: 'https://my.api.mockaroo.com/iexecfakepricefeed.json?key=e16da030',
};

ReactDOM.render(<Core config={config}/>, document.getElementById('root'));
