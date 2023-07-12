function backgroundHandler(self) {
    var target = document.querySelector('body');
    if(self.value === "darkmode")
    {
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        self.value = 'whitemode';
    }
    else {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        self.value = 'darkmode';
    }
}

function displayInputValue() {
    var input = document.getElementById('inputText');
    var output = document.getElementById('output');
  
    output.textContent = input.value;
}