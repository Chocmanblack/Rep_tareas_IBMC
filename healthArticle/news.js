let xhrNews = new XMLHttpRequest();
let urlNews = './news.json'

xhrNews.open('GET', urlNews, true);
xhrNews.responseType = 'json';
xhrNews.onload = function(){
    let noticias = xhrNews.response.noticias
    let noticiasDiv = document.getElementById('noticias');

    noticias.forEach(noticia => {
        let noticiaDiv = document.createElement('div');
        noticiaDiv.classList.add('noticia');

        let titleNews = document.createElement('h3');
        titleNews.textContent = noticia.title;
          
        let subtitle = document.createElement('h4');
        subtitle.textContent = `${noticia.subtitulo} - ${noticia.fecha}`;
          
        let news = document.createElement('p');
        news.textContent = noticia.news;
          
        noticiaDiv.appendChild(titleNews);
        noticiaDiv.appendChild(subtitle);
        noticiaDiv.appendChild(news);
        
        noticiasDiv.appendChild(noticiaDiv);

    });
}
xhrNews.send()