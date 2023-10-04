let arr = [{
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 120
    }
}, {
    "id": 2,
    "title": "Mens Casual Premium Slim Fit T-Shirts ",
    "price": 22.3,
    "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    "rating": {
        "rate": 4.1,
        "count": 259
    }
}, {
    "id": 3,
    "title": "Mens Cotton Jacket",
    "price": 55.99,
    "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    "rating": {
        "rate": 4.7,
        "count": 500
    }
}, {
    "id": 4,
    "title": "Mens Casual Slim Fit",
    "price": 15.99,
    "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    "rating": {
        "rate": 2.1,
        "count": 430
    }
}, {
    "id": 5,
    "title": "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    "price": 695,
    "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 4.6,
        "count": 400
    }
}, {
    "id": 6,
    "title": "Solid Gold Petite Micropave ",
    "price": 168,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 3.9,
        "count": 70
    }
},
{
    "id": 7,
    "title": "Solid Gold Petite Micropave ",
    "price": 138,
    "description": "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
    "category": "jewelery",
    "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    "rating": {
        "rate": 6.9,
        "count": 90
    }
}
]
let article_box = document.createElement('div'),
    article_grid = document.createElement('article'),
    div2_grid = document.createElement('div'),
    div2_grid_img = document.createElement('img'),
    div_p_sec2_grid = document.createElement('div'),
    article_box_h2 = document.createElement('h2'),
    article_box_p = document.createElement('p'),
    article_box_spans = document.createElement('div'),
    article_box_span1 = document.createElement('span'),
    article_box_span1_img = document.createElement('img'),
    article_box_span1_p = document.createElement('a'),
    article_box_span2 = document.createElement('span'),
    article_box_span2_img = document.createElement('img'),
    article_box_span2_p = document.createElement('a'),
    article_box_span3 = document.createElement('span'),
    article_box_span3_img = document.createElement('img'),
    article_box_span3_p = document.createElement('a'),
    article_box_btn = document.createElement('button');


article_box.classList.add('article_box')
article_grid.classList.add('article_grid')
div2_grid.classList.add('div2_grid')
div2_grid_img.classList.add('div2_gridimg')
div_p_sec2_grid.classList.add('div_p_sec2_grid')
article_box_p.classList.add('div_p_sec2_gridp')
article_box_spans.classList.add('spans')
article_box_span1.classList.add('span1')
article_box_span2.classList.add('span2')
article_box_span3.classList.add('span3')
article_box_btn.classList.add('btn3')

div2_grid_img.src = './img/81fPKd-2AYL 1.png'
article_box_span1_img.src = 'img/Group 7.png'
article_box_span2_img.src = 'img/Group 10.svg'
article_box_span3_img.src = 'img/Group 9.png'
article_box_span1_p.innerHTML = '109'
article_box_span2_p.innerHTML = '3,9'
article_box_span3_p.innerHTML = '120'
article_box_h2.innerHTML = 'MEN’S CLOTHING (120)'
article_box_p.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches)in the padded sleeve, your everyday'
article_box_btn.innerHTML = 'В избранное'


let sec1 = document.querySelector('.sec1')

sec1.append(article_box)
article_box.append(article_grid)
article_grid.append(div2_grid)
div2_grid.append(div2_grid_img)
article_grid.append(div_p_sec2_grid)
div_p_sec2_grid.append(article_box_h2)
div_p_sec2_grid.append(article_box_p)
div_p_sec2_grid.append(article_box_spans)
article_box_spans.append(article_box_span1)
article_box_span1.append(article_box_span1_img)
article_box_span1.append(article_box_span1_p)
article_box_spans.append(article_box_span2)
article_box_span2.append(article_box_span2_img)
article_box_span2.append(article_box_span2_p)
article_box_spans.append(article_box_span3)
article_box_span3.append(article_box_span3_img)
article_box_span3.append(article_box_span3_p)
div_p_sec2_grid.append(article_box_btn)


let article_grid2 = document.createElement('article'),
    div2_grid2 = document.createElement('div'),
    div2_grid2_img = document.createElement('img'),
    div_p_sec2_grid2 = document.createElement('div'),
    article_box2_h2 = document.createElement('h2'),
    article_box2_p = document.createElement('p'),
    article_box2_spans = document.createElement('div'),
    article_box2_span1 = document.createElement('span'),
    article_box2_span1_img = document.createElement('img'),
    article_box2_span1_p = document.createElement('a'),
    article_box2_span2 = document.createElement('span'),
    article_box2_span2_img = document.createElement('img'),
    article_box2_span2_p = document.createElement('a'),
    article_box2_span3 = document.createElement('span'),
    article_box2_span3_img = document.createElement('img'),
    article_box2_span3_p = document.createElement('a'),
    article_box2_btn = document.createElement('button');


