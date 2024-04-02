import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchApp from './serach/searchApp';

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
        <React.StrictMode>
                           <SearchApp />
        </React.StrictMode>,
);
