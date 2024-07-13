const root = document.getElementById('root')
const p = React.createElement('p', null, 'hola')
const reactRoot = ReactDOM.createRoot(root);

reactRoot.render(p)