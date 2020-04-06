import { v4 as uuidv4 } from 'uuid';
export const films= [
    { title: 'Inception', rating: 4, image: 'https://i.ytimg.com/vi/E1iqGiX0lSg/movieposter.jpg', year: 2010 ,  id:uuidv4() },
    { title: 'Shawshank redemption', rating: 2, image: 'https://miro.medium.com/max/1120/1*jDPFk_nRQpNPqFHdTM9SJA.jpeg', year: 1994, id:uuidv4() },
    { title: 'Blade Runner', rating: 3, image: 'https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png', year: 2017, id:uuidv4() },
    { title: 'Da Vinci Code', rating: 5, image: 'https://fr.web.img6.acsta.net/medias/nmedia/18/36/20/56/18613332.jpg', year: 2000,id:uuidv4() }
];