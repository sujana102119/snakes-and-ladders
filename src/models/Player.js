class Player {
    #tokenPosition;
    #userId;

    constructor(player) {
        const {userId} = player;
        this.#tokenPosition = 0;
        this.#userId = userId;
    }

    get userId() {
        return this.#userId;
    }

    set userId(value) {
        this.#userId = value;
    }

    get tokenPosition() {
        return this.#tokenPosition;
    }

    set tokenPosition(value) {
        this.#tokenPosition = value;
    }
}

module.exports = Player;