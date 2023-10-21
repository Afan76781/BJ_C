var playerInstance = jwplayer("jwplayerDiv");

  // Function to switch to DRM 1
  function switchToDRM1() {
    playerInstance.setup({
      file: "http://cdn.live247stream.com/thelight/tv/playlist.m3u8",
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
      file: "http://cdn.live247stream.com/thelight/tv/playlist.m3u8",
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
      file: "http://cdn.live247stream.com/thelight/tv/playlist.m3u8",
      type: "hls",  // Set the type to HLS for M3U8 URLs
    });
  }
// Function to switch to another stream with M3U8 URL and no DRM
   function switchToOtherStream1() {
  playerInstance.setup({
    file: "http://cdn.live247stream.com/thelight/tv/playlist.m3u8",
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
        file: "http://cdn.live247stream.com/thelight/tv/playlist.m3u8",
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
