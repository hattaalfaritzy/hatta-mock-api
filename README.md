# hatta-mock-api

Simple Mock API by hattaalfaritzy

## Deploy

https://hatta-mock-api.vercel.app/

## Getting Started

1. Clone this repo.
2. Run `yarn install` to install dependencies.
3. Go to the project directory.
4. Configure environment variables
5. Run `yarn start`.

## Setup .env file

Create `.env` file on code editor similar to `.env.example` or copy the code below : (see [official docs](https://nextjs.org/docs/basic-features/environment-variables))
```
DB_CONNECTION = 
DB_PORT = 
SECRET_KEY = 
CLOUDINARY_URL = 
CLOUDINARY_NAME = 
CLOUDINARY_API_KEY = 
CLOUDINARY_API_SECRET = 
GOOGLE_DATABASE_URL = 
```

## Scripts

- `yarn start` - Run the application

## File Structure

```raw
.
├── 📂 config/                 Configuration files for the application (e.g. firebase, cloudinary)
├── 📂 middlewares/            Middlewares files for the application (e.g. cors, body-parser)
├── 📂 src/
│   ├── 📂 controllers/        Controllers files
│   ├── 📂 models/             Models files which create a schema for MongoDB
│   ├── 📂 routes/             
│   │   ├── 📂 private/        Express.js routes for private access
│   │   └── 📂 public/         Express.js routes for public access
├── .env.example               Specify which environment variables are server-only and which should be exposed to the browser
├── .gitignore
├── index.js                   The startup, routing and other functions for the application
├── package.json
└── vercel.js                  Vercel configuration

Notes:
📂: Folder
```

## Tools

- **bcryptjs** : **^2.4.3** [https://github.com/dcodeIO/bcrypt.js](https://github.com/dcodeIO/bcrypt.js)
- **body-parser** : **^1.20.1** [https://github.com/expressjs/body-parser](https://github.com/expressjs/body-parser)
- **cloudinary** : **^1.32.0** [https://yarnpkg.com/package/cloudinary](https://yarnpkg.com/package/cloudinary)
- **cors** : **^2.8.5** [https://yarnpkg.com/package/cors](https://yarnpkg.com/package/cors)
- **dotenv** : **^16.0.3** [https://yarnpkg.com/package/dotenv](https://yarnpkg.com/package/dotenv)
- **express** : **^4.18.2** [https://expressjs.com/](https://expressjs.com/)
- **firebase-admin** : **^11.3.0** [https://yarnpkg.com/package/firebase-admin](https://yarnpkg.com/package/firebase-admin)
- **jsonwebtoken** : **^8.5.1** [https://yarnpkg.com/package/jsonwebtoken](https://yarnpkg.com/package/jsonwebtoken)
- **mongoose** : **^6.8.0** [https://mongoosejs.com/](https://mongoosejs.com/)
- **multer** : **^1.4.5-lts.1** [https://yarnpkg.com/package/multer](https://yarnpkg.com/package/multer)
- **multer-storage-cloudinary** : **^4.0.0** [https://www.npmjs.com/package/multer-storage-cloudinary](https://www.npmjs.com/package/multer-storage-cloudinary)
- **nodemon** : **^2.0.20** [https://yarnpkg.com/package/nodemon](https://yarnpkg.com/package/nodemon)
