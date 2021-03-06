const React = require('react');
const types = require('react').PropTypes;

function isObject(obj) {
  return typeof obj === 'object';
}

function toFlattenedRoutes(routesHash) {
  return Object.keys(routesHash).reduce((paths, parent) => {
    if (isObject(routesHash[parent])) {
      const children = toFlattenedRoutes(routesHash[parent]);
      Object.keys(children).forEach(child => paths[parent + child] = children[child]);
    } else {
      paths[parent] = routesHash[parent];
    }
    return paths;
  }, {});
}

const routes = {
  '/': 'todoList'
};

class Router extends React.Component {
  static propTypes = {
    router: types.oneOfType([types.object, types.func])
  };

  constructor(props, context) {
    super(props, context);
    const {state} = this;
    this.state = {...state, Page: TodoPage };
  }

  componentDidMount() {
    const {router} = this.props;
    Object.entries(toFlattenedRoutes(routes)).map(([path, callbackName]) => {
      router.get(path, this[callbackName]);
    });
  }

  apiPage = () => {
    this.setState({Page: ApiPage});
  };

  todoList = () => {
    this.setState({Page: TodoPage});
  };

  showUsers = () => {
    this.setState({Page: UserListPage});
  };

  createUser = () => {
    this.setState({Page: UserCreatePage});
  };

  render() {
    const {Page} = this.state;
    return (
      <Page {...this.props}/>
    );
  }
}

module.exports = Router;
