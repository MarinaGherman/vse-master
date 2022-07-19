const express = require("express");
const next = require("next");
const fs = require("fs");
const path = require("path");

// const morgan = require("morgan");
// const {createLogger, transports, format} = require("winston");

// require("winston-daily-rotate-file");
// const {combine} = format;

// const io = require('@pm2/io');

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;
const nextI18NextMiddleware = require('next-i18next/dist/commonjs/middleware');
const nextI18next = require('./next-i18next.config');

app
    .prepare()
    .then(async () => {

        const server = express();

        // const logger = createLogger({
        //     transports: [
        //         new transports.DailyRotateFile({
        //             level: 'info',
        //             filename: "./logs/http-%DATE%.log",
        //             handleExceptions: true,
        //             json: true,
        //             datePattern: "YYYY-MM-DD",
        //             zippedArchive: false,
        //             maxSize: '20mb',
        //             maxFiles: '14d',
        //             format: combine(format.json())
        //         })
        //     ]
        // });
        //
        // // store logs
        // server.use(morgan("combined", {
        //     stream: {
        //         write: message => {
        //             logger.info(message)
        //         }
        //     }
        // }));
        //
        // // realtime pm2 logs
        // server.use(morgan('dev'));

        await nextI18next.initPromise;

        server.get('/sitemap.xml', (req, res) => {
            res.contentType('application/xml');
            return res.send(fs.readFileSync(path.join(__dirname , 'sitemap.xml')));
        });

        server.get('/robots.txt', (req, res) => {
            return res.sendFile(__dirname + "/robots.txt");
        });

        server.use(nextI18NextMiddleware(nextI18next));


        server.listen(port, err => {
            if (err) throw err;
            console.log(`> Ready on http://localhost:${port}`);
        });

    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });
