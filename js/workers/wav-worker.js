(function() {
    'use strict';

    importScripts('../encoders/WavAudioEncoder.min.js');

    var wavEncoder, config;

    var clearBuffer = function() {
        wavEncoder.cleanup();
    };


    var init = function(prefConfig) {
        config = prefConfig || {};
        wavEncoder = new WavAudioEncoder(config.sampleRate || 44100, 1);
        clearBuffer();
        self.postMessage({
            cmd: 'init'
        });
    };

    var encode = function(arrayBuffer) {
        wavEncoder.encode([arrayBuffer]);
    };

    var finish = function() {
        var blob = wavEncoder.finish();
        self.postMessage({
            cmd: 'end',
            blob: blob
        });
        clearBuffer();
    };

    self.onmessage = function(e) {
        switch (e.data.cmd) {
            case 'init':
                init(e.data.config);
                break;
            case 'encode':
                encode(e.data.buf);
                break;
            case 'finish':
                finish();
                break;
        }
    };
})();