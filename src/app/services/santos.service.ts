import { Injectable } from '@angular/core';

@Injectable()
export class SantosService {

  private santos:Santo[] = [
    {
      nombre: "TUYA",
      bio: "Compañia de financiamiento tuya",
      img: "assets/img/TUYA.png",
      aparicion: "1894- 1941",
      genero:"Masculino"
    },
    /*{
      nombre: "San Agustín, obispo y Doctor de la Iglesia",
      bio: "Agustín es, probablemente, el santo más humano y universal de la antigüedad. Al leer sus Confesiones penetra en las profundidades del corazón humano y se alaba la misericordia de Dios, que obró tal milagro de conversión en un pecador. La ciudad de Tagaste, en el norte de África, donde nació el 13 de noviembre de 354, pronto fue demasiado pequeña para el hijo de un pagano voluble y de una cristiana pacífica y muy devota. Sin haber recibido el bautismo y más parecido, en sus  inclinaciones, al padre que a la madre, odió la escuela y la vida ordenada. En la escuela de altos estudios de Cartago, se unió a una muchacha que le dio un hijo, al que, en forma atrevida, puso por nombre 'Adeodato' ('regalo de Dios').",
      img: "assets/img/Agustin.jpg",
      aparicion: "354-430",
      genero:"Masculino"
    },
    {
      nombre: "San Padre Pío de Pietrelcina",
      bio: "El Padre Pío de Pietrelcina fue un sacerdote franciscano nacido en Pietrelcina, un pequeño pueblo de la provincia de Benevento, Italia, el 25 de mayo de 1887. Nacido en una familia muy devota, el pequeño Francesco Forgione, se convertiría en un místico que no solo podría realizar milagros de todo tipo sino que también recibiría los estigmas de Cristo. Desde muy temprano mostró inclinación por la vida espiritual y al llegar a la adolescencia quiso consagrar su vida a Dios. Sus padres buscaron la manera de ayudarlo. Como no poseía la educación requerida para entrar a un convento, su padre viajó a Estados Unidos para ganar el dinero necesario para pagar los estudios de su hijo. Así Francesco pudo entrar a hacer su noviciado con los frailes capuchinos en Morcone, y en 1905 tomó los hábitos franciscanos y el nombre de Fra Pio, en honor al Papa Santo Pío V, patrón de Pietrelcina. En 1910 se convirtió en sacerdote.",
      img: "assets/img/Pio.jpg",
      aparicion: "1887-1968",
      genero: "Masculino"
    },
    {
      nombre: "Santa Teresita del Niño Jesús",
      bio: "Teresa era la última de cinco hermanas - había tenido dos hermanos más, pero ambos habían fallecido - Tuvo una infancia muy feliz. Sentía gran admiración por sus padres: «No podría explicar lo mucho que amaba a papá, decía Teresa, todo en él me suscitaba admiración».Cuando sólo tenía cinco años, su madre murió, y se truncó bruscamente su felicidad de la infancia. Desde entonces, pesaría sobre ella una continua sombra de tristeza, a pesar de que la vida familiar siguió transcurriendo con mucho amor. Es educada por sus hermanas, especialmente por la segunda; y por su gran padre, quien supo inculcar una ternura materna y paterna a la vez. Con él aprendió a amar la naturaleza, a rezar y a amar y socorrer a los pobres. Cuando tenía nueve años, su hermana, que era para ella «su segunda mamá», entró como carmelita en el monasterio de la ciudad. Nuevamente Teresa sufrió mucho, pero, en su sufrimiento, adquirió la certeza de que ella también estaba llamada al Carmelo.Durante su infancia siempre destacó por su gran capacidad para ser «especialmente» consecuente entre las cosas que creía o afirmaba y las decisiones que tomaba en la vida, en cualquier campo.",
      img: "assets/img/SantaTeresa.PNG",
      aparicion: "1873-1897",
      genero:"Femenino"
    },
    {
      nombre: "San Pedro",
      bio: "Natural de Betsaida, aldea del lago de Genezaret. Después de la resurrección de Jesucristo, asumió la dirección de la Iglesia. Trasladándose de Jerusalén a Antioquía, fundó su comunidad cristiana. Posteriormente fijó su residencia en Roma. Martirizado hacia los setenta y cinco años de edad. Fue San Pedro un pobre pescador de Galilea, residente en Cafarnaúm, en casa de su suegra. Era un hombre sencillo, con poca instrucción, y vivía de su modesto oficio.",
      img: "assets/img/spedro.jpg",
      aparicion: "Murió en el 67",
      genero: "Masculino"
    },
    {
      nombre: "San Pablo",
      bio: "San Pablo Apóstol, Saulo como lo describen las santas escrituras, era un perseguidor de cristianos, no creía que existiera un Dios sobrenatural, un día se dirigía a la ciudad de Damasco donde seguiría con su persecución y fue cuando Dios mismo se le apareció para preguntarle por qué lo perseguía, quedó ciego en ese momento.",
      img: "assets/img/san-pablo.jpg",
      aparicion: "00",
      genero: "Masculino"
    },
    {
      nombre: "Santa Juana de Arco",
      bio: "Esta santa a los 17 años llegó a ser heroína nacional y mártir de la religión. Juana de Arco nació en el año 1412 en Donremy, Francia. Su padre se llamaba Jaime de Arco, y era un campesino. Juana creció en el campo y nunca aprendió a leer ni a escribir. Pero su madre que era muy piadosa le infundió una gran confianza en el Padre Celestial y una tierna devoción hacia la Virgen María. Cada sábado la niña Juana recogía flores del campo para llevarles al altar de Nuestra Señora. Cada mes se confesaba y comulgaba, y su gran deseo era llegar a la santidad y no cometer nunca ningún pecado. Era tan buena y bondadosa que todos en el pueblo la querían.",
      img: "assets/img/Juana_de_Arco.jpg",
      aparicion: "1412-1431",
      genero: "Femenino"
    }*/
  ];

  constructor() {
    console.log("Servicio listo para ser usado!!")
   }

   getSantos():Santo[]{
     return this.santos;
   }

   getSanto(index:number){
     return this.santos[index];
   }

   buscarSantos(termino:string):Santo[]{
     let santoArr:Santo[]=[];
     termino = termino.toLowerCase();
     for (let i=0; i < this.santos.length;i++){
       let santo = this.santos[i]
       let nombre = santo.nombre.toLowerCase();
       if(nombre.indexOf(termino)>=0){
         santo.index=i;
         santoArr.push(santo)
       }
     }
     return santoArr;
   }

}

export interface Santo{
  nombre:string;
  bio:string;
  img:string;
  aparicion:string;
  genero:string;
  index?:number;
};
