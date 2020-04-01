import { Injectable } from '@angular/core';
import { Pelicula } from '../models/pelicula';

@Injectable()
export class PeliculaService {

    public peliculas: Pelicula[];

    constructor(){
        this.peliculas = [
            new Pelicula("Spiderman 4", 2019, "https://imagenes.heraldo.es/files/image_990_v1/files/fp/uploads/imagenes/2019/03/15/marvel-lanza-el-nuevo-trailer-de-la-ultima-pelicula-de-los-vengadores.r_d.370-221.png"),
            new Pelicula("Los vengadores, Endgame", 2018, "https://imagenes.heraldo.es/files/image_990_v1/files/fp/uploads/imagenes/2019/03/15/marvel-lanza-el-nuevo-trailer-de-la-ultima-pelicula-de-los-vengadores.r_d.370-221.png"),
            new Pelicula("Batman vs Superman", 2015, "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias/el-estreno-de-batman-vs-superman-se-retrasa-a-2016/7331194-3-esl-ES/El-estreno-de-Batman-Vs-Superman-se-retrasa-a-2016.jpg?crop=1xw:0.9803921568627451xh;center,top&resize=480:*"),
           /* {year: 2019, title: "Spiderman 4", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcROWZGjqPXz3Cz_kt1l9j2snNlZacLlgt94oGwy2JcTaCjs_Xom'},
            {year: 2018, title: "Los vengadores, Endgame", image:'https://imagenes.heraldo.es/files/image_990_v1/files/fp/uploads/imagenes/2019/03/15/marvel-lanza-el-nuevo-trailer-de-la-ultima-pelicula-de-los-vengadores.r_d.370-221.png'},
            {year: 2015, title: "Batman vs Superman", image:'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias/el-estreno-de-batman-vs-superman-se-retrasa-a-2016/7331194-3-esl-ES/El-estreno-de-Batman-Vs-Superman-se-retrasa-a-2016.jpg?crop=1xw:0.9803921568627451xh;center,top&resize=480:*'},
            {year: 2020, title: "Batman vs Superman 2", image:'https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/noticias/el-estreno-de-batman-vs-superman-se-retrasa-a-2016/7331194-3-esl-ES/El-estreno-de-Batman-Vs-Superman-se-retrasa-a-2016.jpg?crop=1xw:0.9803921568627451xh;center,top&resize=480:*'} */
          ];
    }

    holaMundo() {
        return'Hola mundo desde un servicio de Angular!';
    }


    getPeliculas(){
        return this.peliculas;
    }
}