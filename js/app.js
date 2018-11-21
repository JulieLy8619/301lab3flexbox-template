'use strict';

// 11-15-18 jl added my stuff to this index and working from here on out

//make a constructor funtion
function Horns (obj) {
  this.url = obj.image_url;
  this.title = obj.title;
  this.description = obj.description;
  this.keyword = obj.keyword;
  this.horn = obj.horns;
}
Horns.allHornsArray = [];
Horns.listArrayKeys = [];
Horns.listArray = [];
Horns.sortedTitleArray = [];
Horns.sortedHornArray = [];

Horns.prototype.render = function() {
  const source = $('#image-template').html();
  const template = Handlebars.compile(source);
  return template(this);
}

Horns.prototype.makeList = function () {
  if (!Horns.listArrayKeys.includes(this.keyword)) {
    Horns.listArrayKeys.push(this.keyword);
    Horns.listArray.push(this);
  }
}

Horns.prototype.list = function () {

  let filterList = $('select');
  filterList.append($('<option></option>').val(this.keyword).html(this.keyword))


};

Horns.prototype.clearImage = function (){
  $('div').remove();
}

//get information from json and populate template, which also then renders to screen.
Horns.readJson1 = () => {
  $.get('data/page-1.json', 'json')
    .then(data => {
      data.forEach(obj => {
        Horns.allHornsArray.push(new Horns(obj));
      })
    })
    .then(Horns.loadHorns)
    .then(Horns.populateList)
    .then(Horns.populateForm)
}

Horns.readJson2 = () => {
  $.get('data/page-2.json', 'json')
    .then(data => {
      data.forEach(obj => {
        Horns.allHornsArray.push(new Horns(obj));
      })
    })
    .then(Horns.loadHorns)
    .then(Horns.populateList)
    .then(Horns.populateForm)
}

Horns.loadHorns = () => {
  Horns.allHornsArray.sort( (a,b) => {
    return ((a.title > b.title) ? 1 : (b.title > a.title ? -1 : 0));
  })
  Horns.allHornsArray.forEach( horn => {
    $('#photo-location').append(horn.render());
  })
}

Horns.populateForm= () => {
  Horns.listArray.forEach( horn => horn.list());
}

Horns.populateList = () => {
  Horns.allHornsArray.forEach(horn => horn.makeList());
}
Horns.clearPage = () => {
  Horns.allHornsArray.forEach(horn => horn.clearImage());
}




//default page one is displayed
$(() => Horns.readJson1());


//for filter list by keyword
$('select').on('change', function(event) {
  Horns.clearPage();
  let getKey = event.target.value;
  Horns.allHornsArray.forEach( hornObj => {
    if (getKey === 'default') {
      $('#photo-location').append(hornObj.render());
    } else if (getKey === hornObj.keyword) {
      $('#photo-location').append(hornObj.render());
    }
  })
});

//for sort by title or horn
//sort by horn number works, but i can't get it to sort by title
//i sorted the titles like i sorted the last names in challenge 3, which worked, so why doesn't it work here
$('input:radio').on('change', function(event) {
  Horns.clearPage();
  let sortKey = event.target.value;
  if (sortKey === 'title') {
    console.log('in title');
    Horns.sortedTitleArray = Horns.allHornsArray;
    Horns.sortedTitleArray.sort( (a,b) => {
      return ((a.title > b.title) ? 1 : (b.title > a.title ? -1 : 0));
    })
    Horns.sortedTitleArray.forEach( horn => {
      $('#photo-location').append(horn.render());
    })

  } else if (sortKey === 'horns') {
    console.log('in horns');
    Horns.sortedHornArray = Horns.allHornsArray;
    Horns.sortedHornArray.sort( (a,b) => {
      return (a.horn - b.horn);
    });
    Horns.sortedHornArray.forEach( horn => {
      $('#photo-location').append(horn.render());
    })
  }
})

//for if page one button is clicked
$('#page1').on('click', function(event) {
  $('input[value="title"]').prop('checked', false);
  $('input[value="horns"]').prop('checked', false);
  console.log('on page 1');
  Horns.clearPage();
  $('option').remove();
  let clearedFilterList1 = $('select');
  clearedFilterList1.append($('<option></option>').val('default').html('Filter by Keyword'));

  Horns.allHornsArray = [];
  Horns.listArrayKeys = [];
  Horns.listArray = [];
  Horns.sortedTitleArray = [];
  $(() => Horns.readJson1());
});

//for page 2 button is clicked
$('#page2').on('click', function(event) {
  $('input[value="title"]').prop('checked', false);
  $('input[value="horns"]').prop('checked', false);
  console.log('on page 1');
  Horns.clearPage();
  $('option').remove();
  let clearedFilterList2 = $('select');
  clearedFilterList2.append($('<option></option>').val('default').html('Filter by Keyword'));

  Horns.allHornsArray = [];
  Horns.listArrayKeys = [];
  Horns.listArray = [];
  Horns.sortedTitleArray = [];
  $(() => Horns.readJson2());
});
