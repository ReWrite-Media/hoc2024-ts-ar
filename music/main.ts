// ENUMS

enum Drums {
    //% block="stop"
    Stop,    
    //% block="slow"
    Slow,
    //% block="medium"
    Medium,
    //% block="fast"
    Fast
}

enum Note {
    //% block="do"
    Do,
    //% block="re"
    Re,
    //% block="mi"
    Mi,
    //% block="fa"
    Fa,
    //% block="so"
    So,
    //% block="la"
    La,
    //% block="ti"
    Ti
}
enum Instrument {
    //% blockIdentity="blocks.custom" enumval=0 block="synth"
    //% jres 
    Synth,
    //% blockIdentity="blocks.custom" enumval=1 block="xylophone"
    //% jres 
    Xylophone,
    //% blockIdentity="blocks.custom" enumval=2 block="guitar"
    //% jres 
    Guitar,
    //% blockIdentity="blocks.custom" enumval=3 block="flute"
    //% jres
    Flute,
    //% blockIdentity="blocks.custom" enumval=5 block="bells"
    //% jres
    Bells,
    //% blockIdentity="blocks.custom" enumval=6 block="bass"
    //% jres
    Bass,
    //% blockIdentity="blocks.custom" enumval=7 block="piano"
    //% jres
    Piano,
    //% blockIdentity="blocks.custom" enumval=8 block="villager"
    //% jres
    Villager
}

enum Instrument_Activity {
    //% blockIdentity="blocks.custom" enumval=9 block="xylophone"
    //% jres
    Xylophone,
    //% blockIdentity="blocks.custom" enumval=10 block="guitar"
    //% jres
    Guitar,
    //% blockIdentity="blocks.custom" enumval=11 block="bells"
    //% jres
    Bells
}

//GLOBAL VARIABLES
const communicationsTimeout = 100;

//%  block="HOC2024" weight=200 color=#0B3D91 icon="\uf186"
namespace hoc {
    // MUSIC ACTIVITY
    /**
     * This function allows you to add one of 8 different instruments.
     */    
    //% block="add instrument %i"
    //% i.fieldEditor="gridpicker"
    //% i.fieldOptions.columns=4
    export function add_instrument(i: Instrument): void {
        switch (i) {
            case Instrument.Synth:
                player.execute("scoreboard players set synth song.inst 01")
                break;
            case Instrument.Xylophone:
                player.execute("scoreboard players set xylophone song.inst 01")
                break;
            case Instrument.Guitar:
                player.execute("scoreboard players set guitar song.inst 01")
                break;
            case Instrument.Flute:
                player.execute("scoreboard players set flute song.inst 01")
                break;
            case Instrument.Bells:
                player.execute("scoreboard players set bells song.inst 01")
                break;
            case Instrument.Bass:
                player.execute("scoreboard players set bass song.inst 01")
                break;
            case Instrument.Piano:
                player.execute("scoreboard players set piano song.inst 01")
                break;
            case Instrument.Villager:
                player.execute("scoreboard players set villager song.inst 01")
                break;
        }
        loops.pause(communicationsTimeout)
    }

    /**
     * This function allows you to remove any instrument that's currently
     * added.
     */       
    //% block="remove instrument %i"
    //% i.fieldEditor="gridpicker"
    //% i.fieldOptions.columns=4
    export function remove_instrument(i: Instrument): void {
        switch (i) {
            case Instrument.Synth:
                player.execute("scoreboard players set synth song.inst 00")
                break;
            case Instrument.Xylophone:
                player.execute("scoreboard players set xylophone song.inst 00")
                break;
            case Instrument.Guitar:
                player.execute("scoreboard players set guitar song.inst 00")
                break;
            case Instrument.Flute:
                player.execute("scoreboard players set flute song.inst 00")
                break;
            case Instrument.Bells:
                player.execute("scoreboard players set bells song.inst 00")
                break;
            case Instrument.Bass:
                player.execute("scoreboard players set bass song.inst 00")
                break;
            case Instrument.Piano:
                player.execute("scoreboard players set piano song.inst 00")
                break;
            case Instrument.Villager:
                player.execute("scoreboard players set villager song.inst 00")
                break;
        }
        loops.pause(communicationsTimeout)
    }

    //% block="add instrument %i"
    //% i.fieldEditor="gridpicker"
    //% i.fieldOptions.columns=3
    export function _add_instrument_activity(i: Instrument_Activity): void {
        switch (i) {
            case Instrument_Activity.Xylophone:
                player.execute("scoreboard players set xylophone song.inst 01")
                break;
            case Instrument_Activity.Guitar:
                player.execute("scoreboard players set guitar song.inst 01")
                break;
            case Instrument_Activity.Bells:
                player.execute("scoreboard players set bells song.inst 01")
                break;
        }
        loops.pause(communicationsTimeout)
    }

    //% block="remove instrument %i"
    //% i.fieldEditor="gridpicker"
    //% i.fieldOptions.columns=3
    export function _remove_instrument_activity(i: Instrument_Activity): void {
        switch (i) {
            case Instrument_Activity.Xylophone:
                player.execute("scoreboard players set xylophone song.inst 00")
                break;
            case Instrument_Activity.Guitar:
                player.execute("scoreboard players set guitar song.inst 00")
                break;
            case Instrument_Activity.Bells:
                player.execute("scoreboard players set bells song.inst 00")
                break;
        }
        loops.pause(communicationsTimeout)
    }

    /**
     * This function allows you to set what note to play.
     */       
    //% block="note %k"
    export function note(k: Note): void {
        switch (k) {
            case Note.Do:
                player.execute("scoreboard players reset * song.key")
                player.execute("scoreboard players set do song.key 01")
                break;
            case Note.Re:
                player.execute("scoreboard players reset * song.key")
                player.execute("scoreboard players set re song.key 01")
                break;
            case Note.Mi:
                player.execute("scoreboard players reset * song.key")
                player.execute("scoreboard players set mi song.key 01")
                break;
            case Note.Fa:
                player.execute("scoreboard players reset * song.key")
                player.execute("scoreboard players set fa song.key 01")
                break;
            case Note.So:
                player.execute("scoreboard players reset * song.key")
                player.execute("scoreboard players set so song.key 01")
                break;
            case Note.La:
                player.execute("scoreboard players reset * song.key")
                player.execute("scoreboard players set la song.key 01")
                break;
            case Note.Ti:
                player.execute("scoreboard players reset * song.key")
                player.execute("scoreboard players set ti song.key 01")
                break;

        }
        loops.pause(communicationsTimeout)
    }

    /**
     * This function allows you to start or stop a drum beat.
     */    
    //% block="`Instrument.Drum` %s"
    export function drums(d: Drums): void {
        switch (d) {
            case Drums.Stop:
                player.execute("scoreboard players reset * song.drums")
                break;
            case Drums.Slow:
                player.execute("scoreboard players reset * song.drums")
                player.execute("scoreboard players set slow song.drums 01")
                break;
            case Drums.Medium:
                player.execute("scoreboard players reset * song.drums")
                player.execute("scoreboard players set medium song.drums 01")
                break;
            case Drums.Fast:
                player.execute("scoreboard players reset * song.drums")
                player.execute("scoreboard players set fast song.drums 01")
                break;
        }
        loops.pause(communicationsTimeout)
    }
// END MUSIC ACTIVITY    
}