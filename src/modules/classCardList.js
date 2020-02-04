`use strict`;

import Card from './classCard.js'

export default class CardList {
    constructor(container) {
        this.container = container;
    }

    addCard(card) {
        const { cardElement } = new Card(card);
        this.container.appendChild(cardElement);
    }

    render(resArray) {
        for (let i = 0; i < resArray.length; i++) {
        this.addCard(resArray[i]);
        }
    }
}