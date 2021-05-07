import "https://cdn.jsdelivr.net/npm/vue@2.6.12/dist/vue.js"

class Board {
    empty = ''
    cells = [
        this.empty, this.empty, this.empty,
        this.empty, this.empty, this.empty,
        this.empty, this.empty, this.empty
    ]
    put(symbol, pos) {
        if(this.isEmpty(pos)) {
            this.cells.splice(pos, 1, symbol)
        }
    }
    isEmpty(pos) {
        return this.cells[pos] === this.empty
    } 
    isFull() {
        return this.cells.every(cell => cell != this.empty)
    }
    hasCompleteLine(symbol) {
        return this.lineIsComplete(symbol, (value, index) => index < 3)
        || this.lineIsComplete(symbol,(value, index) => index > 3 && index < 6)
        || this.lineIsComplete(symbol,(value, index) => index > 6 && index < 9)
        || this.lineIsComplete(symbol,(value, index) => index % 3 == 0)
        || this.lineIsComplete(symbol,(value, index) => index % 3 == 1)
        || this.lineIsComplete(symbol,(value, index) => index % 3 == 2)
        || this.lineIsComplete(symbol,(value, index) => index % 4 == 0)
        || this.lineIsComplete(symbol,(value, index) => index % 2 == 0 && index > 0 && index < 8)
    }
    lineIsComplete(symbol, filter) {
        const cells = this.cells.filter(filter)
        return cells.every(value => value == symbol)
    }
}

class Game {
    board
    activePlayer
    winner
    finished
    x = 'X'
    z = '0'

    constructor() {
        this.board = new Board()
        this.activePlayer = this.x
        this.winner = null
        this.finished = false
    }

    play(pos) {
        if (!this.isFinished() && this.board.isEmpty(pos)) {
            this.board.put(this.activePlayer, pos)
            this.checkFinished()
            this.changeActivePlayer()
        }
    }

    checkFinished() {
        if (this.board.hasCompleteLine(this.activePlayer)) {
            this.finished = true
            this.winner = this.activePlayer
        } else if (this.board.isFull()) {
            this.finished = true
        }
    }

    changeActivePlayer() {
        if (!this.isFinished()) {
            this.activePlayer = this.activePlayer === this.z ? this.x : this.z
        }
    }

    isFinished() {
        return this.finished
    }

    isDrawn() {
        return this.isFinished() && !this.hasWinner()
    }

    hasWinner() {
        return this.winner !== null
    }

    getWinner() {
        return this.winner
    }

    getCells() {
        return this.board.cells
    }
}

Vue.component('game', {
    data() {
        return {
            game: new Game()
        }
    },
    template: `
    <div class="game">
        <div 
            class="cell"
            v-for="(symbol, index) in game.getCells()"
            @click="play(index)"
        >
            {{ symbol }}
        </div>
        <div v-if="game.hasWinner()">Winner!</div>
        <div v-if="game.isDrawn()">Draw</div>
    </div>
    `,
    methods: {
        play(index) {
            this.game.play(index)
        }
    },
})

new Vue({
    el: '#app',
    template: `<game></game>`
})