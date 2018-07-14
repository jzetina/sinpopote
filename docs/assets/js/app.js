let tour = new Shepherd.Tour({
  defaults: {
    classes: 'shepherd-theme-arrows',
  }
});

tour.addStep('el-popote', {
  title: '1 Minuto Para Fabricar Un Popote',
  text: 'El popote es un polímero ligero que viaja desde <br>el confort de una butaca al estómago de tortugas, <br>mamíferos marinos y peces, entre otros organismos. <br>Los popotes amenazan los ecosistemas costeros y marinos.',
  attachTo: '#sin-popote-container right',
  advanceOn: '#turtle click',
  buttons: [
    { 
      text: 'Siguiente',
      action: tour.next
    }
  ]
});

tour.addStep('promedio-uso', {
  title: 'Tienen Un Promedio De Uso De 20 Minutos',
  text: '<ul><li>&spades; El 33% del plástico se usa solo una vez y se desecha.</li><li>&spades; En México, el 95% de los popotes que se <br>utilizan no son reciclables.</li></li><li>&spades; Las aves playeras confunden el plástico con alimento <br>y ponen su vida en peligro.</li><li>&spades; Cada vez que dice NO al uso del popote, contribuyes a <br>tener playas y océanos más limpios y se mejora el <br>hábitat de diferentes especies.</li>',
  attachTo: '#turtle top',
  advanceOn: '#dolphin click',
  buttons: [
    {
      text: 'Anterior',
      action: tour.back
    },
    { 
      text: 'Siguiente',
      action: tour.next
    }
  ]
});

tour.addStep('200-descomponerse', {
  title: '200 Años Para Descomponerse',
  text: 'Si se usa con frecuencia, una persona <br>habrá consumido alrededor de 38 mil <br>popotes durante toda su vida, la mayoría <br>de los cuales terminarán en rellenos <br>sanitarios o serán arrastrados al ambiente <br>contaminando suelo, ríos y mares.',
  attachTo: '#dolphin left',
  advanceOn: '#fish-two-a click',
  buttons: [
    {
      text: 'Anterior',
      action: tour.back
    },
    { 
      text: 'Siguiente',
      action: tour.next
    }
  ]
});

tour.addStep('100K-muertes', {
  title: 'Más De 100 Mil Muertes De Especies Marinas',
  text: 'Las impactantes imágenes han demostrado <br>el efecto que el plástico provoca en la vida marina. <br>Se estima que cada año al menos un millón <br>de aves marinas, 100 mil mamíferos marinos y <br>tortugas marinas mueren cuando se enredan <br>o ingieren la contaminación plástica.',
  attachTo: '#fish-two-a top',
  buttons: [
    {
      text: 'Anterior',
      action: tour.back
    },
    { 
      text: 'Cerrar',
      action: tour.complete
    }
  ]
});