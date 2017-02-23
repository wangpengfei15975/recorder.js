# recorder.js
:microphone:基于HTML5的录音功能，输出格式为mp3文件。  
## 前言
完全依赖H5原生API  
所涉及的API：`WebRTC、AudioContext、Worker、Video/Audio API、Blob、URL`  
## 兼容性
Chrome、FF、Edge、QQ、360(注：目前IE和Safari全版本不兼容)  
其中Chrome47以上以及QQ浏览器强制要求HTTPS的支持  
请尝试使用FF、Edge、360等浏览器进行体验，或将项目下载到本地通过localhost的方式  
## 使用方式
```js
var recorder = new Recorder({
    sampleRate: 44100, //采样频率，默认为44100Hz(标准MP3采样率)
    bitRate: 128, //比特率，默认为128kbps(标准MP3质量)
    success: function(){ //成功回调函数
    },
    error: function(msg){ //失败回调函数
    },
    fix: function(msg){ //不支持H5录音回调函数
    }
});
```
## API
```js
//开始录音
recorder.start();
//停止录音
recorder.stop();
//获取MP3编码的Blob格式音频文件
recorder.getBlob(function(blob){ //获取成功回调函数，blob即为音频文件
//  ...
},function(msg){ //获取失败回调函数，msg为错误信息
//  ...
});
```
