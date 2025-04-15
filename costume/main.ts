enum HeadWear {
    //% block="superstar"
    //% jres 
    Superstar_Hat,
    //% block="knight helmet"
    //% jres 
    Knight_Helmet,
    //% block="sun glasses"
    //% jres 
    Sun_Glasses,
    //% block="reading glasses"
    //% jres 
    Reading_Glasses,
    //% block="cowboy hat"
    //% jres 
    Cowboy_Hat,
    //% block="astronaut helmet"
    //% jres 
    Astronaut_Helmet,
    //% block="baseball hat"
    //% jres 
    Baseball_Hat,
    //% block="construction helmet"
    //% jres 
    Construction_Helmet,
    //% block="ballerina crown"
    //% jres 
    Ballerina_Crown,
}

enum HeadWear_Activity {
    //% block="knight helmet"
    //% jres 
    Knight_Helmet,
    //% block="cowboy hat"
    //% jres 
    Cowboy_Hat,
    //% block="astronaut helmet"
    //% jres 
    Astronaut_Helmet
}


enum MidWear {
    //% block="superstar"
    //% jres 
    Superstar_Shirt,
    //% block="construction shirt"
    //% jres 
    Construction_Shirt,
    //% block="cowboy shirt"
    //% jres 
    Cowboy_Shirt,
    //% block="astronaut suit"
    //% jres 
    Astronaut_Top,
    //% block="knight armor"
    //% jres 
    Knight_Top,    
    //% block="varsity jacket"
    //% jres 
    Varsity_Jacket,
    //% block="green t-shirt"
    //% jres 
    Green_TShirt,
    //% block="backsetball jersey"
    //% jres 
    Basketball_Jersey,
    //% block="ballerina shirt"
    //% jres 
    Ballerina_Shirt
}

enum MidWear_Activity {
    //% block="cowboy shirt"
    //% jres 
    Cowboy_Shirt,
    //% block="astronaut suit"
    //% jres 
    Astronaut_Top,
    //% block="knight armor"
    //% jres 
    Knight_Top
}

enum LowerWear {
    //% block="superstar"
    //% jres 
    Superstar_Pants,
    //% block="swim shorts"
    //% jres 
    Swim_Shorts,
    //% block="knight leggings"
    //% jres 
    Knight_Legs,
    //% block="cowboy jeans"
    //% jres 
    Cowboy_Pants,
    //% block="astronaut pants"
    //% jres 
    Astronaut_Legs,
    //% block="khaki shorts"
    //% jres 
    Khaki_Shorts,
    //% block="boots"
    //% jres 
    Black_Boots,
    //% block="construction jeans"
    //% jres 
    Construction_Pants,
    //% block="ballerina tutu"
    //% jres 
    Ballerina_Tutu
}

enum LowerWear_Activity {
    //% block="knight leggings"
    //% jres 
    Knight_Legs,
    //% block="cowboy jeans"
    //% jres 
    Cowboy_Pants,
    //% block="astronaut pants"
    //% jres 
    Astronaut_Legs
}

//GLOBAL VARIABLES
const communicationsTimeout = 100;

//%  block="HOC2024" weight=200 color=#0B3D91 icon="\uf186"
namespace hoc {

// COSTUME ACTIVITY

