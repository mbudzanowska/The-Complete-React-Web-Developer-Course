
// BABEL CONFIGURATION:
// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
//  THEN: live-server public

console.log('app.js is running')

// jsx - javascript xml

const app = {
    title: 'Indecision App!!!',
    subtitle: 'best app in the world',
    options: [],
}

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderAll();
};

const removeAll = () => {
    app.options = [];
    renderAll();
}

const numbers = [33, 123, 53];

const appRoot = document.getElementById('app');


const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);

}

const renderAll = () => {
    const template = (
        <div>
            <h1>{app.title? app.title : undefined}</h1>
            <p>{app.subtitle? app.subtitle : undefined}</p>
            <p>{app.options.length > 0 ? 'Here are your options' : 'no options'}</p>
           <button 
           disabled={app.options.length===0}
           onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove all</button>
            <ol>
                {
                    app.options.map(option =><li key={option}>{option}</li> )
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot)
};

renderAll();