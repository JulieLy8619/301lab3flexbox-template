'use strict';


let imageDataSet1 = [
  {
    'image_url': 'http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg',
    'title': 'UniWhal',
    'description': 'A unicorn and a narwhal nuzzling their horns',
    'keyword': 'narwhal',
    'horns': 1
  },
  {
    'image_url': 'https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80',
    'title': 'Rhino Family',
    'description': 'Mother (or father) rhino with two babies',
    'keyword': 'rhino',
    'horns': 2
  },
  {
    'image_url': 'https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg',
    'title': 'Unicorn Head',
    'description': 'Someone wearing a creepy unicorn head mask',
    'keyword': 'unicorn', 
    'horns': 1
  },
  {
    'image_url': 'https://images.unsplash.com/photo-1518946222227-364f22132616?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4836a6fca62e7dce9324346bacfde085&auto=format&fit=crop&w=2534&q=80',
    'title': 'UniLego',
    'description': 'Lego figurine dressed in a unicorn outfit',
    'keyword': 'unilego',
    'horns': 1
  },
  {
    'image_url': 'https://i.pinimg.com/736x/b4/61/06/b46106830b841017ea59870b27ec18dc--narwhals-a-unicorn.jpg',
    'title': 'Basically a unicorn',
    'description': 'A narwhal is basically a unicorn after all, right?',
    'keyword': 'narwhal',
    'horns': 1
  },
  {
    'image_url': 'https://i.pinimg.com/originals/16/cf/2a/16cf2a0b3fd51b9bee08bb6296193b75.jpg',
    'title': '#truth',
    'description': 'The truth behind narwhals',
    'keyword': 'narwhal',
    'horns': 1
  },
  {
    'image_url': 'https://secure.img1-ag.wfcdn.com/im/17007094/resize-h800%5Ecompr-r85/3589/35892451/Baby+Rhino+Figurine.jpg',
    'title': 'Baby Rhino',
    'description': 'This is actually a figurine but it looks kinda real',
    'keyword': 'rhino',
    'horns': 2
  },
  {
    'image_url': 'https://vignette.wikia.nocookie.net/landbeforetime/images/c/c3/Cera_infobox.png/revision/latest?cb=20180422005003',
    'title': 'Cera',
    'description': 'Three horns but still, horns. And who doesn\'t like The Land Before Time?',
    'keyword': 'triceratops',
    'horns': 3
  },
  {
    'image_url': 'https://ae01.alicdn.com/kf/HTB18GwSQVXXXXaZaXXXq6xXFXXXh/Animal-Cosplay-Costume-Narwhal-Onesie-Mens-Womens-Cartoon-Whale-Pajamas.jpg',
    'title': 'Narwhal costume',
    'description': 'A woman wearing a blue narwhal costume',
    'keyword': 'narwhal',
    'horns': 1
  },
  {
    'image_url': 'https://www.shopmascot.com/image/cache/mascotnew/new196-800x800.jpg',
    'title': 'Rhino costume',
    'description': 'Mascots have to get their costumes somewhere',
    'keyword': 'rhino',
    'horns': 2
  },
  {
    'image_url': 'https://www.tinselbox.com/wp-content/uploads/2018/03/I-BELIEVE-IN-UNICORNS-FREE-PRINTABLE-WATERCOLOR-7-of-1.jpg',
    'title': 'Believe',
    'description': 'I believe in unicorns, do you?',
    'keyword': 'unicorn',
    'horns': 1
  },
  {
    'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg/220px-Markhor_Schraubenziege_Capra_falconeri_Zoo_Augsburg-02.jpg',
    'title': 'Markhor',
    'description': 'These wild goats eat snakes, then secrete a foam that locals fight over for the antivemon properties -- how cool is that?',
    'keyword': 'markhor',
    'horns': 2
  },
  {
    'image_url': 'http://www.zooborns.com/.a/6a010535647bf3970b0223c84d5959200c-800wi',
    'title': 'Baby markhor',
    'description': 'Even the babies are adorable',
    'keyword': 'markhor',
    'horns': 2
  },
  {
    'image_url': 'https://cdn.modernfarmer.com/wp-content/uploads/2014/08/28476658_9c97f35096_o.jpg',
    'title': 'Mouflon',
    'description': 'Those horns though',
    'keyword': 'mouflon',
    'horns': 2
  },
  {
    'image_url': 'https://cdn.modernfarmer.com/wp-content/uploads/2014/08/addax.jpg',
    'title': 'Addax',
    'description': 'This guy is basically extinct but survives well in captivity, so they\'re frequently found in zoos',
    'keyword': 'addax',
    'horns': 2
  },
  {
    'image_url': 'https://cbsnews3.cbsistatic.com/hub/i/r/2013/03/05/5b414225-a645-11e2-a3f0-029118418759/thumbnail/620x350/2d4cf24685b45c22912e64d2004fec8d/Baby_Mouflon_Wild_Sheep.jpg',
    'title': 'Baby mouflon',
    'description': 'The cuteness that is a baby mouflon asleep',
    'keyword': 'mouflon',
    'horns': 2
  },
  {
    'image_url': 'https://cdn.modernfarmer.com/wp-content/uploads/2014/08/chameleon.jpg',
    'title': 'Happy Jackson\'s Chameleon',
    'description': 'These are really common in Hawaii',
    'keyword': 'chameleon',
    'horns': 2
  },
  {
    'image_url': 'https://imgc.allpostersimages.com/img/print/posters/dlillc-jackson-s-chameleon_a-G-13448768-14258384.jpg',
    'title': 'Serious Jackson\'s Chameleon',
    'description': 'This one is very serious.',
    'keyword': 'chameleon',
    'horns': 3
  },
  {
    'image_url': 'https://www.nps.gov/band/learn/nature/images/short-horned-lizard-open-mouth-18.jpg?maxwidth=650&autorotate=false',
    'title': 'Horned Lizard',
    'description': 'Fave food: ants',
    'keyword': 'lizard',
    'horns': 100
  },
  {
    'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Smaug_par_David_Demaret.jpg/290px-Smaug_par_David_Demaret.jpg',
    'title': 'Smaug',
    'description': 'Fan illustration of Smaug from "The Hobbit"',
    'keyword': 'dragon',
    'horns': 100
  }
];

