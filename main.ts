RTC_DS1307.DateTime(
2025,
11,
20,
13,
11,
30
)
let strip = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
let soil_moisture = Environment.ReadSoilHumidity(AnalogPin.P2)
basic.forever(function () {
    if ((RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) == 11) < (RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) == 14)) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        if (soil_moisture < 10) {
            basic.pause(500)
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        }
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
