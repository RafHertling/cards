type Suit = "Rosen" | "Schellen" | "Schilten" | "Eicheln";

const SUIT_RANK: Record<Suit, number> = {
  Rosen: 3,
  Schellen: 2,
  Schilten: 2,
  Eicheln: 1,
};

class Card {
  constructor(public value: number, public suit: Suit) {}

  beats(other: Card): boolean {
    if (this.value !== other.value) {
      return this.value > other.value;
    }

    const thisSuitRank = SUIT_RANK[this.suit];
    const otherSuitRank = SUIT_RANK[other.suit];

    if (thisSuitRank === otherSuitRank) {
      return false;
    }

    return thisSuitRank > otherSuitRank;
  }
}