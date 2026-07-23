const { addonBuilder } = require("stremio-addon-sdk");
const { searchVideos } = require("./youtube");


const builder = new addonBuilder({

    id: "com.mytube.search",

    version: "1.0.0",

    name: "MyTube Search",

    description: "Search YouTube from Stremio",

    resources: [
        "catalog",
        "meta",
        "stream"
    ],

    types: [
        "movie"
    ],

    catalogs: [
        {
            type: "movie",
            id: "youtube-search",
            name: "MyTube YouTube",

            extra: [
                {
                    name: "search",
                    isRequired: false
                }
            ]
        }
    ]
});


// بحث YouTube
builder.defineCatalogHandler(async ({ extra }) => {

    const query = extra?.search || "YouTube";

    const videos = await searchVideos(query);


    return {
        metas: videos.map(video => ({

            id: video.id,

            type: "movie",

            name: video.name,

            poster: video.poster,

            description: video.description

        }))
    };

});


// تفاصيل الفيديو
builder.defineMetaHandler(async ({ id }) => {

    return {

        meta: {

            id: id,

            type: "movie",

            name: "YouTube Video"

        }

    };

});


// تشغيل الفيديو
builder.defineStreamHandler(async ({ id }) => {


    return {

        streams: [

            {

                title: "▶ Watch on YouTube",

                externalUrl:
                `https://www.youtube.com/watch?v=${id}`

            }

        ]

    };

});


module.exports = builder.getInterface();