import { Card } from "./cards.ts";

export class Deck {
    unplayed = new Array<boolean>();
    played = new Array<boolean>();
    
    play(): Card {
        const randomNumber = Math.floor(Math.random() * 35);
        const newPlayed = this.unplayed[randomNumber];
        this.played.push(newPlayed);
        this.unplayed.splice(randomNumber);
    }
}