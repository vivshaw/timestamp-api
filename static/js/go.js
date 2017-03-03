function go() {
  var url = "https://timestamp-codecamp.herokuapp.com/"
  var query = document.getElementById("url").value
  window.location.href = url + query
  return false
}