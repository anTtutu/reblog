import { CALL_API } from 'redux-api-middleware';

import {
  ACCESS_LOADING,
  ACCESS_SUCCESS,
  REQUEST_FAILURE,
} from '../constants/action';

import { ACCESS_URL } from '../constants/api';
import { 
  CLIENT_ID,
  CLIENT_SECRET,
  SITE_URL,
} from '../constants/config';

export default (code) => {
  return {
    [CALL_API]: {
      endpoint: ACCESS_URL,
      headers: {
        'Accept': 'application/json',
      },
      method: 'POST',
      types: [
        ACCESS_LOADING,
        ACCESS_SUCCESS,
        REQUEST_FAILURE,
      ],
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code,
        redirect_uri: SITE_URL,
      }),
    },
  };
};