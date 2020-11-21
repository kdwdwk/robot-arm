radio.onReceivedNumber(function (receivedNumber) {
    pins.servoWritePin(AnalogPin.P8, receivedNumber / 5)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "서보1감소") {
        가변저항1 += -5
        pins.servoWritePin(AnalogPin.P0, 가변저항1)
    } else if (receivedString == "서보1정지") {
        가변저항1 += 0
        pins.servoWritePin(AnalogPin.P0, 가변저항1)
    } else {
        if (receivedString == "서보1증가") {
            가변저항1 += 5
            pins.servoWritePin(AnalogPin.P0, 가변저항1)
        }
    }
})
let 가변저항1 = 0
radio.setGroup(3)
가변저항1 = 90
