//ENUMS

enum Dance {
    //% block="golem gallop"
    Move1,
    //% block="wither wave"
    Move2,
    //% block="shulker shuffle"
    Move3,
    //% block="mushroom march"
    Move4,
    //% block="blaze bounce"
    Move5,
    //% block="creeper clap"
    Move6,
    //% block="ravager romp"
    Move7,
    //% block="hoglin hand jive"
    Move8,
    //% block="broken Agent"
    Move9,
    //% block="warden whirl"
    Move10,
    //% block="DANCE 11"
    Move11,
    //% block="DANCE 12"
    Move12,
    //% block="DANCE 13"
    Move13,
    //% block="DANCE 14"
    Move14
}

enum _Dances_Actvity {
    //% block="golem gallop"
    Move1,
    //% block="wither wave"
    Move2,
    //% block="shulker shuffle"
    Move3,
    //% block="mushroom march"
    Move4,
}

//GLOBAL VARIABLES
const communicationsTimeout = 100;

//%  block="HOC2024" weight=200 color=#0B3D91 icon="\uf186"
namespace hoc {

    // DANCE ACTIVITY

    //SANDBOX
    /**
     * This function instructs which dance should be done.
     * 
     * Usage Example: hoc.dance(Dance.Move8)
     * 
     * Valid parameters are:
     * Dance.Move1, Dance.Move2, Dance.Move3, Dance.Move4 all the way through Dance.Move14
     */    
    //% block="dance step %s"
    export function dance(d: Dance): void {
        switch (d) {
            case Dance.Move1:
                player.execute("scoreboard players set move dance.var 01")
                break;
            case Dance.Move2:
                player.execute("scoreboard players set move dance.var 02")
                break;
            case Dance.Move3:
                player.execute("scoreboard players set move dance.var 03")
                break;
            case Dance.Move4:
                player.execute("scoreboard players set move dance.var 04")
                break;
            case Dance.Move5:
                player.execute("scoreboard players set move dance.var 05")
                break;
            case Dance.Move6:
                player.execute("scoreboard players set move dance.var 06")
                break;
            case Dance.Move7:
                player.execute("scoreboard players set move dance.var 07")
                break;
            case Dance.Move8:
                player.execute("scoreboard players set move dance.var 08")
                break;
            case Dance.Move9:
                player.execute("scoreboard players set move dance.var 09")
                break;
            case Dance.Move10:
                player.execute("scoreboard players set move dance.var 10")
                break;
            case Dance.Move11:
                player.execute("scoreboard players set move dance.var 11")
                break;
            case Dance.Move12:
                player.execute("scoreboard players set move dance.var 12")
                break;
            case Dance.Move13:
                player.execute("scoreboard players set move dance.var 13")
                break;
            case Dance.Move14:
                player.execute("scoreboard players set move dance.var 14")
                break;
        }
        loops.pause(communicationsTimeout)
    }

    //ACTIVITY
    //% block="dance step %s"
    export function _dance_activity(d: _Dances_Actvity): void {
        switch (d) {
            case _Dances_Actvity.Move1:
                player.execute("scoreboard players set move dance.var 01")
                break;
            case _Dances_Actvity.Move2:
                player.execute("scoreboard players set move dance.var 02")
                break;
            case _Dances_Actvity.Move3:
                player.execute("scoreboard players set move dance.var 03")
                break;
            case _Dances_Actvity.Move4:
                player.execute("scoreboard players set move dance.var 04")
                break;
        }
        loops.pause(communicationsTimeout)
    }

// END DANCE ACTIVITY
}