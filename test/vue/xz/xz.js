var app = new Vue({
    el: '#app',
    data: {
        table: [
            '', '', '',
            '', '', '',
            '', '', ''
        ],
        activePlayer: 'X',
        winner: false
    },
    methods: {
        move(index) {
            if(this.table[index] != '') return;
            this.table.splice(index, 1, this.activePlayer);
            this.switchPlayer();
            this.checkEndGame();
        },
        switchPlayer() {
            this.activePlayer = this.activePlayer == 'X' ? '0' : 'X';
        },
        checkEndGame() {
            this.checkComplete((value, index) => index < 3);
            this.checkComplete((value, index) => index > 2 && index < 6);
            this.checkComplete((value, index) => index > 5);
            this.checkComplete((value, index) => index % 3 == 0);
            this.checkComplete((value, index) => index % 3 == 1);
            this.checkComplete((value, index) => index % 3 == 2);
            this.checkComplete((value, index) => index % 3 == 2);
            this.checkComplete((value, index) => index % 4 == 0);
            this.checkComplete((value, index) => [2, 4, 6].includes(index));
        },
        checkComplete(filter) {
            cells = this.table.filter(filter);
            if(cells.every(cell => cell == 'X') 
            || cells.every(cell => cell == '0')   
            ) {
                this.winner = true;
            }
        }
    }
});