article_grid2.classList.add('article_grid')
div2_grid2.classList.add('div2_grid')
div2_grid2_img.classList.add('div2_gridimg')
div_p_sec2_grid2.classList.add('div_p_sec2_grid')
article_box2_p.classList.add('div_p_sec2_gridp')
article_box2_spans.classList.add('spans')
article_box2_span1.classList.add('span1')
article_box2_span2.classList.add('span2')
article_box2_span3.classList.add('span3')
article_box2_btn.classList.add('btn3')

div2_grid2_img.src = './img/81fPKd-2AYL 1.png'
article_box2_span1_img.src = 'img/Group 7.png'
article_box2_span2_img.src = 'img/Group 10.svg'
article_box2_span3_img.src = 'img/Group 9.png'
article_box2_span1_p.innerHTML = '109'
article_box2_span2_p.innerHTML = '3,9'
article_box2_span3_p.innerHTML = '120'
article_box2_h2.innerHTML = 'MEN’S CLOTHING (120)'
article_box2_p.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches)in the padded sleeve, your everyday'
article_box2_btn.innerHTML = 'В избранное'




article_box.append(article_grid2)
article_grid2.append(div2_grid2)
div2_grid2.append(div2_grid2_img)
article_grid2.append(div_p_sec2_grid2)
div_p_sec2_grid2.append(article_box2_h2)
div_p_sec2_grid2.append(article_box2_p)
div_p_sec2_grid2.append(article_box2_spans)
article_box2_spans.append(article_box2_span1)
article_box2_span1.append(article_box2_span1_img)
article_box2_span1.append(article_box2_span1_p)
article_box2_spans.append(article_box2_span2)
article_box2_span2.append(article_box2_span2_img)
article_box2_span2.append(article_box2_span2_p)
article_box2_spans.append(article_box2_span3)
article_box2_span3.append(article_box2_span3_img)
article_box2_span3.append(article_box2_span3_p)
div_p_sec2_grid2.append(article_box2_btn)


let article_grid3 = document.createElement('article'),
    div2_grid3 = document.createElement('div'),
    div2_grid3_img = document.createElement('img'),
    div_p_sec2_grid3 = document.createElement('div'),
    article_box4_h2 = document.createElement('h2'),
    article_box5_p = document.createElement('p'),
    article_box3_spans = document.createElement('div'),
    article_box2_span4 = document.createElement('span'),
    article_box2_span4_img = document.createElement('img'),
    article_box2_span4_p = document.createElement('a'),
    article_box2_span5 = document.createElement('span'),
    article_box2_span5_img = document.createElement('img'),
    article_box2_span5_p = document.createElement('a'),
    article_box2_span6 = document.createElement('span'),
    article_box2_span6_img = document.createElement('img'),
    article_box2_span6_p = document.createElement('a'),
    article_box3_btn = document.createElement('button');


article_grid3.classList.add('article_grid')
div2_grid3.classList.add('div2_grid')
div2_grid3_img.classList.add('div2_gridimg')
div_p_sec2_grid3.classList.add('div_p_sec2_grid')
article_box5_p.classList.add('div_p_sec2_gridp')
article_box3_spans.classList.add('spans')
article_box2_span4.classList.add('span1')
article_box2_span5.classList.add('span2')
article_box2_span6.classList.add('span3')
article_box3_btn.classList.add('btn3')

div2_grid3_img.src = './img/81fPKd-2AYL 1.png'
article_box2_span4_img.src = 'img/Group 7.png'
article_box2_span5_img.src = 'img/Group 10.svg'
article_box2_span6_img.src = 'img/Group 9.png'
article_box2_span4_p.innerHTML = '109'
article_box2_span5_p.innerHTML = '3,9'
article_box2_span6_p.innerHTML = '120'
article_box4_h2.innerHTML = 'MEN’S CLOTHING (120)'
article_box5_p.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches)in the padded sleeve, your everyday'
article_box3_btn.innerHTML = 'В избранное'




