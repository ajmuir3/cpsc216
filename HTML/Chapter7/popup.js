let okPressed = window.confirm("Would you like to see a popup window?");

if (okPressed) {
  let myWindow = window.open("","","width=250, height=100");
  myWindow.document.writeln("<h1>Hello, Popup!</h1>");
}
