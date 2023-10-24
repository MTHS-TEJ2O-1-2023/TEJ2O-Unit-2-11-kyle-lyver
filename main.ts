/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Kyle Lyver
 * Created on: Oct 2023
 * this program creates two numbers and compares the two numbers
*/

// clean up
basic.clearScreen()
basic.pause(1000)
basic.showIcon(IconNames.Happy)

// give variable number
let num0: number
let num1: number

// if else statement for if num0 is bigger than num1
input.onGesture(Gesture.Shake, function () {
  if (num0 > num1) {
    num0 = randint(0, 99)
    basic.showNumber(num0)
    num1 = randint(0, 99)
    basic.showString('>')
    basic.showNumber(num1)
  } else {
    basic.showNumber(num0)
    basic.showString('<')
    basic.showNumber(num1)
  }
})

// display number 1
input.onButtonPressed(Button.A, function () {
  basic.showString('#1')
  basic.showNumber(num0)
})

// display number 2
input.onButtonPressed(Button.B, function () {
  basic.showString('#2')
  basic.showNumber(num1)
})
