"use strict";

import Citizen from "./class.citizen.js"

/**
 * Create a NobleCitizen class. A Noble Citizen is basically
 * the same as a regular citizen, just with rank 1 and another
 * representation in the Citizen Dictionary (see the img folder).
 */

export default class NobleCitizen extends Citizen {
    constructor(name){
        super(name); // fügt alle this.x vom class Citizen von class.cotizen.js hinzu; home, alle anderen infos die zukünftig hinzugefügt werden dort
        this.rank = 1;
    }
    toString(){
        return `${this.name}, Noble Citizen`;
    }
}