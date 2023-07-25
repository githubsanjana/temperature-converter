const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('tempdiff');
    const valueTemp = tempSelected.options[tempSelected.selectedIndex].value;

    const celtofah = (cel) => {
        let fahrenheit = Math.round((cel * 9 / 5) + 32);
        return fahrenheit;
    }

    const fahtocel = (fah) => {
        let celcius = Math.round((fah - 32) * 5 / 9);
        return celcius;
    }

    let result;
    if (valueTemp === 'cel') {
        result = celtofah(numberTemp);
        document.getElementById('resultcontainer').innerHTML = `${numberTemp}&deg;C is equal to ${result}&deg;F`;
    } else {
        result = fahtocel(numberTemp);
        document.getElementById('resultcontainer').innerHTML = `${numberTemp}&deg;F is equal to ${result}&deg;C`;
    }
}
