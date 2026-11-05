(() => {
 const speaker=document.getElementById('speaker');
 const line=document.getElementById('line');
 const next=document.getElementById('next');
 const scenes={
  butler:[['DON EUSTAQUIO','Bienvenido a la mansión, señor. Permítame ocuparme de su estancia.'],['DON EUSTAQUIO','La casa lleva mucho tiempo cerrada. Le ruego que no se aleje demasiado.'],['DON EUSTAQUIO','Si escucha pasos en el piso superior, no se preocupe. La mansión tiene sus costumbres.']],
  fireplace:[['LA CHIMENEA','El fuego sigue encendido. Sin embargo, la estancia está vacía y la leña parece recién colocada.'],['LA CHIMENEA','Entre las cenizas distingues una pequeña pieza de metal ennegrecido.']],
  clock:[['RELOJ DE PIE','Las agujas se han detenido a las 11:59. El péndulo sigue oscilando lentamente.']],
  stairs:[['ESCALERA PRINCIPAL','La alfombra granate sube hacia el piso superior. Desde arriba llega un crujido.'],['DON EUSTAQUIO','Le aconsejo que no suba sin permiso, señor.']],
  door:[['PUERTA LATERAL','La puerta está cerrada. Una corriente helada se filtra por debajo.'],['PUERTA LATERAL','Al otro lado suenan tres golpes secos.']],
  flowers:[['JARRÓN','Las flores están frescas. Una de ellas tiene una cinta negra atada al tallo.']]
 };
 let active=scenes.butler, index=0;
 function render(){speaker.textContent=active[index][0];line.textContent=active[index][1]}
 function select(key){active=scenes[key]||scenes.butler;index=0;render()}
 document.querySelectorAll('.hotspot').forEach(b=>b.addEventListener('click',()=>select(b.dataset.key)));
 next.addEventListener('click',()=>{index=(index+1)%active.length;render()});
 document.addEventListener('keydown',e=>{if(e.key===' '||e.key==='Enter'){e.preventDefault();index=(index+1)%active.length;render()}});
 render();
})();