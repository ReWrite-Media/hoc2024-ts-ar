// ENUMS

enum Drums {
    //% block="توقف"
    Stop,    
    //% block="بطيء"
    Slow,
    //% block="متوسط"
    Medium,
    //% block="سريع"
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
    //% blockIdentity="blocks.custom" enumval=1 block="الإكسيليفون"
    //% jres 
    Xylophone,
    //% blockIdentity="blocks.custom" enumval=2 block="الجيتار"
    //% jres 
    Guitar,
    //% blockIdentity="blocks.custom" enumval=3 block="flute"
    //% jres
    Flute,
    //% blockIdentity="blocks.custom" enumval=5 block="الأجراس"
    //% jres
    Bells,
    //% blockIdentity="blocks.custom" enumval=6 block="bass"
    //% jres
    Bass,
    //% blockIdentity="blocks.custom" enumval=7 block="بيانو"
    //% jres
    Piano,
    //% blockIdentity="blocks.custom" enumval=8 block="villager"
    //% jres
    Villager
}

enum Instrument_Activity {
    //% blockIdentity="blocks.custom" enumval=9 block="الإكسيليفون"
    //% jres
    Xylophone,
    //% blockIdentity="blocks.custom" enumval=10 block="الجيتار"
    //% jres
    Guitar,
    //% blockIdentity="blocks.custom" enumval=11 block="الأجراس"
    //% jres
    Bells
}

//GLOBAL VARIABLES
const communicationsTimeout = 50;

//%  block="HOC2024" weight=200 color=#0B3D91 icon="\uf186"
namespace hoc {
    // MUSIC ACTIVITY
    /**
     * This function allows you to add one of 8 different instruments.
     * 
     * Usage Example: hoc.add_instrument(Instrument.Guitar)
     * 
     * Valid parameters are:
     * Instrument.Bass, Instrument.Bells, Instrument.Flute, Instrument.Guitar
     * Instrument.Piano, Instrument.Synth, Instrument.Villager, Instrument.Xylophone
     */    
    //% block="إضافة آلة %i"
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
     * 
     * Usage Example: hoc.remove_instrument(Instrument.Guitar)
     * 
     * Valid parameters are:
     * Instrument.Bass, Instrument.Bells, Instrument.Flute, Instrument.Guitar
     * Instrument.Piano, Instrument.Synth, Instrument.Villager, Instrument.Xylophone
     */       
    //% block="إزالة آلة %i"
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

    //% block="إضافة آلة %i"
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

    //% block="إزالة آلة %i"
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
     * 
     * Usage Example: hoc.note(Note.Do)
     * 
     * Valid parameters are:
     * Note.Do, Note.Re, Note.Mi, Note.Fa, Note.So, Note.La, Note.Ti
     */       
    //% block="النوتة %k"
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
     * 
     * Usage Example: hoc.drums(Drums.Fast)
     * 
     * Valid parameters are:
     * Drums.Slow, Drums.Medium, or Drums.Fast, Drums.None
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