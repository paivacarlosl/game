input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("Prepare-se!")
    basic.pause(randint(1000, 5000))
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        # # # # #
        # # # # #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    cont2 += 1
    basic.showLeds(`
        . . # # #
        . . # # #
        . . # # #
        . . . # #
        . . . # #
        `)
    basic.pause(1000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P1, function () {
    let Tocar = 0
    if (Tocar == 0) {
        cont1 += 1
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # . .
            # # . . .
            # # . . .
            `)
        basic.pause(1000)
        basic.clearScreen()
    }
})
let cont2 = 0
let cont1 = 0
cont1 += 0
cont2 += 0
basic.forever(function () {
	
})
