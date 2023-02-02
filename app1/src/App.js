import React, { Suspense } from 'react';
const RemoteApp = React.lazy(() => import('pippo/App'));
const RemoteApp3 = React.lazy(() => import('app3/App'));

const App = () => {
  return (
    <div>
      <div
        style={{
          margin: '10px',
          padding: '10px',
          textAlign: 'center',
          backgroundColor: 'greenyellow',
        }}
      >
        <h1>App1</h1>
      </div>
      <div style={{ border: '1px solid black' }}>
        <Suspense fallback={'loading...'}>
          <RemoteApp3 />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
