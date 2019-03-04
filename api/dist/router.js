'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _package = require('../package.json');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AppRouter = function () {
    function AppRouter(app) {
        _classCallCheck(this, AppRouter);

        this.app = app, this.setupRouters();
    }

    _createClass(AppRouter, [{
        key: 'setupRouters',
        value: function setupRouters() {

            var app = this.app;
            var uploadDir = app.get('storageDir');
            var upload = app.get('upload');

            //root routing
            app.get('/', function (req, res, next) {
                return res.status(200).json({
                    version: _package.version
                });
            });

            app.post('/api/upload', upload.array('files'), function (req, res, next) {
                var files = req.files;
                return res.json({
                    files: files
                });
            });
        }
    }]);

    return AppRouter;
}();

exports.default = AppRouter;
//# sourceMappingURL=router.js.map