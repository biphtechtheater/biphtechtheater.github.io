const teams = {
  red: {
    id: 'red',
    name: 'Red',
    colorClass: 'team-red',
    score: 0,
    midiChannel: 1,
    players: [
      // Male
      { name: 'Pelé',               number: 10, note: 1, velocity: 1 },
      { name: 'Johan Cruyff',       number: 14, note: 1, velocity: 2 },
      { name: 'Franz Beckenbauer',  number: 5,  note: 1, velocity: 3 },
      { name: 'Paolo Maldini',      number: 3,  note: 1, velocity: 4 },
      { name: 'Ronaldo Nazário',    number: 9,  note: 1, velocity: 5 },
      { name: 'George Best',        number: 7,  note: 1, velocity: 6 },
      { name: 'Gerd Müller',        number: 13, note: 1, velocity: 7 },
      { name: 'Lev Yashin',         number: 1,  note: 1, velocity: 8 },
      { name: 'Franco Baresi',      number: 6,  note: 1, velocity: 9 },
      { name: 'Lothar Matthäus',    number: 8,  note: 1, velocity: 10 },
      { name: 'Javier Zanetti',     number: 4,  note: 1, velocity: 11 },
      { name: 'Michel Platini',     number: 10, note: 1, velocity: 12 },

      // Female
      { name: 'Mia Hamm',           number: 9,  note: 2, velocity: 1 },
      { name: 'Marta',              number: 10, note: 2, velocity: 2 },
      { name: 'Birgit Prinz',       number: 9,  note: 2, velocity: 3 },
      { name: 'Homare Sawa',        number: 10, note: 2, velocity: 4 },
      { name: 'Christine Sinclair', number: 12, note: 2, velocity: 5 },
      { name: 'Abby Wambach',        number: 20, note: 2, velocity: 6 },
      { name: 'Ada Hegerberg',       number: 14, note: 2, velocity: 7 },
      { name: 'Alexia Putellas',     number: 11, note: 2, velocity: 8 },
      { name: 'Aitana Bonmatí',      number: 14, note: 2, velocity: 9 },
      { name: 'Wendie Renard',       number: 3,  note: 2, velocity: 10 },
      { name: 'Carli Lloyd',         number: 10, note: 2, velocity: 11 }
    ]
  },

  blue: {
    id: 'blue',
    name: 'Blue',
    colorClass: 'team-blue',
    score: 0,
    midiChannel: 2,
    players: [
      // Male
      { name: 'Cristiano Ronaldo', number: 7,  note: 3, velocity: 1 },
      { name: 'Harry Kane',        number: 9,  note: 3, velocity: 2 },
      { name: 'Jamal Musiala',     number: 10, note: 3, velocity: 3 },
      { name: 'Pedri',             number: 8,  note: 3, velocity: 4 },
      { name: 'Rodri',             number: 16, note: 3, velocity: 5 },
      { name: 'Virgil van Dijk',   number: 4,  note: 3, velocity: 6 },
      { name: 'Thibaut Courtois',  number: 1,  note: 3, velocity: 7 },
      { name: 'Roberto Carlos',    number: 3,  note: 3, velocity: 8 },
      { name: 'Neymar Jr.',        number: 10, note: 3, velocity: 9 },
      { name: 'Gareth Bale',       number: 11, note: 3, velocity: 10 },
      { name: 'Luka Modrić',       number: 10, note: 3, velocity: 11 },

      // Female
      { name: 'Megan Rapinoe',     number: 15, note: 4, velocity: 1 },
      { name: 'Sam Kerr',          number: 20, note: 4, velocity: 2 },
      { name: 'Lauren James',      number: 7,  note: 4, velocity: 3 },
      { name: 'Lucy Bronze',       number: 2,  note: 4, velocity: 4 },
      { name: 'Mary Earps',        number: 1,  note: 4, velocity: 5 },
      { name: 'Fran Kirby',        number: 10, note: 4, velocity: 6 },
      { name: 'Keira Walsh',       number: 4,  note: 4, velocity: 7 },
      { name: 'Beth Mead',         number: 7,  note: 4, velocity: 8 },
      { name: 'Vivianne Miedema',  number: 11, note: 4, velocity: 9 },
      { name: 'Pernille Harder',   number: 10, note: 4, velocity: 10 },
      { name: 'Lindsey Horan',     number: 10, note: 4, velocity: 11 }
    ]
  },

  green: {
    id: 'green',
    name: 'Green',
    colorClass: 'team-green',
    score: 0,
    midiChannel: 3,
    players: [
      // Male
      { name: 'Andrés Iniesta',      number: 8,  note: 5, velocity: 1 },
      { name: 'Sergio Ramos',        number: 4,  note: 5, velocity: 2 },
      { name: 'Andrea Pirlo',        number: 21, note: 5, velocity: 3 },
      { name: 'Zlatan Ibrahimović',  number: 11, note: 5, velocity: 4 },
      { name: 'Gianluigi Buffon',    number: 1,  note: 5, velocity: 5 },
      { name: 'Thierry Henry',       number: 14, note: 5, velocity: 6 },
      { name: 'Ronaldinho',          number: 10, note: 5, velocity: 7 },
      { name: 'Kaká',                number: 22, note: 5, velocity: 8 },
      { name: 'David Beckham',       number: 23, note: 5, velocity: 9 },
      { name: 'Robert Lewandowski',  number: 9,  note: 5, velocity: 10 },
      { name: 'Xavi Hernández',      number: 6,  note: 5, velocity: 11 },

      // Female
      { name: 'Nadine Angerer',          number: 1,  note: 6, velocity: 1 },
      { name: 'Birgit Prinz',            number: 9,  note: 6, velocity: 2 },
      { name: 'Nilla Fischer',           number: 4,  note: 6, velocity: 3 },
      { name: 'Caroline Graham Hansen',  number: 10, note: 6, velocity: 4 },
      { name: 'Patri Guijarro',          number: 12, note: 6, velocity: 5 },
      { name: 'Salma Paralluelo',        number: 17, note: 6, velocity: 6 },
      { name: 'Irene Paredes',           number: 2,  note: 6, velocity: 7 },
      { name: 'Jennifer Hermoso',        number: 10, note: 6, velocity: 8 },
      { name: 'Ona Batlle',              number: 2,  note: 6, velocity: 9 },
      { name: 'Claudia Pina',            number: 6,  note: 6, velocity: 10 },
      { name: 'Esther González',         number: 9,  note: 6, velocity: 11 }
    ]
  },

  yellow: {
    id: 'yellow',
    name: 'Yellow',
    colorClass: 'team-yellow',
    score: 0,
    midiChannel: 4,
    players: [
      // Male
      { name: 'Lionel Messi',      number: 10, note: 7, velocity: 1 },
      { name: 'Mohamed Salah',     number: 11, note: 7, velocity: 2 },
      { name: 'Kevin De Bruyne',   number: 17, note: 7, velocity: 3 },
      { name: 'Erling Haaland',    number: 9,  note: 7, velocity: 4 },
      { name: 'Vinícius Júnior',   number: 7,  note: 7, velocity: 5 },
      { name: 'Jude Bellingham',   number: 5,  note: 7, velocity: 6 },
      { name: 'David Beckham',     number: 23, note: 7, velocity: 7 },
      { name: 'Xavi Hernández',    number: 6,  note: 7, velocity: 8 },
      { name: 'Steven Gerrard',    number: 8,  note: 7, velocity: 9 },
      { name: 'Zico',              number: 10, note: 7, velocity: 10 },
      { name: 'Ronald Koeman',     number: 4,  note: 7, velocity: 11 },

      // Female
      { name: 'Alex Morgan',       number: 13, note: 8, velocity: 1 },
      { name: 'Rose Lavelle',       number: 16, note: 8, velocity: 2 },
      { name: 'Trinity Rodman',     number: 5,  note: 8, velocity: 3 },
      { name: 'Sophia Smith',       number: 11, note: 8, velocity: 4 },
      { name: 'Mallory Swanson',    number: 9,  note: 8, velocity: 5 },
      { name: 'Crystal Dunn',       number: 16, note: 8, velocity: 6 },
      { name: 'Julie Ertz',         number: 8,  note: 8, velocity: 7 },
      { name: 'Tobin Heath',        number: 17, note: 8, velocity: 8 },
      { name: 'Christen Press',     number: 23, note: 8, velocity: 9 },
      { name: 'Crystal Dunn',       number: 19, note: 8, velocity: 10 },
      { name: 'Midge Purce',        number: 11, note: 8, velocity: 11 }
    ]
  }
};