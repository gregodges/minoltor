const tarifs= [{
  boitiers: [
    {
      type: 'normal',
      name :'Nettoyage',
      price: '30'
    },
    {
      type: 'normal',
      name :'Réglage du télémètre',
      price: '30'
    },
    { type: 'normal',
      name :'Contrôle de vitesse et de cellule',
      price: '30'
    },
    {
      type: 'sub',
      name :'Si ajustement vitesse & cellule nécéssaire',
      price: '60'
    },
    {
      type:'range',
      name :'Changement des joints d\'étenchéité',
      price: '45 - 60'
    },
    {
      type:'range',
      name :'Révision compléte',
      price: '130 -  180'
    },
  ],
  Objectifs: [
    {
      type: 'range',
      name :'Nettoyage',
      price: '30 - 60'
    },
    {
      type: 'normal',
      name :'Réglage du mise au point',
      price: '30'
    },
    { type: 'range',
      name :'Nettoyage des lamelles gommées',
      price: '40 - 60'
    },
    {
      type: 'range',
      name :'Élimination des champignons',
      price: '45 - 70'
    },
    {
      type:'range',
      name :'Révision',
      price: '80 - 130'
    },
    {
      type:'range',
      name :'Révision compléte',
      price: '130 -  180'
    },
  ]
}]
export default tarifs;
