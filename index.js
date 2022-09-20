// const input = document.getElementById('button');
// input.addEventListener('click', function() {
//   alert('I was clicked!');
// });


// function() {
//     alert('I was clicked!');
//   }
    
function addingEventListener() {

    const input = document.getElementById('button');

function clickAlert() {
  alert('I was clicked!');
}

input.addEventListener('click', clickAlert);
    }
const sinon = require('sinon');

describe("index.js", () => {
  let input;

  beforeEach(function() {
    input = document.getElementById('button');
    sinon.spy(input, 'addEventListener');
  })

  it("binds an event listener in addingEventListener()", () => {
    addingEventListener();
    expect(input.addEventListener.called).to.be.true;
  })
})
 
