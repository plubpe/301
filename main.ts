pins.analogSetPeriod(AnalogPin.P0, 20000)
pins.analogSetPeriod(AnalogPin.P2, 20000)
pins.setPull(DigitalPin.P12, PinPullMode.PullUp)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
serial.writeLine("asd")
basic.forever(function on_forever() {
    let l = pins.digitalReadPin(DigitalPin.P12)
    let r = pins.digitalReadPin(DigitalPin.P13)
    serial.writeValue("l", l)
    serial.writeValue("r", r)
    if (l == 0 && r == 0) {
        pins.analogWritePin(AnalogPin.P0, 400)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 400)
        pins.digitalWritePin(DigitalPin.P8, 0)
    } else if (l == 0 && r == 1) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.analogWritePin(AnalogPin.P2, 400)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(500)
    } else if (l == 1 && r == 0) {
        pins.analogWritePin(AnalogPin.P0, 400)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
        basic.pause(500)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P2, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
    
})
