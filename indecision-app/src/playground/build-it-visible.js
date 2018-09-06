
let isVisible = false;

const toggleVisibility = () => {
    isVisible = !isVisible;
    renderAll();
}

const appRoot = document.getElementById('app');

const renderAll = () => {
    const template = (
        <div>
          <h1>Visibility Toggle</h1>
          <button onClick={toggleVisibility}>{isVisible ? 'Hide details' : 'Show details'}</button>
          {
              isVisible && <p>Some hidden text</p>
          }
        </div>
    );
    ReactDOM.render(template, appRoot)
};

renderAll();