let tour = new Shepherd.Tour({
  defaults: {
    classes: 'shepherd-theme-arrows',
  }
});

tour.addStep('el-popote', {
  title: '1 Minuto Para Fabricar Un Popote',
  text: 'El popote es un polímero ligero que viaja desde <br>el confort de una butaca al estómago de tortugas, <br>mamíferos marinos y peces, entre otros organismos. <br>Los popotes amenazan los ecosistemas costeros y marinos.',
  attachTo: '.straw top',
  advanceOn: '.turtle click',
  buttons: [
    { 
      text: 'Siguiente',
      action: tour.next
    }
  ]
});

tour.addStep('uso', {
  title: 'Tienen Un Promedio De Uso De 20 Minutos',
  text: '<ul><li>&spades; En nuestra mesa dura 20 minutos y en nuestros mares 200 años. no puede biodegradarse.</li><li>&spades; El 33% del plástico se usa solo una vez y se desecha.</li><li>&spades; En México, el 95% de los popotes que se utilizan no son reciclables.</li><li>&spades; Se estima que un ser humano utiliza aproximadamente 38 mil popotes durante toda su vida.</li><li>&spades; Las aves playeras confunden el plástico con alimento y ponen su vida en peligro.</li><li>&spades; Cada vez que dice NO al uso del popote, contribuyes a tener playas y océanos más limpios y se mejora el hábitat de diferentes especies.</li>',
  attachTo: '.turtle top',
  advanceOn: '.turtle click',
  buttons: [
    { 
      text: 'Cerrar',
      action: tour.complete
    }
  ]
});