article_box.append(article_grid3)
article_grid3.append(div2_grid3)
div2_grid3.append(div2_grid3_img)
article_grid3.append(div_p_sec2_grid3)
div_p_sec2_grid3.append(article_box4_h2)
div_p_sec2_grid3.append(article_box5_p)
div_p_sec2_grid3.append(article_box3_spans)
article_box3_spans.append(article_box2_span4)
article_box2_span4.append(article_box2_span4_img)
article_box2_span4.append(article_box2_span4_p)
article_box3_spans.append(article_box2_span5)
article_box2_span5.append(article_box2_span5_img)
article_box2_span5.append(article_box2_span5_p)
article_box3_spans.append(article_box2_span6)
article_box2_span6.append(article_box2_span6_img)
article_box2_span6.append(article_box2_span6_p)
div_p_sec2_grid3.append(article_box3_btn)


let article_grid4 = document.createElement('article'),
    div2_grid4 = document.createElement('div'),
    div2_grid4_img = document.createElement('img'),
    div_p_sec2_grid4 = document.createElement('div'),
    article_box6_h2 = document.createElement('h2'),
    article_box7_p = document.createElement('p'),
    article_box4_spans = document.createElement('div'),
    article_box2_span7 = document.createElement('span'),
    article_box2_span7_img = document.createElement('img'),
    article_box2_span7_p = document.createElement('a'),
    article_box2_span8 = document.createElement('span'),
    article_box2_span8_img = document.createElement('img'),
    article_box2_span8_p = document.createElement('a'),
    article_box2_span9 = document.createElement('span'),
    article_box2_span9_img = document.createElement('img'),
    article_box2_span9_p = document.createElement('a'),
    article_box5_btn = document.createElement('button');


article_grid4.classList.add('article_grid')
div2_grid4.classList.add('div2_grid')
div2_grid4_img.classList.add('div2_gridimg')
div_p_sec2_grid4.classList.add('div_p_sec2_grid')
article_box7_p.classList.add('div_p_sec2_gridp')
article_box4_spans.classList.add('spans')
article_box2_span7.classList.add('span1')
article_box2_span8.classList.add('span2')
article_box2_span9.classList.add('span3')
article_box5_btn.classList.add('btn3')

div2_grid4_img.src = './img/81fPKd-2AYL 1.png'
article_box2_span7_img.src = 'img/Group 7.png'
article_box2_span8_img.src = 'img/Group 10.svg'
article_box2_span9_img.src = 'img/Group 9.png'
article_box2_span7_p.innerHTML = '109'
article_box2_span8_p.innerHTML = '3,9'
article_box2_span9_p.innerHTML = '120'
article_box6_h2.innerHTML = 'MEN’S CLOTHING (120)'
article_box7_p.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches)in the padded sleeve, your everyday'
article_box5_btn.innerHTML = 'В избранное'




article_box.append(article_grid4)
article_grid4.append(div2_grid4)
div2_grid4.append(div2_grid4_img)
article_grid4.append(div_p_sec2_grid4)
div_p_sec2_grid4.append(article_box6_h2)
div_p_sec2_grid4.append(article_box7_p)
div_p_sec2_grid4.append(article_box4_spans)
article_box4_spans.append(article_box2_span7)
article_box2_span7.append(article_box2_span7_img)
article_box2_span7.append(article_box2_span7_p)
article_box4_spans.append(article_box2_span8)
article_box2_span8.append(article_box2_span8_img)
article_box2_span8.append(article_box2_span8_p)
article_box4_spans.append(article_box2_span9)
article_box2_span9.append(article_box2_span9_img)
article_box2_span9.append(article_box2_span9_p)
div_p_sec2_grid4.append(article_box5_btn)



let article_grid5 = document.createElement('article'),
    div2_grid5 = document.createElement('div'),
    div2_grid5_img = document.createElement('img'),
    div_p_sec2_grid5 = document.createElement('div'),
    article_box8_h2 = document.createElement('h2'),
    article_box9_p = document.createElement('p'),
    article_box5_spans = document.createElement('div'),
    article_box2_span10 = document.createElement('span'),
    article_box2_span10_img = document.createElement('img'),
    article_box2_span10_p = document.createElement('a'),
    article_box2_span11 = document.createElement('span'),
    article_box2_span11_img = document.createElement('img'),
    article_box2_span11_p = document.createElement('a'),
    article_box2_span12 = document.createElement('span'),
    article_box2_span12_img = document.createElement('img'),
    article_box2_span12_p = document.createElement('a'),
    article_box6_btn = document.createElement('button');


