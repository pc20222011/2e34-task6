let C = 0
let F = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    C = input.temperature()
    F = 1.8 * C + 32
    basic.showNumber(F)
})
