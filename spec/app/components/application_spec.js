require('../spec_helper');

describe('Application', () => {
  let TodoList;

  beforeEach(() => {
    const Application = require('../../../app/components/application');
    TodoList = require('../../../app/components/todo_list');
    spyOn(TodoList.prototype, 'render').and.callThrough();
    const config = {title: 'title'};
    ReactDOM.render(<Application {...{config, Dispatcher}}/>, root);
  });

});
