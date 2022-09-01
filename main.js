//1 - download video
// 2- process video
// asynchronous callback

// callback queue & Event-loop (async)
function downloadVideo(file, callback) {
    console.log(`Video downloading [${file}]`);
     setTimeout(() => {
         console.log(`Video downloading completed [${file}]`)
        callback(file);
     }, 2000);
}

function processDownloadedVideo(videoFile) {
    console.log(`Processing download video ${videoFile}`);
}

// time taking => async
downloadVideo('CodingScenes.mp4', function (downloadedFile) {
    processDownloadedVideo(downloadedFile); // wait till file gets downloaded
});
