var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Todo = require('Todo');
var TodoList = require('TodoList');
describe('TodoList', ()=>{
  it('should exist', ()=>{
    expect(TodoList).toExist();
  });

  it('shoud render one Todo component for each todo item', ()=>{
    var todos = [
      {
        id: 2,
        text: 'new'
      },
      {
        id: 3,
        text: 'neew'
      }
    ];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

    expect(todosComponents.length).toBe(todos.length);
  });
  it('should render empty message if no todos', ()=>{
    var todos = [];
    var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
    var $el = $(ReactDOM.findDOMNode(todoList));
    expect($el.find('.container__message').length).toBe(1);
  });
});
