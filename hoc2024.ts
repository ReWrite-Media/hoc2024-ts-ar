//enums

//%  block="HOC2024" weight=200 color=#0B3D91 icon="\uf186"
namespace hoc {


// TUTORIAL ACTIVITY
    /**
     * This function starts the game.
     */  
    //% block="raise hand"
    export function raise_hand(): void {
        player.execute("scoreboard players set .output global 1")
    }




}