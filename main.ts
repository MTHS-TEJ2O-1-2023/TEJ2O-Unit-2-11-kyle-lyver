/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Lyver
 * Created on: Oct 2023
 * This program ...
*/

// variable for random numbers
let num0: number
let num1: number

// cleanup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.isGesture(Gesture.Shake.function() {
  if(num0 > num1) {
    num0 = randint(0, 99)
    basic.showNumber(num0)
    num1 = randint(0, 99)
  }
})

input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    basic.showNumber(random_number0)
})

input.onButtonPressed(Button.A, function() {
  basic.clearScreen()
  let num1 = randint(0, 99)
  basic.showNumber(random_number1)
})
