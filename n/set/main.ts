//ENUMS

enum Biome {
    //% block="السافانا - جافة واسعة"
    Savannah,
    //% block="تيجا"
    Taiga,
    //% block="الصحراء"
    Desert,
    //% block="الغابة"
    Jungle,
    //% block="الغابة - خضراء"
    Forest,
    //% block="المحيط - مائية"
    Ocean,
    //% block="النذر - مظلم"
    Nether,
    //% block="النهاية - غامض"
    End,
    //% block="المدينة - حضري"
    City,
    //% block="الغضاء"
    Space
}

enum Biome_Activity {
    //% block="تيجا"
    Taiga,
    //% block="الصحراء"
    Desert,
    //% block="الغابة"
    Jungle
}

enum Time {
    //% block="شروق الشمس - صباحي"
    Sunrise,
    //% block="نهار"
    Day,
    //% block="غروب"
    Sunset,
    //% block="ليل"
    Night

}

enum Time_Activity {
    //% block="نهار"
    Day,
    //% block="غروب"
    Sunset,
    //% block="ليل"
    Night

}

enum Climate {
    //% block="صافي"
    Clear,
    //% block="غائم"
    Cloudy,
    //% block="ماطر"
    Rain,
    //% block="ثلوج"
    Snow,
    //% block="عاصف"
    Thunderstorm
}

enum Weather_Activity {
    //% block="صافي"
    Clear,
    //% block="ماطر"
    Rain,
    //% block="ثلوج"
    Snow,    
}

//GLOBAL VARIABLES
const communicationsTimeout = 50;

//%  block="HOC2024" weight=200 color=#0B3D91 icon="\uf186"
namespace hoc {
// SET DESIGN ACTIVITY

    //SANDBOX
    /**
     * This function sets the biome, time, and weather for the set.
     */        
    //% block="البيئة %b الوقت %t الطقس %w"
    export function set(b: Biome, t: Time, w: Climate): void {
        switch (b) {
            case Biome.Savannah:
                player.execute("scoreboard players set biome set.var 01")
                break;
            case Biome.Taiga:
                player.execute("scoreboard players set biome set.var 02")
                break;
            case Biome.Desert:
                player.execute("scoreboard players set biome set.var 03")
                break;
            case Biome.Jungle:
                player.execute("scoreboard players set biome set.var 04")
                break;
            case Biome.Forest:
                player.execute("scoreboard players set biome set.var 05")
                break;
            case Biome.Ocean:
                player.execute("scoreboard players set biome set.var 06")
                break;
            case Biome.Nether:
                player.execute("scoreboard players set biome set.var 07")
                break;
            case Biome.End:
                player.execute("scoreboard players set biome set.var 08")
                break;
            case Biome.City:
                player.execute("scoreboard players set biome set.var 09")
                break;
            case Biome.Space:
                player.execute("scoreboard players set biome set.var 10")
                break;
        }
        loops.pause(communicationsTimeout)

        switch (t) {
            case Time.Sunrise:
                player.execute("scoreboard players set time set.var 01")
                break;
            case Time.Day:
                player.execute("scoreboard players set time set.var 02")
                break;
            case Time.Sunset:
                player.execute("scoreboard players set time set.var 03")
                break;
            case Time.Night:
                player.execute("scoreboard players set time set.var 04")
                break;
        }
        loops.pause(communicationsTimeout)

        switch (w) {
            case Climate.Clear:
                player.execute("scoreboard players set weather set.var 01")
                break;
            case Climate.Cloudy:
                player.execute("scoreboard players set weather set.var 02")
                break;
            case Climate.Rain:
                player.execute("scoreboard players set weather set.var 03")
                break;
            case Climate.Snow:
                player.execute("scoreboard players set weather set.var 04")
                break;
                break;
            case Climate.Thunderstorm:
                player.execute("scoreboard players set weather set.var 05")
                break;
        }
        loops.pause(communicationsTimeout)
    }

    //ACTIVITY
    //% block="البيئة %b الوقت %t الطقس %w"
    export function _set_activity(b: Biome_Activity, t: Time_Activity, w: Weather_Activity): void {
        switch (b) {
            case Biome_Activity.Taiga:
                player.execute("scoreboard players set biome set.var 02")
                break;
            case Biome_Activity.Desert:
                player.execute("scoreboard players set biome set.var 03")
                break;
            case Biome_Activity.Jungle:
                player.execute("scoreboard players set biome set.var 04")
                break;
        }
        loops.pause(communicationsTimeout)

        switch (t) {
            case Time_Activity.Day:
                player.execute("scoreboard players set time set.var 02")
                break;
            case Time_Activity.Sunset:
                player.execute("scoreboard players set time set.var 03")
                break;
            case Time_Activity.Night:
                player.execute("scoreboard players set time set.var 04")
                break;
        }
        loops.pause(communicationsTimeout)

        switch (w) {
            case Weather_Activity.Clear:
                player.execute("scoreboard players set weather set.var 01")
                break;
            case Weather_Activity.Rain:
                player.execute("scoreboard players set weather set.var 03")
                break;
            case Weather_Activity.Snow:
                player.execute("scoreboard players set weather set.var 04")
                break;                
        }
        loops.pause(communicationsTimeout)
    }
// END SET DESIGN ACTIVITY
}