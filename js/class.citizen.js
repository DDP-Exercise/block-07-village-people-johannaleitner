"use strict";

/**
 * Create a Citizen class. Each Citizen should have
 * - a name
 * - a rank, randomly of 2, 3 and 4.
 * - a home (building), which is by default null; null; es is ned; homeless
 *
 * Write a toString() Method, to prepare your citizens
 * for the citizen Dictionary.
 *
 */

export default class Citizen{

    constructor(name){
        this.name = name; // constructor erstellt ein neues object; des farbige name kommt ins neue object, name ungefärbt is ds vom contructor erstelltes
        this.rank = Math.floor(Math.random() * 3) + 2; // Math.random() gives a value from 0 to <1, dann * 3 würd zw. 0 und <3, und dann nu + 2; ergebnis zw. 2,3,4; Math.floor damit gerundet; keine kommazahlen zw. 2,3,4 sondern 2 oder 3 oder 4
        this.home = null;
    }

    toString(){
        return `${this.name}, Citizen, Rank ${this.rank}`;
    }
    /*
    3 scales it to 0–<3
    Math.floor(...) makes it 0, 1, 2
    + 2 shifts it to 2, 3, 4 */
}