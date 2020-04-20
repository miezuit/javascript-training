
class RoDate extends Date {

    sayInRomanian() {
        let months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie',
                      'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie',
                      'Octombrie', 'Noiembrie', 'Decembrie'];
        return `${this.getDay()} ${months[this.getMonth()]} ${this.getFullYear()}`;
    }
}

var date = new RoDate();
console.log(date.sayInRomanian());