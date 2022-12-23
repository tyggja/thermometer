let c_flag = true;
let temp_data = 0;

basic.forever(() => {
    // periodically, read the temp sensor and
    // store the data into a var
    temp_data = input.temperature();
    pause(2000);
})

// control.runInBackground(() => {
//     basic.showNumber(temp_data)
// })
control.inBackground(() => {
    while (true) {
        basic.showNumber(temp_data)
        basic.pause(100)
    }
})

input.onButtonPressed(Button.A, () => {
    basic.showNumber(get_temp_in_f(temp_data))
})

function get_temp_in_f(temp: number) {
    return temp * 1.8 + 32
}