class VisibilityToggle extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      visibility: false
    }
    this.handleVisibility = this.handleVisibility.bind(this)
  }

  handleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      }
    });
  }

  render() {
    return (
       <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleVisibility}>
          {this.state.visibility ? 'Hide details' : 'Show details'}
        </button>
        {this.state.visibility  && (
          <div>
            <p>Hey. These are some details you can now see!</p>
          </div>
        )}
    </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle></VisibilityToggle>, document.getElementById('app'));

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   render();
// };

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. These are some details you can now see!</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();
