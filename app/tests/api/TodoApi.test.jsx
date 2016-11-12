var expect = require('expect');

var TodoApi = require('TodoApi');

describe('TodoApi',()=>{
  beforeEach(()=>{
    localStorage.removeItem('todos');
  });
  it('should exist',()=>{
    expect(TodoApi).toExist();
  });
  describe('setTodos',()=>{
    it('should set valid todos array',()=>{
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      TodoApi.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));

      expect(actualTodos).toEqual(todos);
    });
    it('should not set invalid todos array',()=>{
      var badTodos = {a:'b'};
      TodoApi.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });
  describe('getTodos',()=>{
    it('should return empty array for bad localStoragedata',()=>{
      var actualTodos = TodoApi.getTodos();
      expect(actualTodos).toEqual([]);
    });
    it('should return todo if valid array in localStorage',()=>{
      var todos = [{
        id: 23,
        text: 'test all files',
        completed: false
      }];
      localStorage.setItem('todos',JSON.stringify(todos));
      var actualTodos = TodoApi.getTodos();
      expect(actualTodos).toEqual(todos);
    });
  });
  describe('filteredTodos',()=>{
    var todos = [
      {
        id:1,
        text: 'Text',
        completed: true
      },
      {
        id:2,
        text: 'someText',
        completed: false
      },
      {
        id:3,
        text: 'someText',
        completed: true
      }
    ];
    it('should show all items if showCompleted is true',()=>{
      var filteredTodo = TodoApi.filteredTodos(todos,true,'');
      expect(filteredTodo.length).toBe(3);
    });
    it('should show uncompleted items if showCompleted is false',()=>{
      var filteredTodo = TodoApi.filteredTodos(todos,false,'');
      expect(filteredTodo.length).toBe(1);
    });
    it('should filter todos by search text',()=>{
      var filteredTodo = TodoApi.filteredTodos(todos,true,'some');
      expect(filteredTodo.length).toBe(2);
    });
    it('should return all todos if search text empty',()=>{
      var filteredTodo = TodoApi.filteredTodos(todos,true,'');
      expect(filteredTodo.length).toBe(3);
    });
  });
});
