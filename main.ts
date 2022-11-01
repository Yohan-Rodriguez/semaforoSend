radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 4) {
        basic.showString("TC")
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(4)
    basic.showIcon(IconNames.Yes)
    basic.pause(25000)
    basic.showIcon(IconNames.No)
})
radio.setGroup(50)
