import "https://unpkg.com/vue/dist/vue.js"
import "https://unpkg.com/vuex/dist/vuex.js"

class Move {
    constructor(fromRodNumber, toRodNumber) {
        this.fromRodNumber = fromRodNumber
        this.toRodNumber = toRodNumber
    }
}

class Game {
    constructor(numberOfDisks) {
        this.rods = []
        this.rods.push(new Rod(numberOfDisks))
        this.rods.push(new Rod(0))
        this.rods.push(new Rod(0))
    }
    makeMove(move) {
        fromRod = this.rods[move.fromRodNumber]
        toRod = this.rods[move.toRodNumber]
        if(toRod.canPutDisk(fromRod.topDisk())) {
            disk = fromRod.pop()
            toRod.put(disks)
        }
    }
}

class Rod {
    constructor(numberOfDisks) {
        this.disks = []
        for(let size=1; size<=numberOfDisks; size++) {
            this.disks.push(new Disk(size))
        }
    }
    pop() {
        return this.disks.pop()
    }
    canPutDisk(disk) {
        return this.topDisk().size > disk.size
    }
    put(disk) {
        if (this.canPutDisk()) {
            this.disks.push()
        }
    }
    topDisk() {
        return this.disks[this.disks.length - 1]
    }
}

class Disk {
    constructor(size) {
        this.size = size
    }   
}

const store = new Vuex.Store({
    state: {
      game: new Game(3)
    },
    getters: {
      game: state => state.game
    },
    mutations: {
      makeMove: (state, move) => state.game.makeMove(move)
    }
  })

const rod = {
    props: ['disks'],
    template: `
    <div class="rod">
      <div v-for='disk in disks' class="disk" :style="{ width: disk.size * 3 + 'em' }"></div>
    </div>`
}

const game = {
    template: `
    <div class="game">
      <rod v-for='rod in rods' :disks='rod.disks'></rod>
    </div>
    `,
    computed: {
        rods: () => store.state.game.rods 
    },
    components: {rod}
}

new Vue({
    el: '#app',
    store: store,
    components: {rod, game},
    template: `
        <game></game>
    `,
    methods: {

    }
})


