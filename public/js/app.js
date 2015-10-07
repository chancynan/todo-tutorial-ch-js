function toggleTodo(node){
  //var node = event.target;
  return function(event) {
	  var checkbox = node.childNodes[0];
	  if (checkbox.className.indexOf('fa-square-o') !== -1 ) {
	    checkbox.className = checkbox.className.replace('fa-square-o', 'fa-check-square');
	  } else {
	    checkbox.className = checkbox.className.replace('fa-check-square', 'fa-square-o');
	  }
  }
} 

function linkTodo(todo){
  todo.onclick = toggleTodo(todo);
}

var nodes = document.querySelectorAll('.todos li a');
for(var i = 0; i < nodes.length; i++) {
  linkTodo(nodes[i]);
}

function formDisplayToggle() {
  var form = document.querySelectorAll('#createForm')[0];
  var showLink = document.querySelectorAll('#showLink')[0];
  var hideLink = document.querySelectorAll('#hideLink')[0];
  form.style.display == 'none' ? form.style.display = 'block' : form.style.display = 'none';
  showLink.style.display == 'none' ? showLink.style.display = 'inline' : showLink.style.display = 'none';
  hideLink.style.display == 'none' ? hideLink.style.display = 'inline' : hideLink.style.display = 'none';
}