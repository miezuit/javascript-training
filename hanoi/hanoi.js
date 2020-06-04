
function randomColor() {
    return '#' + Math.random().toString(16).substr(-6);
}

class Disk {
    constructor(size) {
        this.size = size
        this.color = randomColor()
    }
    biggerThan(anotherDisk) {
        return this.size > anotherDisk.size
    }
}

class Rod {
    constructor(id, numberOfDisks, size) {
        this.id = id
        this.size = size
        this.disks = []
        createDisks(numberOfDisks)
    }
    createDisks(numberOfDisks) {
        for(let size=numberOfDisks; size>0; size--) {
            this.disks.push(new Disk(size))
        }
    }
    put(disk) {
        if (!this.canPutDisk(disk)) throw new Error('Cannot put disk')
        this.disks.push(disk)
    }
    canPutDisk(disk) {
        return this.isEmpty()
            || this.topDisk().biggerThan(disk)
    }
    pop() {
        if (this.isEmpty()) throw new Error('Rod is empty')
        return this.disks.pop()
    }
    isEmpty() {
        return this.disks.length == 0
    }
    topDisk() {
        return this.disks[this.disks.length - 1]
    }
}

class Game {
    constructor(numberOfDisks) {
        this.rods = {
            A: new Rod('A', numberOfDisks, numberOfDisks),
            B: new Rod('B', 0, numberOfDisks),
            C: new Rod('C', 0, numberOfDisks)
        }
        this.numberOfMoves = 0
    }
    move(sourceRodId, targetRodId) {
        let sourceRod = this.rods[sourceRodId]
        let targetRod = this.rods[targetRodId]
        if (!targetRod.canPutDisk(sourceRod.topDisk())) {
            throw new Error('Cannot move disk')
        }
        let disk = sourceRod.pop()
        targetRod.put(disk)
    }
}