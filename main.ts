input.onSound(DetectedSound.Loud, function () {
	
})
let Sonar = 0
input.setSoundThreshold(SoundThreshold.Loud, 128)
basic.forever(function () {
    cuteBot.colorLight(cuteBot.RGBLights.ALL, 0x00ff00)
    Sonar = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (Sonar > 2 && Sonar < 15) {
        cuteBot.stopcar()
        cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
        basic.pause(100)
        cuteBot.motors(randint(-50, -100), 0)
        basic.pause(2000)
    } else {
        cuteBot.forward()
    }
    if (128 < input.soundLevel()) {
        cuteBot.stopcar()
        for (let index = 0; index < 10; index++) {
            cuteBot.moveTime(cuteBot.Direction.left, 100, 2.5)
        }
        cuteBot.forward()
    }
})
