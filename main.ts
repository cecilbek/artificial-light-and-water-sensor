RTC_DS1307.DateTime(
2025,
11,
20,
13,
11,
30
)
let stripBasil = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
let soil_moistureBasil = Environment.ReadSoilHumidity(AnalogPin.P2)
let stripPepperomia = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
let soil_moisturePepperomia = Environment.ReadSoilHumidity(AnalogPin.P2)
let stripAloeVera = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
let soil_moistureAloeVera = Environment.ReadSoilHumidity(AnalogPin.P2)
basic.forever(function () {
    if ((RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) == 10) < (RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) == 14)) {
        stripBasil.showColor(neopixel.colors(NeoPixelColors.Red))
        if (soil_moistureBasil < 10) {
            basic.pause(500)
            stripBasil.showColor(neopixel.colors(NeoPixelColors.Blue))
        }
    } else {
        stripBasil.showColor(neopixel.colors(NeoPixelColors.Black))
    }
    if ((RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) == 10) < (RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) == 14)) {
        stripPepperomia.showColor(neopixel.colors(NeoPixelColors.Red))
        if (soil_moisturePepperomia < 10) {
            basic.pause(500)
            stripPepperomia.showColor(neopixel.colors(NeoPixelColors.Blue))
        }
    } else {
        if ((RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) == 10) < (RTC_DS1307.getTime(RTC_DS1307.TimeType.HOUR) == 14)) {
            stripAloeVera.showColor(neopixel.colors(NeoPixelColors.Red))
            if (soil_moistureAloeVera < 10) {
                basic.pause(500)
                stripAloeVera.showColor(neopixel.colors(NeoPixelColors.Blue))
            }
        } else {
            stripAloeVera.showColor(neopixel.colors(NeoPixelColors.Black))
        }
        stripAloeVera.showColor(neopixel.colors(NeoPixelColors.Black))
    }
})
