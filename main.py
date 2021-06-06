pins.set_pull(DigitalPin.P12, PinPullMode.PullUp)
pins.set_pull(DigitalPin.P13, PinPullMode.PullUp)
serial.write_line("asd")
def on_forever():
    l=pins.digital_read_pin(DigitalPin.P12)
    r=pins.digital_read_pin(DigitalPin.P13)
    serial.write_value("l", l)
    serial.write_value("r", r)
    if l==0 and r==0 :
        pins.digital_write_pin(DigitalPin.P0, 1)
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 1)
        pins.digital_write_pin(DigitalPin.P8, 0)
    elif l==0 and r==1 :
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 1)
        pins.digital_write_pin(DigitalPin.P8, 0)
        basic.pause(100)
    elif l==1 and r==0 :
        pins.digital_write_pin(DigitalPin.P0, 1)
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 0)
        pins.digital_write_pin(DigitalPin.P8, 0)
        basic.pause(100)
    else:
        pins.digital_write_pin(DigitalPin.P0, 0)
        pins.digital_write_pin(DigitalPin.P1, 0)
        pins.digital_write_pin(DigitalPin.P2, 0)
        pins.digital_write_pin(DigitalPin.P8, 0)
basic.forever(on_forever)