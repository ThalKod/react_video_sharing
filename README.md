<p align="center">
  <img width="260" height="150" src="https://github.com/ThalKod/react_video_sharing/blob/master/src/assets/images/logo.svg">
 <h1 align="center">Circle</h1>

 <p align="center">
 <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-yellow.svg"/></a>
 </p>
  <img align="center"  src="https://github.com/ThalKod/react_video_sharing/blob/master/Screen%20Shot%202019-05-03%20at%2012.10.56%20PM.png">

 Circle is a video sharing web app, simple to view, shares and discover new videos...
</p>



## Demo
Check out the [Demo](http://circlevideo.thal.tech).
N.B. If you try to upload new videos on the demo site and it fails it's probably because the filestack files upload quota is reached... This being just a demo i'm subscribed to their free plans... and it only allow 100 uploads per month.

## Built With:
* [React Js](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [Node Js](https://nodejs.org/en/) - A JavaScript runtime built on Chrome's V8 JavaScript engine.

Fan of [Typescript](https://www.typescriptlang.org/) ? check out the typescript version of the [Restfull API](https://github.com/ThalKod/typescript_circle_api)

## Documentation
* [Requirements](#requirements) 
* [Installation](#installation)
* [Contribution](#contribution)
* [TODO](#todo)
* [License](#license)



## Requirements
* [ffmpeg](https://ffmpeg.org/) - FFmpeg is a collection of libraries and tools to process multimedia content such as audio, video, subtitles and related metadata.
* [A Subscrition to FIlestack API](https://www.filestack.com/) - The File Handling Service for Developers
* [MongoDB](https://www.mongodb.com/) - Database Solution

## Installation

Clone the repo:
```js
 git clone https://github.com/ThalKod/react_video_sharing.git
```
 ### Install and start the api
 
 Create a .env file at the route of your api folder:
 
 ```bash
  $ cd react_video_sharing/api/
  $ touch .env
 ```
 Copy and Update this template: 
 ```js
 #JWT
 JWT_SECRET = YOUR_JSON_WEB_TOKEN-SECRET_KEY
 JWT_REFRESH_TOKEN_SECRET = YOUR_REFRESH_TOKEN_SECRET_KEY

 #Database
 DB_URL = YOUR_DB-URL
 
 #Filestack
 FILESTACK_API_KEY= YOUR_FILESTACK_API_KEY

 #API
 API_BASE_URL = /api/v0   
 ```
 Install and start the API:
```bash
 $ npm install
 $ npm run dev
```
The API should be running on localhost:3080

### Install and start the client

Create a .env file at the root of your client folder:

```bash
  $ cd react_video_sharing/
  $ touch .env
 ```
 
 Copy and Update this template: 
 ```js
 
 REACT_APP_API_URL = /api/v0
 
 #Filestack
 REACT_APP_FILESTACK_API_KEY  = YOUR_FILE_STACK_API_KEY

 NODE_PATH=src   
 ```
 Install and start the React client:
```bash
 $ yarn install
 $ yarn start
```
Client is running on localhost:3000

## Contribution

Feel Free to contribute, PR are the most welcome :) , fork the development branch and start working...

## TODO

I'll will keep working on :
- [ ] Adding banner image and profile photo upload on channel page.
- [ ] Adding Filter on Search result page.
- [ ] Add caching with redis.
- [ ] Refactor recursive coments logic
- [ ] Fix mobile responsive UI issue
- [ ] Add Like videos Feature
- [ ] More filter overall
- [ ] Add Like comment Feature
- [ ] Add more test
- [ ] And more... 


## License

MIT License

Copyright (c) 2019 Thal Marcelin

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
