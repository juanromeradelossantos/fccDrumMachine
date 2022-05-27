const links = [
{
  keyCode: 81,
  keyTrigger: 'Q',
  id: 'Heater-1',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },

{
  keyCode: 87,
  keyTrigger: 'W',
  id: 'Heater-2',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },

{
  keyCode: 69,
  keyTrigger: 'E',
  id: 'Heater-3',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },

{
  keyCode: 65,
  keyTrigger: 'A',
  id: 'Heater-4',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },

{
  keyCode: 83,
  keyTrigger: 'S',
  id: 'Clap',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },

{
  keyCode: 68,
  keyTrigger: 'D',
  id: 'Open-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },

{
  keyCode: 90,
  keyTrigger: 'Z',
  id: "Kick-n'-Hat",
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },

{
  keyCode: 88,
  keyTrigger: 'X',
  id: 'Kick',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },

{
  keyCode: 67,
  keyTrigger: 'C',
  id: 'Closed-HH',
  url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }];



class DrumMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      volume: 1 };


    this.handleClick = this.handleClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.changeVolume = this.changeVolume.bind(this);
  }

  handleClick(e) {
    this.setState({ id: links.filter(x => x.keyTrigger == e.target.value)[0].id });
    document.getElementById(e.target.value).volume = this.state.volume;
    document.getElementById(e.target.value).play();
  }

  handleKeyDown(e) {
    this.setState({ id: links.filter(x => x.keyTrigger == e.key.toUpperCase())[0].id });
    document.getElementById(e.key.toUpperCase()).volume = this.state.volume;
    document.getElementById(e.key.toUpperCase()).play();
    document.getElementById(links.filter(x => x.keyTrigger == e.key.toUpperCase())[0].id).classList.add("drum-pad-active");
  }

  handleKeyUp(e) {
    document.getElementById(links.filter(x => x.keyTrigger == e.key.toUpperCase())[0].id).classList.remove("drum-pad-active");
  }

  changeVolume(e) {
    this.setState({ volume: e.target.valueAsNumber / 100 });
  }


  render() {
    let btns = links.map((x) => /*#__PURE__*/
    React.createElement("button", { onClick: this.handleClick, value: x.keyTrigger, className: "drum-pad rounded-3", id: x.id }, x.keyTrigger, /*#__PURE__*/
    React.createElement("audio", { className: "clip", id: x.keyTrigger, src: x.url })));



    return /*#__PURE__*/(
      React.createElement("div", { id: "background", className: "d-flex flex-column justify-content-center align-items-center h-100 w-100", tabIndex: "0", onKeyDown: this.handleKeyDown, onKeyUp: this.handleKeyUp }, /*#__PURE__*/
      React.createElement("h1", null, "Drum Machine v1.0"), /*#__PURE__*/
      React.createElement("div", { id: "drum-machine", className: "rounded" }, /*#__PURE__*/
      React.createElement("div", { id: "left" }, /*#__PURE__*/
      React.createElement("div", { id: "display", className: "rounded" },
      this.state.id), /*#__PURE__*/

      React.createElement("div", { id: "volume-label" }, "Volume"), /*#__PURE__*/
      React.createElement("input", { id: "volume-bar", type: "range", defaultValue: "100", onChange: this.changeVolume })), /*#__PURE__*/

      React.createElement("div", { id: "pad" },
      btns))));




  }}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(DrumMachine, null));