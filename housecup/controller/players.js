const teams = {
  yellow: {
    id: 'yellow',
    name: 'Yellow',
    colorClass: 'team-yellow',
    score: 0,
    midiChannel: 0,
    players: [
      { name: 'Lionel Messi',      number: 10, note: 60 },
      { name: 'Mohamed Salah',     number: 11, note: 62 },
      { name: 'Kevin De Bruyne',   number: 17, note: 63 },
      { name: 'Erling Haaland',    number: 9,  note: 64 },
      { name: 'Vinícius Júnior',   number: 7,  note: 67 },
      { name: 'Jude Bellingham',   number: 5,  note: 69 },
      { name: 'David Beckham',     number: 23, note: 110 },
      { name: 'Xavi Hernández',    number: 6,  note: 102 },
      { name: 'Steven Gerrard',    number: 8,  note: 122 },
      { name: 'Zico',              number: 10, note: 123 }
    ]
  },

  blue: {
    id: 'blue',
    name: 'Blue',
    colorClass: 'team-blue',
    score: 0,
    midiChannel: 1,
    players: [
      { name: 'Cristiano Ronaldo', number: 7,  note: 70 },
      { name: 'Harry Kane',        number: 9,  note: 71 },
      { name: 'Jamal Musiala',     number: 10, note: 73 },
      { name: 'Pedri',             number: 8,  note: 74 },
      { name: 'Rodri',             number: 16, note: 75 },
      { name: 'Virgil van Dijk',   number: 4,  note: 78 },
      { name: 'Thibaut Courtois',  number: 1,  note: 79 },
      { name: 'Roberto Carlos',    number: 3,  note: 121 },
      { name: 'Neymar Jr.',        number: 10, note: 65 },
      { name: 'Gareth Bale',       number: 11, note: 124 }
    ]
  },

  green: {
    id: 'green',
    name: 'Green',
    colorClass: 'team-green',
    score: 0,
    midiChannel: 2,
    players: [
      { name: 'Andrés Iniesta',     number: 8,  note: 101 },
      { name: 'Sergio Ramos',       number: 4,  note: 103 },
      { name: 'Andrea Pirlo',       number: 21, note: 104 },
      { name: 'Zlatan Ibrahimović', number: 11, note: 105 },
      { name: 'Gianluigi Buffon',   number: 1,  note: 106 },
      { name: 'Thierry Henry',      number: 14, note: 107 },
      { name: 'Ronaldinho',         number: 10, note: 108 },
      { name: 'Kaká',               number: 22, note: 109 },
      { name: 'David Beckham',      number: 23, note: 110 },
      { name: 'Robert Lewandowski', number: 9,  note: 68 }
    ]
  },

  red: {
    id: 'red',
    name: 'Red',
    colorClass: 'team-red',
    score: 0,
    midiChannel: 3,
    players: [
      { name: 'Pelé',              number: 10, note: 111 },
      { name: 'Johan Cruyff',      number: 14, note: 113 },
      { name: 'Franz Beckenbauer', number: 5,  note: 114 },
      { name: 'Paolo Maldini',     number: 3,  note: 115 },
      { name: 'Ronaldo Nazário',   number: 9,  note: 116 },
      { name: 'George Best',       number: 7,  note: 118 },
      { name: 'Gerd Müller',       number: 13, note: 119 },
      { name: 'Lev Yashin',        number: 1,  note: 120 },
      { name: 'Franco Baresi',     number: 6,  note: 125 },
      { name: 'Lothar Matthäus',   number: 8,  note: 126 },
      { name: 'Javier Zanetti',    number: 4,  note: 127 }
    ]
  }
};