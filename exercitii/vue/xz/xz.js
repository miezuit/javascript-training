var app = new Vue({
    el: '#app',
    data: {
        table: [
            '', '', '',
            '', '', '',
            '', '', '',
        ],
        activePlayer: 'X',
        finished: false
    },
    methods: {
        // index reprezinta celula pe care se face mutarea (0-8)
        makeMove(index) {
            // (guard clause) verificam daca este deja ceva pe acea celula
            if (this.table[index] != '') return;
            // folosim splice pentru a permite reactivitatea proprietatii table
            this.table.splice(index, 1, this.activePlayer);
            // schimbam jucatorul activ
            this.activePlayer = this.activePlayer == 'X' ? '0' : 'X';
            // verificam daca s-a terminat jocul
            this.checkFinished();
        },
        checkFinished() {
            this.checkComplete(this.table.filter((value, index) => index < 3));
            this.checkComplete(this.table.filter((value, index) => index > 2 && index < 6));
            this.checkComplete(this.table.filter((value, index) => index > 5));
            this.checkComplete(this.table.filter((value, index) => index % 3 == 0));
            this.checkComplete(this.table.filter((value, index) => index % 3 == 1));
            this.checkComplete(this.table.filter((value, index) => index % 3 == 2));
            this.checkComplete(this.table.filter((value, index) => index % 3 == 2));
            this.checkComplete(this.table.filter((value, index) => index % 4 == 0));
            this.checkComplete(this.table.filter((value, index) => [2, 4, 6].includes(index)));
        },
        checkComplete(cells) {
            if(cells.every(cell => cell == 'X') 
            || cells.every(cell => cell == '0')   
            ) {
                this.finished = true;
            }
        }
    }
});
