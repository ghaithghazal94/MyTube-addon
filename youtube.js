const axios = require("axios");

async function search(query) {

    try {

        const response = await axios.get(
            "https://www.googleapis.com/youtube/v3/search",
            {
                params: {
                    key: process.env.YOUTUBE_KEY,
                    part: "snippet",
                    q: query,
                    maxResults: 20,
                    type: "video"
                }
            }
        );


        return response.data.items.map(item => ({

            id: item.id.videoId,
            name: item.snippet.title,
            description: item.snippet.description,
            poster: item.snippet.thumbnails.high.url

        }));


    } catch (error) {

        console.log(
            error.response?.data || error.message
        );

        return [];

    }

}


module.exports = {
    search
};
