const axios = require("axios");
const config = require("./config");

async function searchVideos(query) {

    try {

        const response = await axios.get(
            "https://www.googleapis.com/youtube/v3/search",
            {
                params: {
                    key: config.youtubeApiKey,
                    part: "snippet",
                    q: query,
                    type: "video",
                    maxResults: 20,
                    order: "relevance"
                }
            }
        );


        console.log(
            "Search:",
            query,
            "Results:",
            response.data.items.length
        );


        return response.data.items.map(video => ({

            id: video.id.videoId,

            name: video.snippet.title,

            description: video.snippet.description,

            poster:
                video.snippet.thumbnails.high.url,

            youtube:
                `https://www.youtube.com/watch?v=${video.id.videoId}`

        }));


    } catch (error) {

        console.log(
            "YouTube Search Error:",
            error.response?.data || error.message
        );

        return [];
    }

}


module.exports = {
    searchVideos
};