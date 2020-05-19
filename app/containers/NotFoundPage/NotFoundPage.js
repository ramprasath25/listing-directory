/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 */

import React from 'react';
import './style.scss';

export default function NotFound() {
  return (
    <div style={{width: '100%', textAlign: 'center', minHeight: '600px'}}>
      <article>
        <h1>Page not found.</h1>
      </article>
    </div>
  );
}