    //SANDBOX
    /**
     * This function takes three parameters and defines what
     * clothing items should be placed on the head, body and leggs
     * 
     * Usage Example: hoc.costume(HeadWear.Knight_Helmet, MidWear.Knight_Top, LowerWear.Knight_Legs)
     * 
     * Valid HeadWear parameters are:
     * Astronaut_Helmet, Ballerina_Crown, Baseball_Hat, Construction_Helmet
     * Cowboy_Hat, Knight_Helmet, Reading_Glasses, Sun_Glasses, Superstar_Hat
     * 
     * Valid MidWear parameters are:
     * Astronaut_Top, Ballerina_Shirt, Basketball_Jersey, Construction_Shirt
     * Cowboy_Shirt, Green_TShirt, Knight_Top, Superstar_Shirt, Varsity_Jacket
     * 
     * Valid LowerWear parameters are:
     * Astronaut_Legs, Ballerina_Tutu, Black_Boots, Construction_Pants
     * Cowboy_Pants, Khaki_Shorts, Knight_Legs, Superstar_Pants, Swim_Shorts
     * 
     */        
    //% block="head %u body %m legs %l"
    //% u.fieldEditor="gridpicker" u.fieldOptions.width=140 u.fieldOptions.columns=3
    //% m.fieldEditor="gridpicker" m.fieldOptions.width=140 m.fieldOptions.columns=3
    //% l.fieldEditor="gridpicker" l.fieldOptions.width=140 l.fieldOptions.columns=3
    //%   
    export function costume(u: HeadWear, m: MidWear, l: LowerWear): void {
        switch (u) {
            case HeadWear.Superstar_Hat:
                player.execute("scoreboard players set upper costume.var 01")
                break;
            case HeadWear.Knight_Helmet:
                player.execute("scoreboard players set upper costume.var 02")
                break;
            case HeadWear.Sun_Glasses:
                player.execute("scoreboard players set upper costume.var 03")
                break;
            case HeadWear.Reading_Glasses:
                player.execute("scoreboard players set upper costume.var 04")
                break;
            case HeadWear.Cowboy_Hat:
                player.execute("scoreboard players set upper costume.var 05")
                break;
            case HeadWear.Astronaut_Helmet:
                player.execute("scoreboard players set upper costume.var 06")
                break;
            case HeadWear.Baseball_Hat:
                player.execute("scoreboard players set upper costume.var 07")
                break;
            case HeadWear.Construction_Helmet:
                player.execute("scoreboard players set upper costume.var 08")
                break;
            case HeadWear.Ballerina_Crown:
                player.execute("scoreboard players set upper costume.var 09")
                break;
        }
        loops.pause(communicationsTimeout)

        switch (m) {
            case MidWear.Superstar_Shirt:
                player.execute("scoreboard players set middle costume.var 01")
                break;
            case MidWear.Construction_Shirt:
                player.execute("scoreboard players set middle costume.var 02")
                break;
            case MidWear.Cowboy_Shirt:
                player.execute("scoreboard players set middle costume.var 03")
                break;
            case MidWear.Astronaut_Top:
                player.execute("scoreboard players set middle costume.var 04")
                break;
            case MidWear.Knight_Top:
                player.execute("scoreboard players set middle costume.var 05")
                break;
            case MidWear.Varsity_Jacket:
                player.execute("scoreboard players set middle costume.var 06")
                break;
            case MidWear.Green_TShirt:
                player.execute("scoreboard players set middle costume.var 07")
                break;
            case MidWear.Basketball_Jersey:
                player.execute("scoreboard players set middle costume.var 08")
                break;
            case MidWear.Ballerina_Shirt:
                player.execute("scoreboard players set middle costume.var 09")
                break;
        }
        loops.pause(communicationsTimeout)

        switch (l) {
            case LowerWear.Superstar_Pants:
                player.execute("scoreboard players set lower costume.var 01")
                break;
            case LowerWear.Swim_Shorts:
                player.execute("scoreboard players set lower costume.var 02")
                break;
            case LowerWear.Knight_Legs:
                player.execute("scoreboard players set lower costume.var 03")
                break;
            case LowerWear.Cowboy_Pants:
                player.execute("scoreboard players set lower costume.var 04")
                break;
            case LowerWear.Astronaut_Legs:
                player.execute("scoreboard players set lower costume.var 05")
                break;
            case LowerWear.Khaki_Shorts:
                player.execute("scoreboard players set lower costume.var 06")
                break;
            case LowerWear.Black_Boots:
                player.execute("scoreboard players set lower costume.var 07")
                break;
            case LowerWear.Construction_Pants:
                player.execute("scoreboard players set lower costume.var 08")
                break;
            case LowerWear.Ballerina_Tutu:
                player.execute("scoreboard players set lower costume.var 09")
                break;
        }
        loops.pause(communicationsTimeout)
    }

    //ACTIVITY
    //% block="head %u body %m legs %l"
    //% u.fieldEditor="gridpicker" u.fieldOptions.width=140 u.fieldOptions.columns=3
    //% m.fieldEditor="gridpicker" m.fieldOptions.width=140 m.fieldOptions.columns=3
    //% l.fieldEditor="gridpicker" l.fieldOptions.width=140 l.fieldOptions.columns=3
    export function _costume_activity(u: HeadWear_Activity, m: MidWear_Activity, l: LowerWear_Activity): void {
        switch (u) {
            case HeadWear_Activity.Knight_Helmet:
                player.execute("scoreboard players set upper costume.var 02")
                break;
            case HeadWear_Activity.Cowboy_Hat:
                player.execute("scoreboard players set upper costume.var 05")
                break;
            case HeadWear_Activity.Astronaut_Helmet:
                player.execute("scoreboard players set upper costume.var 06")
                break;
        }
        loops.pause(communicationsTimeout)

        switch (m) {
            case MidWear_Activity.Cowboy_Shirt:
                player.execute("scoreboard players set middle costume.var 03")
                break;
            case MidWear_Activity.Astronaut_Top:
                player.execute("scoreboard players set middle costume.var 04")
                break;
            case MidWear_Activity.Knight_Top:
                player.execute("scoreboard players set middle costume.var 05")
                break;
        }
        loops.pause(communicationsTimeout)

        switch (l) {
            case LowerWear_Activity.Knight_Legs:
                player.execute("scoreboard players set lower costume.var 03")
                break;
            case LowerWear_Activity.Cowboy_Pants:
                player.execute("scoreboard players set lower costume.var 04")
                break;
            case LowerWear_Activity.Astronaut_Legs:
                player.execute("scoreboard players set lower costume.var 05")
                break;
        }
        loops.pause(communicationsTimeout)
    }
// END COSTUME ACTIVITY

}