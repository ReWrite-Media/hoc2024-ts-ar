//ENUMS

enum Dance {
    //% block="جوليم جلوب"
    GolemGallop,
    //% block="دولفين ديسكو"
    DolphinDisco,
    //% block="ويذر ويف"
    WitherWave,
    //% block="ماشروم مارش"
    MushroomMarch,
    //% block="blaze bounce"
    BlazeBounce,
    //% block="creeper clap"
    CreeperClap,
    //% block="ravager romp"
    RavagerRomp,
    //% block="hoglin hand jive"
    HoglinHandJive,
    //% block="dungeon dig"
    DungeonDig,
    //% block="alex axle"
    AlexAxle,
    //% block="warden whirl"
    WardenWhirl
}

enum _Dances_Actvity {
    //% block="جوليم جلوب"
    GolemGallop,
    //% block="دولفين ديسكو"
    DolphinDisco,
    //% block="ويذر ويف"
    WitherWave,
    //% block="ماشروم مارش"
    MushroomMarch
}

enum ArmorStand {
    //% block="1"
    One,
    //% block="2"
    Two,
    //% block="3"
    Three,
    //% block="4"
    Four
}

//GLOBAL VARIABLES
const communicationsTimeout = 50;

//%  block="HOC2024" weight=200 color=#0B3D91 icon="\uf186"
namespace hoc {

    // DANCE ACTIVITY

    //SANDBOX
    /**
     * This function instructs which dance should be done.
     */    
    //% block="رقصة %d"
    export function dance(d: Dance): void {
        let score = "0"
        switch (d) {
            case Dance.GolemGallop:
                score += "01"
                break;
            case Dance.DolphinDisco:
                score += "02"
                break;
            case Dance.WitherWave:
                score += "03"
                break;
            case Dance.MushroomMarch:
                score += "04"
                break;
            case Dance.BlazeBounce:
                score += "05"
                break;
            case Dance.CreeperClap:
                score += "06"
                break;
            case Dance.RavagerRomp:
                score += "07"
                break;
            case Dance.HoglinHandJive:
                score += "08"
                break;
            case Dance.DungeonDig:
                score += "09"
                break;
            case Dance.AlexAxle:
                score += "10"
                break;
            case Dance.WardenWhirl:
                score += "11"
                break;
        }
        player.execute("scoreboard players set move dance.var " + score)
        loops.pause(communicationsTimeout)
    }

    /**
     * This function instructs which armor 
     * stand should do which dance.
     */
    //% block="قاعدة الراقص %n رقصة %d"
    export function armorstand_dance(a: ArmorStand, d: Dance): void {
        let score = "0"
        switch (a) {
            case ArmorStand.One:
                score = "1";
                break;
            case ArmorStand.Two:
                score = "2";
                break;
            case ArmorStand.Three:
                score = "3";
                break;
            case ArmorStand.Four:
                score = "4";
                break;
        }
        switch (d) {
            case Dance.GolemGallop:
                score += "01"
                break;
            case Dance.DolphinDisco:
                score += "02"
                break;
            case Dance.WitherWave:
                score += "03"
                break;
            case Dance.MushroomMarch:
                score += "04"
                break;
        }
        player.execute("scoreboard players set move dance.var " + score)
        loops.pause(communicationsTimeout)
    }

    //ACTIVITY
    //% block="قاعدة الراقص %n رقصة %d"
    export function _dance_activity(s: ArmorStand, d: _Dances_Actvity): void {
        let score = "0"

        switch (s) {
            case ArmorStand.One:
                score = "1";
                break;
            case ArmorStand.Two:
                score = "2";
                break;
            case ArmorStand.Three:
                score = "3";
                break;
            case ArmorStand.Four:
                score = "4";
                break;
        }

        switch (d) {
            case _Dances_Actvity.GolemGallop:
                score += "01"
                break;
            case _Dances_Actvity.DolphinDisco:
                score += "02"
                break;
            case _Dances_Actvity.WitherWave:
                score += "03"
                break;
            case _Dances_Actvity.MushroomMarch:
                score += "04"
                break;
        }

        player.execute("scoreboard players set move dance.var " + score)
        loops.pause(communicationsTimeout)
    }

    // END DANCE ACTIVITY
}