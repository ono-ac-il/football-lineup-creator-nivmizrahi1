const players = [
    { name: 'Ronaldo', position: 'forward' },
    { name: 'Messi', position: 'forward' },
    { name: 'Neymar', position: 'forward' },
    { name: 'Modric', position: 'midfielder' },
    { name: 'Kroos', position: 'midfielder' },
    { name: 'De Bruyne', position: 'midfielder' },
    { name: 'Alaba', position: 'defender' },
    { name: 'Ramos', position: 'defender' },
    { name: 'Varane', position: 'defender' },
    { name: 'Neuer', position: 'goalkeeper' },
    { name: 'Buffon', position: 'goalkeeper' },
    { name: 'Casillas', position: 'goalkeeper' },
    { name: 'Davidovich', position: 'goalkeeper' }
]
/* filter all the golakeepers from players array */


const goalkeepers = players.filter(function (player) {
    return player.position == 'goalkeeper';
});

/*var gkStr = '';
for (let i = 0; i < goalkeepers.length; i++) {
    // gkStr += '<option value="' + goalkeepers[0].name + '">' + goalkeepers[0].name + '</option >';
    gkStr += `<option value="${goalkeepers[i].name}">${goalkeepers[i].name}</option>`;
}*/

const mappedGoalkeepers = goalkeepers.map(function (item) {
    return `<option value="${item.name}">${item.name}</option>`
});

document.getElementById('pos1').innerHTML = mappedGoalkeepers.join('');