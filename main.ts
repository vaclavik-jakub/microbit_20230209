/*
    radio.setGroup(2)
    let start = false
    let start2 = false

    music.setVolume(225)
    music.changeTempoBy(20)

    input.onButtonPressed(Button.A, function () {
        radio.sendValue("kod", 15)
        start = true

    radio.onReceivedValue(function (name: string, value: number) {

        if (name == "kod") {
            if (value = 15) {
                start2 = true

            }
        }

    })
})

    if (start && start2) {
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
        basic.showString("READY!")
        basic.pause(10)
        basic.showString("GO!")
        music.stopMelody(MelodyStopOptions.All)
    }
*/
//Možnosti dimenze a logu 
input.setAccelerometerRange(AcceleratorRange.TwoG)
datalogger.setColumnTitles("accelX", "accelY", "accelZ")


basic.forever(function () {
//Proměnné 

//Proměnné - ukládání hodnot z dimenzí
let x = datalogger.createCV("accelX",input.acceleration(Dimension.X))
let y = datalogger.createCV("accelY", input.acceleration(Dimension.Y))
let z = datalogger.createCV("accelZ", input.acceleration(Dimension.Z))
         
//Proměnné - hodnoty dimenzí          
let A = input.acceleration(Dimension.X)
let B = input.acceleration(Dimension.Y)
let C = input.acceleration(Dimension.Z)
            
   
    console.logValue("x", A)
    console.logValue("y", B)
    console.logValue("z", C)

/*
Díky tomuto se ty data ukládají a ukazují nám.
Akorát bacha, trochu se to pak seká :D

    datalogger.log(x, y, z)
*/
    
    
})
//



 