article_grid5.classList.add('article_grid')
div2_grid5.classList.add('div2_grid')
div2_grid5_img.classList.add('div2_gridimg')
div_p_sec2_grid5.classList.add('div_p_sec2_grid')
article_box9_p.classList.add('div_p_sec2_gridp')
article_box5_spans.classList.add('spans')
article_box2_span10.classList.add('span1')
article_box2_span11.classList.add('span2')
article_box2_span12.classList.add('span3')
article_box6_btn.classList.add('btn3')

div2_grid5_img.src = './img/81fPKd-2AYL 1.png'
article_box2_span10_img.src = 'img/Group 7.png'
article_box2_span11_img.src = 'img/Group 10.svg'
article_box2_span12_img.src = 'img/Group 9.png'
article_box2_span10_p.innerHTML = '109'
article_box2_span11_p.innerHTML = '3,9'
article_box2_span12_p.innerHTML = '120'
article_box8_h2.innerHTML = 'MEN’S CLOTHING (120)'
article_box9_p.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches)in the padded sleeve, your everyday'
article_box6_btn.innerHTML = 'В избранное'




article_box.append(article_grid5)
article_grid5.append(div2_grid5)
div2_grid5.append(div2_grid5_img)
article_grid5.append(div_p_sec2_grid5)
div_p_sec2_grid5.append(article_box8_h2)
div_p_sec2_grid5.append(article_box9_p)
div_p_sec2_grid5.append(article_box5_spans)
article_box5_spans.append(article_box2_span10)
article_box2_span10.append(article_box2_span10_img)
article_box2_span10.append(article_box2_span10_p)
article_box5_spans.append(article_box2_span11)
article_box2_span11.append(article_box2_span11_img)
article_box2_span11.append(article_box2_span11_p)
article_box5_spans.append(article_box2_span12)
article_box2_span12.append(article_box2_span12_img)
article_box2_span12.append(article_box2_span12_p)
div_p_sec2_grid5.append(article_box6_btn)

let article_grid6 = document.createElement('article'),
    div2_grid6 = document.createElement('div'),
    div2_grid6_img = document.createElement('img'),
    div_p_sec2_grid6 = document.createElement('div'),
    article_box9_h2 = document.createElement('h2'),
    article_box10_p = document.createElement('p'),
    article_box6_spans = document.createElement('div'),
    article_box2_span13 = document.createElement('span'),
    article_box2_span13_img = document.createElement('img'),
    article_box2_span13_p = document.createElement('a'),
    article_box2_span14 = document.createElement('span'),
    article_box2_span14_img = document.createElement('img'),
    article_box2_span14_p = document.createElement('a'),
    article_box2_span15 = document.createElement('span'),
    article_box2_span15_img = document.createElement('img'),
    article_box2_span15_p = document.createElement('a'),
    article_box7_btn = document.createElement('button');


article_grid6.classList.add('article_grid')
div2_grid6.classList.add('div2_grid')
div2_grid6_img.classList.add('div2_gridimg')
div_p_sec2_grid6.classList.add('div_p_sec2_grid')
article_box10_p.classList.add('div_p_sec2_gridp')
article_box6_spans.classList.add('spans')
article_box2_span13.classList.add('span1')
article_box2_span14.classList.add('span2')
article_box2_span15.classList.add('span3')
article_box7_btn.classList.add('btn3')

div2_grid6_img.src = './img/81fPKd-2AYL 1.png'
article_box2_span13_img.src = 'img/Group 7.png'
article_box2_span14_img.src = 'img/Group 10.svg'
article_box2_span15_img.src = 'img/Group 9.png'
article_box2_span13_p.innerHTML = '109'
article_box2_span14_p.innerHTML = '3,9'
article_box2_span15_p.innerHTML = '120'
article_box9_h2.innerHTML = 'MEN’S CLOTHING (120)'
article_box10_p.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches)in the padded sleeve, your everyday'
article_box7_btn.innerHTML = 'В избранное'


