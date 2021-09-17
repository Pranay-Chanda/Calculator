const history = document.querySelector('#history');
const output = document.querySelector('#output')
var numbers = document.querySelectorAll('.number');
var operator = document.querySelectorAll('.operator');
var flag = true;
var equalFlag = true;


function getOutputValue() {
    return (output.innerHTML);
}

function getHistoryValue() {
    return (history.innerHTML);
}

function setOutput(num) {
    output.innerHTML = num;
}

function setHistory(num) {
    history.innerHTML = num;
}

function printOutput(num) {
    if (output.innerHTML !== '') {
        output.innerHTML = output.innerHTML + num;
    } else {
        output.innerHTML = num;
    }
}


for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener('click', function () {
        // console.log('clicked ' + this.id);
        flag = true;
        if (this.id === 'allClear') {
            setOutput('');
            setHistory('');
            equalFlag = true;
        } else if (this.id === 'delete') {
            var str = getOutputValue();
            str = str.slice(0, str.length - 1);
            setOutput('');
            printOutput(str);

        } else if (this.id === 'equals') {
            if (getOutputValue() !== '' && getHistoryValue() !== '' && equalFlag === true) {
                setHistory(`${getHistoryValue()} ${getOutputValue()}`);
                // console.log(`${result}  ${getOutputValue()}`);
                var result = eval(getHistoryValue());
                setOutput(result);
                equalFlag = false;
            }
        } else if (this.id === 'divide') {
            if (getOutputValue() !== '') {
                setHistory(`${getOutputValue()} /`);
                setOutput('');
                equalFlag = true;
            }
        } else if (this.id === 'multiply') {
            if (getOutputValue() !== '') {
                setHistory(`${getOutputValue()} *`);
                setOutput('');
                equalFlag = true;
            }
        } else if (this.id === 'add') {
            if (getOutputValue() !== '') {
                setHistory(`${getOutputValue()} +`);
                setOutput('');
                equalFlag = true;
            }
        } else if (this.id === 'subtract') {
            if (getOutputValue() !== '') {
                setHistory(`${getOutputValue()} -`);
                setOutput('');
                equalFlag = true;
            }
        } else if (this.id === 'percent') {
            if (getOutputValue() !== '') {
                setHistory(`${getOutputValue() / 100} *`);
                setOutput('');
                equalFlag = true;
            }
        }

    });
}

for (var i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', function () {
        // console.log(flag);
        if (flag === true && this.id === '.') {
            printOutput(this.id);
            flag = false;
        } else if (this.id !== '.') {
            printOutput(this.id);

        }

    });

}