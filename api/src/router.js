import {version} from '../package.json';

class AppRouter {

    constructor(app) {
        this.app = app,
        this.setupRouters();
    }

    setupRouters() {

        const app = this.app;
        const uploadDir = app.get('storageDir');
        const upload = app.get('upload');

        //root routing
        app.get('/', (req, res, next) => {
            return res.status(200).json({
                version: version
            });
        });

        app.post('/api/upload', upload.array('files'), (req, res, next) => {
            const files = req.files;
            return res.json({
                files: files,
            })

        });
    }

}

export default AppRouter;