article_box.append(article_grid6)
article_grid6.append(div2_grid6)
div2_grid6.append(div2_grid6_img)
article_grid6.append(div_p_sec2_grid6)
div_p_sec2_grid6.append(article_box9_h2)
div_p_sec2_grid6.append(article_box10_p)
div_p_sec2_grid6.append(article_box6_spans)
article_box6_spans.append(article_box2_span13)
article_box2_span13.append(article_box2_span13_img)
article_box2_span13.append(article_box2_span13_p)
article_box6_spans.append(article_box2_span14)
article_box2_span14.append(article_box2_span14_img)
article_box2_span14.append(article_box2_span14_p)
article_box6_spans.append(article_box2_span15)
article_box2_span15.append(article_box2_span15_img)
article_box2_span15.append(article_box2_span15_p)
div_p_sec2_grid6.append(article_box7_btn)

let article_grid7 = document.createElement('article'),
    div2_grid7 = document.createElement('div'),
    div2_grid7_img = document.createElement('img'),
    div_p_sec2_grid7 = document.createElement('div'),
    article_box10_h2 = document.createElement('h2'),
    article_box11_p = document.createElement('p'),
    article_box7_spans = document.createElement('div'),
    article_box2_span16 = document.createElement('span'),
    article_box2_span16_img = document.createElement('img'),
    article_box2_span16_p = document.createElement('a'),
    article_box2_span17 = document.createElement('span'),
    article_box2_span17_img = document.createElement('img'),
    article_box2_span17_p = document.createElement('a'),
    article_box2_span18 = document.createElement('span'),
    article_box2_span18_img = document.createElement('img'),
    article_box2_span18_p = document.createElement('a'),
    article_box8_btn = document.createElement('button');


article_grid7.classList.add('article_grid')
div2_grid7.classList.add('div2_grid')
div2_grid7_img.classList.add('div2_gridimg')
div_p_sec2_grid7.classList.add('div_p_sec2_grid')
article_box11_p.classList.add('div_p_sec2_gridp')
article_box7_spans.classList.add('spans')
article_box2_span16.classList.add('span1')
article_box2_span17.classList.add('span2')
article_box2_span18.classList.add('span3')
article_box8_btn.classList.add('btn3')

div2_grid7_img.src = './img/81fPKd-2AYL 1.png'
article_box2_span16_img.src = 'img/Group 7.png'
article_box2_span17_img.src = 'img/Group 10.svg'
article_box2_span18_img.src = 'img/Group 9.png'
article_box2_span16_p.innerHTML = '109'
article_box2_span17_p.innerHTML = '3,9'
article_box2_span18_p.innerHTML = '120'
article_box10_h2.innerHTML = 'MEN’S CLOTHING (120)'
article_box11_p.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches)in the padded sleeve, your everyday'
article_box8_btn.innerHTML = 'В избранное'


article_box.append(article_grid7)
article_grid7.append(div2_grid7)
div2_grid7.append(div2_grid7_img)
article_grid7.append(div_p_sec2_grid7)
div_p_sec2_grid7.append(article_box10_h2)
div_p_sec2_grid7.append(article_box11_p)
div_p_sec2_grid7.append(article_box7_spans)
article_box7_spans.append(article_box2_span16)
article_box2_span16.append(article_box2_span16_img)
article_box2_span16.append(article_box2_span16_p)
article_box7_spans.append(article_box2_span17)
article_box2_span17.append(article_box2_span17_img)
article_box2_span17.append(article_box2_span17_p)
article_box7_spans.append(article_box2_span18)
article_box2_span18.append(article_box2_span18_img)
article_box2_span18.append(article_box2_span18_p)
div_p_sec2_grid7.append(article_box8_btn)
let btns = document.querySelectorAll(".article_box button");
let h1_count = document.querySelector('h1')
let count = 1
console.log(btns);
btns.forEach((button, index) => {
    let button1 = document.querySelector('.btn1')
    let button2 = document.querySelector('.btn2')
    button.onclick = () => {
        button.classList.toggle('blue');
        if (button.innerHTML === "В избранное") {
            button.innerHTML = "Добавлено";
            console.log(arr[index]);
            h1_count.innerHTML = 'В корзине:'+ count++ + 'товар'
        } else {
            h1_count.innerHTML ='В корзине:'+ count-1 + 'товар'
            button.innerHTML = "В избранное";
        }
    }
    button1.onclick = () => {
        arr.splice(index, article_grid)
        article_grid6.style.display = 'none'
    }
    button2.onclick = () => {
        arr.splice(index, article_grid)
        article_grid6.style.display = 'flex'
    }
});

