import React from "react";
import '../App.css';

class BackgroundChange extends React.Component {
  constructor() {
    super();
    this.state = {
      bgColors: ["red", "green", "yellow", "blue"],
      currentIndex: 0
    };
    this.refArray = [];
  }
  componentDidMount() {
    this.changeBgColor();
  }

  changeBgColor() {
    const { currentIndex, bgColors } = this.state;
    document.body.style.backgroundColor = bgColors[currentIndex];
  }
  stateValue = (value) => {
    const { currentIndex } = this.state;
    this.setState(
      {
        currentIndex: currentIndex + value
      },
      () => {
        this.changeBgColor();
        //document.body.style.backgroundColor = this.state.bgColor;
      }
    );
  };
  changeColor = () => {
    const { currentIndex, bgColors } = this.state;
    if (currentIndex < bgColors.length - 1) {
      this.stateValue(1);
    }
    else
    {
       this.stateValue(-(bgColors.length - 1))
    }
  };
  render() {
    const { currentIndex, bgColors } = this.state;

    return (
      <React.Fragment>
        <div className="container">
          <div className='wrapper'>
              <button className='btn btn-success' onClick={this.changeColor}>Click Me</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BackgroundChange;