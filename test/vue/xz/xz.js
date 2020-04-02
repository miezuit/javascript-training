var app = new Vue({
    el: '#app',
    data: {
        table: [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ],
        activePlayer: 'X'
    },
    methods: {
        switchPlayer: function() {
            this.activePlayer = this.activePlayer == 'X' ? '0' : 'X';
        },
        move: function(x, y) {
            this.table[x][y] = this.activePlayer;
            this.switchPlayer();
            this.$forceUpdate();
        },

    }
});


function checkEndGame() {
    let cells = $('.table div').toArray();
    checkComplete(cells.filter((value, index) => index < 3));
    checkComplete(cells.filter((value, index) => index > 2 && index < 6));
    checkComplete(cells.filter((value, index) => index > 5));
    checkComplete(cells.filter((value, index) => index % 3 == 0));
    checkComplete(cells.filter((value, index) => index % 3 == 1));
    checkComplete(cells.filter((value, index) => index % 3 == 2));
    checkComplete(cells.filter((value, index) => index % 3 == 2));
    checkComplete(cells.filter((value, index) => index % 4 == 0));
    checkComplete(cells.filter((value, index) => [2, 4, 6].includes(index)));
}

/**
 * 
 * @param {Array} cells 
 */
function checkComplete(cells) {
    if(cells.every(cell => $(cell).text() == 'X') 
    || cells.every(cell => $(cell).text() == '0')   
    ) {
        $('.end').addClass('visible');
    }
}