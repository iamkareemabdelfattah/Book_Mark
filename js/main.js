var bookName = document.getElementById( "siteName" );
var siteUrl = document.getElementById( "siteUrl" );
var addUrl = document.getElementById( "addUrl" );
var inputs = document.getElementsByClassName( "form-control" );

var bookContainer = [];

if ( JSON.parse( localStorage.getItem( "booktList" ) ) != null )
{
  bookContainer = JSON.parse( localStorage.getItem( "booktList" ) );
  showData();
}

addUrl.onclick = function ( e )
{
  bookNameValid = false;
  siteUrlValid = false;
  if ( bookName.value !== "" || siteUrl.value !== "" )
  {
    addBookM();
    showData();
    clearData();
  }

  if ( bookNameValid === false || siteUrlValid === false )
  {
    e.preventDefault();
  }

};
function addBookM ()
{
  var bookMarker = {
    name: bookName.value,
    url: siteUrl.value
  };
  bookContainer.push( bookMarker );
  localStorage.setItem( "booktList", JSON.stringify( bookContainer ) );
}

function showData ()
{
  var cartoona = ``;
  for ( var i = 0; i < bookContainer.length; i++ )
  {
    cartoona += `
    <div>
    <span class="fs-4 fw-bold text-capitalize pe-5">${ bookContainer[ i ].name }</span>
    <a href="${ bookContainer[ i ].url }" target="_blank"><button class="btn btn-outline-primary">visit</button></a>
    <button onclick="deleteBook(${ i })" class="btn btn-outline-danger">Delete</button>
    </div>
    `;
  }
  document.getElementById( "output" ).innerHTML = cartoona;
}

function clearData ()
{
  for ( var i = 0; i < inputs.length; i++ )
  {
    inputs[ i ].value = "";
  }
}

function deleteBook ( index )
{
  bookContainer.splice( index, 1 );
  showData();
  localStorage.setItem( "booktList", JSON.stringify( bookContainer ) );
}