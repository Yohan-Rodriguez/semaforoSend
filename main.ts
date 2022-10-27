input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Yes)
    basic.pause(15000)
    basic.showIcon(IconNames.No)
})
radio.setGroup(100)
