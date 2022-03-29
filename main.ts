input.onButtonPressed(Button.A, function () {
    if (input.temperature() == -5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
    }
    if (input.temperature() == -4) {
        basic.showString("-4")
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    if (input.temperature() == -3) {
        basic.showString("-3")
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
    }
    if (input.temperature() == -2) {
        basic.showString("-2")
    }
    if (input.temperature() == -1) {
        basic.showString("-1")
    }
    if (input.temperature() == 0) {
        basic.showString("0")
    }
    if (input.temperature() == 1) {
        basic.showString("1")
    }
    if (input.temperature() == 2) {
        basic.showString("2")
    }
    if (input.temperature() == 3) {
        basic.showString("3")
    }
    if (input.temperature() == 4) {
        basic.showString("4")
    }
    if (input.temperature() == 5) {
        basic.showString("5")
    }
    if (input.temperature() == 6) {
        basic.showString("6")
    }
    if (input.temperature() == 7) {
        basic.showString("7")
    }
    if (input.temperature() == 8) {
        basic.showString("8")
    }
    if (input.temperature() == 9) {
        basic.showString("9")
    }
    if (input.temperature() == 10) {
        basic.showString("10")
    }
    if (input.temperature() == 11) {
        basic.showString("11")
    }
    if (input.temperature() == 12) {
        basic.showString("12")
    }
    if (input.temperature() == 13) {
        basic.showString("13")
    }
    if (input.temperature() == 14) {
        basic.showString("14")
    }
    if (input.temperature() == 15) {
        basic.showString("15")
    }
    if (input.temperature() == 16) {
        basic.showString("16")
    }
    if (input.temperature() == 17) {
        basic.showString("17")
    }
    if (input.temperature() == 18) {
        basic.showString("18")
    }
    if (input.temperature() == 19) {
        basic.showString("19")
    }
    if (input.temperature() == 20) {
        basic.showString("20")
    }
    if (input.temperature() == 21) {
        basic.showString("21")
    }
    if (input.temperature() == 22) {
        basic.showString("22")
    }
    if (input.temperature() == 23) {
        basic.showString("23")
    }
    if (input.temperature() == 24) {
        basic.showString("24")
    }
    if (input.temperature() == 25) {
        basic.showString("25")
    }
    if (input.temperature() == 26) {
        basic.showString("26")
    }
    if (input.temperature() == 27) {
        basic.showString("27")
    }
    if (input.temperature() == 28) {
        basic.showString("28")
    }
    if (input.temperature() == 29) {
        basic.showString("29")
    }
    if (input.temperature() == 30) {
        basic.showString("30")
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("" + (Math.randomBoolean()))
    if (true) {
        basic.showString("JA")
    } else if (false) {
        basic.showString("NEI")
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    if (input.compassHeading() == 45) {
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (input.compassHeading() == 90) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # . .
            . . . . .
            . . . . .
            `)
    }
    if (input.compassHeading() == 135) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # . . .
            # . . . .
            `)
    }
    if (input.compassHeading() == 180) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . # . .
            . . # . .
            `)
    }
    if (input.compassHeading() == 225) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . # .
            . . . . #
            `)
    }
    if (input.compassHeading() == 270) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # # #
            . . . . .
            . . . . .
            `)
    }
    if (input.compassHeading() == 315) {
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
    if (input.compassHeading() == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
})
