var playerInstance = jwplayer("jwplayerDiv");

  // Function to switch to DRM 1
  function switchToDRM1() {
    playerInstance.setup({
      file: "https://tapmadlive.akamaized.net/tapmadold/92news.smil/playlist.m3u8",
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "6a9e4204f3f8577ebf6e79b3b18573f8",
          "key": "5a8964c25a3a6eba7319f8e4c7efa3aa"
        }
      }
    });
  }

  // Function to switch to DRM 2
  function switchToDRM2() {
    playerInstance.setup({
      file: "https://bpprod5linear.akamaized.net/bpk-tv/irdeto_com_Channel_250/output/manifest.mpd",
      type: "dash",
      drm: {
        "clearkey": {
          "keyId": "06341bf3dd635e6ca5c71188d0210373",
          "key": "201e9857b48590ef73291e35f182a604"
        }
      }
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
  function switchToOtherStream() {
    playerInstance.setup({
      file: "https://cdn06lhr.tamashaweb.com:8087/hls/102811/l9cVZ4dg38t/smil:mpfour.smil/1080p.mp4_chunk.m3u8",
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
   function switchToOtherStream1() {
  playerInstance.setup({
    file: "https://dai.fancode.com/primary/85196_english_hls_5390ta-no/1080p.m3u8",
    type: "hls",  // Set the type to HLS for M3U8 URLs
  });
  }

   function switchToDRM() {
     playerInstance.setup({
         file: "#",
           type: "hls",  // Set the type to HLS for M3U8 URLs
         });
         }
  function switchToDRM() {
    playerInstance.setup({
        file: "https://isp.sananda.online/Star/video.m3u8",
          type: "hls",  // Set the type to HLS for M3U8 URLs
        });
        }
      // Display a pop-up message when the page starts
       window.addEventListener("load", function() {
      var result = window.confirm("Join Telegram Group More Update");
      if (result) {
        window.location.href = "https://telegram.me/+J00m9kwSn6g0ZTJl";
      }
    });
