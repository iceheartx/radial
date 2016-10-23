require('babel-polyfill');
const Bootstrap = require('../bootstrap');
const React = require('react');
const types = React.PropTypes;
const {useStore} = require('p-flux');
const {useRouter} = require('./use_router');
const Router = require('./router');
require('pui-css-colors');
// require('pui-css-forms');

class Application extends React.Component {
    static propTypes = {
        config: types.object.isRequired,
        store: types.object.isRequired,
        router: types.oneOfType([types.object, types.func])
    };

    render() {
        const {config, store, router} = this.props;
        return (
            <div className="app">
                <div className="controls bg-dark-9">
                    <form role="form">
                        <h1>Menu</h1>
                        <div className="form-group">
                            <div>
                                <input type="number" className="form-control" id="svgSize"/>
                                Menu Size
                            </div>
                        </div>
                        <div className="form-group">
                            <label>
                                <input type="number" className="form-control" id="svgCenterX"/>
                                Menu Center X
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                <input type="number" className="form-control" id="svgCenterY"/>
                                Menu Center Y
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                <input type="number" className="form-control" id="svgMargin"/>
                                Menu Margin
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                <input type="text" className="form-control" id="svgBgcolor"/>
                                Menu Background Color
                            </label>
                        </div>
                        <h1>Buttons</h1>
                        <div className="form-group">
                            <label>
                                <input type="text" className="form-control" id="buttonBgcolor"/>
                                Button Background Color
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                <input type="text" className="form-control" id="buttonBorderColor"/>
                                Button Border Color
                            </label>
                        </div>
                        <div className="form-group">
                            <label>
                                <input type="text" className="form-control" id="buttonHoverColor"/>
                                Button Hover Color
                            </label>
                        </div>
                        <h1>Icons</h1>
                        <div className="form-group">
                            <label>
                                <input type="text" className="form-control" id="iconsFillColor"/>
                                Icons Fill Color
                            </label>
                        </div>
                        <div className="centerButtonContainer">
                        <button type="submit" className="btn-default">Draw</button>
                            </div>
                    </form>
                </div>
                <div className="radialHolder">
                    I contain multitudes;
                </div>
            </div>
        );
    }
}

const EnhancedApplication = useStore(useRouter(Application),
    {
        store: require('../store'),
        actions: [],
        dispatcherHandlers: [
            require('../dispatchers/main_dispatcher'),
            require('../dispatchers/api_dispatcher')
        ],
        /* eslint-disable no-console */
        onDispatch: (event) => {
            console.info('dispatching event', event);
        }
        /* eslint-enable no-console */
    }
);

Bootstrap.init(EnhancedApplication);

module.exports = EnhancedApplication;
