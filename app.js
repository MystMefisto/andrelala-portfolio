const videoContainer = document.querySelector('.video-container');

const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCXNQhYq0uSXnsRdDr4XSk-A&part=snippet%2Cid&order=date&maxResults=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7e7a5f3414msh437ee36775c5adep1c2b52jsnd5f3ca61a09b',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchVideos(url,options){
	const response = await fetch(url, options);
	const result = await response.json();
     result.items.forEach(element => {
        if(element.id.kind==='youtube#video'){
        const title = element.snippet.title;
        const thumbnail = element.snippet.thumbnails.high.url;
        const link = element.id.videoId;
        videoContainer.innerHTML += `
        <div class="video">
                <a href="https://www.youtube.com/watch?v=${link}">
                <img src='${thumbnail}' class="video-thumbnail">
                </a>
                <p class="video-title">${title}</p>
            </div>
         `
        }
     });
	console.log(result.items);    
}

document.addEventListener('DOMContentLoaded',()=>{
    fetchVideos(url,options);
})