let imageDataSet2 = [
  {
    'image_url': 'http://cdn.shopify.com/s/files/1/0288/5332/files/jackalope_in_the_wild_large.jpg?11502701639502724114',
    'title': 'Jackalope',
    'description': 'You know, just a jackalope in there for good measure. I know they don\'t have horns, but they have antlers. And they may or may not be real.',
    'keyword': 'jackalope',
    'horns': 2
  },
  {
    'image_url': 'http://mediad.publicbroadcasting.net/p/kuvo/files/styles/medium/public/201707/dizzy_gillespie.jpg',
    'title': 'Dizzy Gillespie',
    'description': 'Technically, this is a single horn',
    'keyword': 'horn',
    'horns': 1
  },
  {
    'image_url': 'https://res.cloudinary.com/teepublic/image/private/s--HybAy5WN--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1519814898/production/designs/2404352_0.jpg',
    'title': 'Baby Rhino',
    'description': 'So cute, you can print it on a shirt',
    'keyword': 'rhino',
    'horns': 2
  },
  {
    'image_url': 'https://images.vat19.com/covers/large/tricerataco-taco-holder.jpg',
    'title': 'TriceraTaco',
    'description': 'It\'s the perfect size and shape to hold your tacos for you',
    'keyword': 'triceratops', 
    'horns': 3
  },
  {
    'image_url': 'http://mesozoic.mikelaraman.com/wp-content/uploads/2017/08/trike_scales-604x270.jpg',
    'title': 'Jurassic Park',
    'description': 'The fake triceratops from the original Jurrasic Part movie',
    'keyword': 'triceratops',
    'horns': 3
  },
  {
    'image_url': 'https://s25878.pcdn.co/wp-content/uploads/2017/01/88.jpeg',
    'title': 'Narwhal swimming',
    'description': 'A narwhal swimming with the light shining through the water',
    'keyword': 'narwhal',
    'horns': 1
  },
  {
    'image_url': 'http://www.hobbycraft.co.uk/supplyimages/623011_1000_1_800.jpg',
    'title': 'Pink Unicorn',
    'description': 'For when you need to die cut a unicorn',
    'keyword': 'unicorn',
    'horns': 1
  },
  {
    'image_url': 'https://images-na.ssl-images-amazon.com/images/I/61MgJUG01KL._SX346_BO1,204,203,200_.jpg',
    'title': 'Unicorn Notebook',
    'description': 'Really, what could be better than unicorns, donuts, and ice cream all in one notebook?!',
    'keyword': 'unicorn',
    'horns': 1
  },
  {
    'image_url': 'https://cdn.shopify.com/s/files/1/1420/6660/products/Narwal_2.jpg?v=1527714893',
    'title': 'Norman the Narwhal',
    'description': 'He\'s cute, he\'s a plush!',
    'keyword': 'narwhal',
    'horns': 1
  },
  {
    'image_url': 'https://cdn.shopify.com/s/files/1/1420/6660/products/Unicorn_Front_little_bigger_2048x2048.jpg?v=1517539703',
    'title': 'Cupcake the Unicorn',
    'description': 'Because Norman the Narwhal needs friends',
    'keyword': 'unicorn',
    'horns': 1
  },
  {
    'image_url': 'https://images-na.ssl-images-amazon.com/images/I/91i3QWg3vWL._UL1500_.jpg',
    'title': 'Unicorn Head',
    'description': 'What better way to scare people than with a strange unicorn head mask',
    'keyword': 'unicorn',
    'horns': 1
  },
  {
    'image_url': 'http://news.images.itv.com/image/file/1609541/stream_img.jpg',
    'title': 'Baby Rhino Rolling',
    'description': 'What could be cuter than a baby rhino rolling around?!',
    'keyword': 'rhino',
    'horns': 2
  },
  {
    'image_url': 'https://i.pinimg.com/originals/34/b8/4f/34b84f9b61883e69181d81f21d8f1a2d.jpg',
    'title': 'Trotting rhino',
    'description': 'He has a little bit of pep in his step',
    'keyword': 'rhino',
    'horns': 2
  },
  {
    'image_url': 'https://www.asianscientist.com/wp-content/uploads/bfi_thumb/Markhor-Goat-Species-Makes-Comeback-In-Pakistanj-2sdpf8o7u9d8lby3t6rif4.jpg',
    'title': 'Markhor family',
    'description': 'Seriously those horns are amazing',
    'keyword': 'markhor',
    'horns': 2
  },
  {
    'image_url': 'https://media.mnn.com/assets/images/2015/05/saiga-antelope-lead.jpg.653x0_q80_crop-smart.jpg',
    'title': 'Saiga',
    'description': 'These poor guys are on the critically endangered list',
    'keyword': 'saiga',
    'horns': 2
  },
  {
    'image_url': 'http://assets.panda.org/img/original/saiga_antelope_wwfwallpaper.jpg',
    'title': 'Saiga',
    'description': 'They\'re like a camel and an antelope in one',
    'keyword': 'saiga',
    'horns': 2
  },
  {
    'image_url': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Mouflon_in_zoo.jpg/1200px-Mouflon_in_zoo.jpg',
    'title': 'Mouflons in the snow',
    'description': 'It is believed that the mouflon is the ancestor for all domesticated sheep breeds',
    'keyword': 'mouflon',
    'horns': 2
  },
  {
    'image_url': 'http://www.californiaherps.com/lizards/images/cjacksonimbmale.jpg',
    'title': 'Jackson\'s Chameleon',
    'description': 'Almost looks like he\'s smiling. I wouldn\'t want to get into a fight with him!',
    'keyword': 'chameleon',
    'horns': 2
  },
  {
    'image_url': 'http://ichef.bbci.co.uk/wwfeatures/wm/live/1280_640/images/live/p0/37/4s/p0374s1h.jpg',
    'title': 'Horned Lizard',
    'description': 'They can shoot blood out of their eyes as a defense mechanism',
    'keyword': 'lizard',
    'horns': 100
  },
  {
    'image_url': 'https://vignette.wikia.nocookie.net/harrypotter/images/3/3e/Horntail-prm.png/revision/latest?cb=20161208133543',
    'title': 'Hungarian Horntail from the Triwizard Tournament',
    'description': 'Never tickle a sleeping dragon',
    'keyword': 'dragon',
    'horns': 100
  }
]
