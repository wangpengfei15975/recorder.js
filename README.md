# recorder.js
:microphone:基于HTML5的录音功能，输出格式为mp3/wav文件。  
## 前言
完全依赖H5原生API  
所涉及的API：`WebRTC、AudioContext、Worker、Video/Audio API、Blob、URL`  
## 兼容性
安卓设备: `Chrome(>66)`, `Opera(>37)`, `Firfox(>57)`, `UCBrowser(>11.8)`  
iOS设备: `(>iOS11) 理论上使用WKWebView的所有浏览器`  
桌面设备: `Chrome(>53)`, `Firfox(>42)`, `Edge(>12)`, `Safari(>11.1)`  
注:不兼容IE.   
其中 Chrome47 以上以及 QQ浏览器 和 WKWebView 强制要求HTTPS的支持  
请尝试使用Firfox、Edge、360等浏览器进行体验，或将项目下载到本地通过localhost的方式  

## 使用方式
```js
var recorder = new Recorder({
    sampleRate: 44100, //采样频率，默认为44100Hz(标准MP3采样率)
    bitRate: 128, //比特率，默认为128kbps(标准MP3质量)
    fmt: "mp3" //格式，支持mp3和wav 默认为 mp3
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
