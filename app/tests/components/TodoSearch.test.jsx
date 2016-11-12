var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoSearch = require('TodoSearch');

describe('TodoSearch',function(){
  it('should exist',function(){
    expect(TodoSearch).toExist();
  });
  it('should call onSearch prop with entered input text', ()=>{
    var searchText = 'Dog';
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoSearch));
    todoSearch.refs.searchText.value = searchText;
    TestUtils.Simulate.change(todoSearch.refs.searchText);
    expect(spy).toHaveBeenCalledWith(false,searchText);
  });
  it('should call onSearch prop with checked showCompleted', ()=>{
    var showCompleted = true;
    var spy = expect.createSpy();
    var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
    var $el = $(ReactDOM.findDOMNode(todoSearch));
    todoSearch.refs.showCompleted.checked = showCompleted;
    TestUtils.Simulate.change(todoSearch.refs.showCompleted);
    expect(spy).toHaveBeenCalledWith(showCompleted,'');
  });
});
